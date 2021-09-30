import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoUselessVBindOption = {
  /**
   * @see [no-useless-v-bind](https://eslint.vuejs.org/rules/no-useless-v-bind.html)
   */
  ignoreIncludesComment?: boolean;

  /**
   * @see [no-useless-v-bind](https://eslint.vuejs.org/rules/no-useless-v-bind.html)
   */
  ignoreStringEscape?: boolean;
};

/**
 * Options.
 */
export type NoUselessVBindOptions = [NoUselessVBindOption?];

/**
 * Disallow unnecessary `v-bind` directives
 *
 * @see [no-useless-v-bind](https://eslint.vuejs.org/rules/no-useless-v-bind.html)
 */
export type NoUselessVBindRuleConfig = RuleConfig<NoUselessVBindOptions>;

/**
 * Disallow unnecessary `v-bind` directives
 *
 * @see [no-useless-v-bind](https://eslint.vuejs.org/rules/no-useless-v-bind.html)
 */
export interface NoUselessVBindRule {
  /**
   * Disallow unnecessary `v-bind` directives
   *
   * @see [no-useless-v-bind](https://eslint.vuejs.org/rules/no-useless-v-bind.html)
   */
  'vue/no-useless-v-bind': NoUselessVBindRuleConfig;
}
