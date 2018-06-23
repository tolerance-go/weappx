module.exports = {
  plugins: [
    'weapp-plugin-babel',
    'weapp-plugin-require',
    'weapp-plugin-less',
    'weapp-plugin-pug',
    'weapp-plugin-eslint',
  ],
  env: {
    production: {
      plugins: [
        [
          'weapp-plugin-jsmin',
          {
            extra: true,
          },
        ],
        [
          'weapp-plugin-postcss',
          {
            plugins: [
              require('autoprefixer')({
                browsers: ['Android >= 2.3', 'Chrome > 20', 'iOS >= 6'],
              }),
            ],
          },
        ],
        'weapp-plugin-filemin',
        'weapp-plugin-imgmin',
      ],
    },
  },
};
