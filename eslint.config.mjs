import antfu from '@antfu/eslint-config'
import nextPlugin from '@next/eslint-plugin-next'

export default antfu({
  formatters: true,
  react: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  plugins: {
    '@next/next': nextPlugin,
  },
  lessOpinionated: true,
}, {
  files: ['./src/components/Loadings/**/*.ts', './src/components/Loadings/**/*.tsx'],
  rules: {
    'react/no-array-index-key': 'off',
  },
})
