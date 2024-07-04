import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

const eslintRules = {
  'no-console': 'warn',
};
const stylisticRules = {
  '@stylistic/semi': ['error', 'always'],
};

const unicornRules = {};

/** @type {import('eslint').Linter.FlatConfig} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: { ...globals.node, ...globals.jest } } },
  pluginJs.configs.recommended,
  stylistic.configs['recommended-flat'],
  eslintPluginUnicorn.configs['flat/recommended'],
  ...tseslint.configs.recommended,
  {
    ignores: ['jest.config.js', 'dist/', '.vscode/', 'coverage/'],
  },
  {
    rules: {
      ...stylisticRules,
      ...unicornRules,
      ...eslintRules,
    },
  },
];
