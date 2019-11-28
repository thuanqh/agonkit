module.exports = {
  babelrcRoots: [
    // Keep the root as a root
    '.',
    // Also consider monorepo packages "root" and load their .babelrc files.
    './packages/*'
  ],
  plugins: ['babel-plugin-styled-components'],
  presets: ['@babel/preset-env', '@babel/preset-react']
};
