/* eslint-disable no-unused-vars */
'use strict';

const Rules = require('eslint/lib/rules');
const coreRules = new Rules();
const coreRuleNames = Array.from(coreRules.getAllLoadedRules().keys());
const getRuleDefinition = ruleId => coreRules.get(ruleId);
function isDeprecated(ruleId) {
  const def = getRuleDefinition(ruleId);
  return Boolean(def && def.meta && def.meta.deprecated);
}

function notDeprecated(ruleId) {
  const def = getRuleDefinition(ruleId);
  return Boolean(def && def.meta && !def.meta.deprecated);
}

function isBestPractices(ruleId) {
  const def = getRuleDefinition(ruleId);
  return Boolean(def && def.meta && def.meta.docs && def.meta.docs.category === 'Best Practices');
}
function isPossibleErrors(ruleId) {
  const def = getRuleDefinition(ruleId);
  return Boolean(def && def.meta && def.meta.docs && def.meta.docs.category === 'Possible Errors');
}

function isStrictMode(ruleId) {
  const def = getRuleDefinition(ruleId);
  return Boolean(def && def.meta && def.meta.docs && def.meta.docs.category === 'Strict Mode');
}

function isStylisticIssues(ruleId) {
  const def = getRuleDefinition(ruleId);
  return Boolean(def && def.meta && def.meta.docs && def.meta.docs.category === 'Stylistic Issues');
}

function notRecommended(ruleId) {
  const def = getRuleDefinition(ruleId);
  return Boolean(def && def.meta && def.meta.docs && def.meta.docs.recommended === false);
}

function isFixable(ruleId) {
  const def = getRuleDefinition(ruleId);
  return Boolean(def && def.meta && def.meta.fixable);
}

function getUrl(ruleId) {
  const def = getRuleDefinition(ruleId);
  return [ruleId, def.meta.docs.url];
}

function getSchema(ruleId) {
  const def = getRuleDefinition(ruleId);
  return [ruleId, JSON.stringify(def.meta.schema)];
}
function getMeta(ruleId) {
  const def = getRuleDefinition(ruleId);
  return def.meta;
}
const bestPractices = coreRuleNames
  .filter(isBestPractices)
  .filter(notDeprecated)
  .filter(notRecommended)
  .filter(isFixable);
const possibleErrors = coreRuleNames
  .filter(isPossibleErrors)
  .filter(notDeprecated)
  .filter(notRecommended);
const strictMode = coreRuleNames
  .filter(isStrictMode)
  .filter(notDeprecated)
  .filter(notRecommended);
const stylisticIssues = coreRuleNames
  .filter(isStylisticIssues)
  .filter(notDeprecated)
  .filter(notRecommended)
  .filter(isFixable);
const getConfigFile = rules => `
  'use strict';
  
  module.exports = {
    rules: {
    
      ${rules
        .map(
          rule => `
        /**
         * @description ${getMeta(rule).docs.description}
         * @see ${getMeta(rule).docs.url}
         * @schema ${JSON.stringify(getMeta(rule).schema)}
         */
    '${rule}':2, \n`
        )
        .join('')}
    },
  };
  `;
function pbcopy(data) {
  const proc = require('child_process').spawn('pbcopy');
  proc.stdin.write(data);
  proc.stdin.end();
}

pbcopy(getConfigFile(stylisticIssues));
