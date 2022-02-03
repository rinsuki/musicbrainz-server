/*
 * @flow strict-local
 * Copyright (C) 2022 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLaptop} from '@fortawesome/free-solid-svg-icons';
import {faGooglePlay, faAndroid} from '@fortawesome/free-brands-svg-icons';

const AppDownload = (): React.Element<'section'> => {
  return (
    <section className="bs section download-section center">
      <div className="bs container">
        <div className="bs row align-items-center">
          <div
            className="bs col-md-6 me-auto text-center
             text-md-start mb-5 mb-md-0"
          >
            <h2>
              {l('Download our apps')}
            </h2>
          </div>
          <div className="bs col-md-6 text-center text-md-end">
            <a
              className="bs btn d-inline-flex align-items-center"
              href="https://play.google.com/store/apps/details?id=org.metabrainz.android"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGooglePlay}
                size="2x"
              />
              {' '}
              <span>{l('Google Play')}</span>
            </a>
            <a
              className="bs btn d-inline-flex align-items-center"
              href="https://f-droid.org/en/packages/org.metabrainz.android/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faAndroid}
                size="2x"
              />
              {' '}
              <span>{l('F-Droid')}</span>
            </a>
            <a
              className="bs btn align-items-center"
              href="https://picard.musicbrainz.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLaptop}
                size="2x"
              />
              {' '}
              <span>{l('PC & Mac')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
