const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'es'],
  },
  localePath: path.resolve('./public/locales'),
};
