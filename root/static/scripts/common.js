/* eslint-disable import/no-commonjs */

/* Global polyfills not provided by core-js */
require('whatwg-fetch');
require('./common/focusin-focusout-polyfill');
/* End of global polyfills */

require('./public-path');

const DBDefs = require('./common/DBDefs-client');

import MB from './common/MB';

if (DBDefs.DEVELOPMENT_SERVER) {
  /*
   * Used by the Selenium tests under /t/selenium/ to make sure that no errors
   * occurred on the page.
   */
  MB.js_errors = [];
  window.onerror = function (message, source, lineno, colno, error) {
    MB.js_errors.push(error && error.stack ? error.stack : message);
  };
}

require('./common/sentry');

window.ko = require('knockout');
window.$ = window.jQuery = require('jquery');

require('../lib/jquery.ui/ui/jquery-ui.custom');

require('./common/components/Annotation');
require('./common/components/CommonsImage');
require('./common/components/FingerprintTable');
require('./common/components/WikipediaExtract');
require('./common/MB/Control/Autocomplete');
require('./common/components/ReleaseEvents');
require('./common/components/WorkArtists');
require('./common/MB/Control/SelectAll');
require('./common/components/TagEditor');
require('./common/components/sidebar/AcousticBrainz');

import('./common/artworkViewer');
import('./common/dialogs');
import('./common/components/Filter');
import('./common/MB/Control/Menu');
import('./common/MB/edit_search');
import('./common/ratings');
import('./common/tagger');
import('./common/coverart');
import('./common/banner');
