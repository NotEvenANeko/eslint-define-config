import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type SinglelineHtmlElementContentNewlineOption = {
  /**
   * @see [singleline-html-element-content-newline](https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html)
   */
  ignoreWhenNoAttributes?: boolean;

  /**
   * @see [singleline-html-element-content-newline](https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html)
   */
  ignoreWhenEmpty?: boolean;

  /**
   * @see [singleline-html-element-content-newline](https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html)
   */
  ignores?: any[];
};

/**
 * Options.
 */
export type SinglelineHtmlElementContentNewlineOptions = [SinglelineHtmlElementContentNewlineOption?];

/**
 * Require a line break before and after the contents of a singleline element
 *
 * @see [singleline-html-element-content-newline](https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html)
 */
export type SinglelineHtmlElementContentNewlineRuleConfig = RuleConfig<SinglelineHtmlElementContentNewlineOptions>;

/**
 * Require a line break before and after the contents of a singleline element
 *
 * @see [singleline-html-element-content-newline](https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html)
 */
export interface SinglelineHtmlElementContentNewlineRule {
  /**
   * Require a line break before and after the contents of a singleline element
   *
   * @see [singleline-html-element-content-newline](https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html)
   */
  'vue/singleline-html-element-content-newline': SinglelineHtmlElementContentNewlineRuleConfig;
}
