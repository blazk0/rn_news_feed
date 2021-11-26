module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@interfaces': './src/interfaces',
          '@navigation': './src/navigation',
          '@pages': './src/pages',
          '@services': '.src/services',
        },
      },
    ],
  ],
};
