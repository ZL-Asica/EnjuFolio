import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  nextjs: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  lessOpinionated: true,
  rules: {
    // For Next.js JSON-LD we need to allow the use of `dangerouslySetInnerHTML`
    'react-dom/no-dangerously-set-innerhtml': 'off',
  },
}, {
  files: ['./src/components/Loadings/**/*.ts', './src/components/Loadings/**/*.tsx', './src/app/**/loading.tsx'],
  rules: {
    'react/no-array-index-key': 'off',
  },
})
