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
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

const About = (): React.Element<'section'> => {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6"
          >
            <h3
              className="heading"
            >
              {l('About')}
              {' '}
              <span
                className="color-purple"
              >
                {l('Music')}
              </span>
              <span
                className="color-orange"
              >
                {l('Brainz')}
              </span>
            </h3>
            <p>
              {l('MusicBrainz is an open music encyclopedia ')}
              {l('that collects music metadata and makes ')}
              {l('it available to the public.')}
              <br />
              <br />
              {l('MusicBrainz aims to be:')}
            </p>
            <ul>
              <li style={{paddingBottom: '10px'}}>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  size="lg"
                />
                {' '}
                {l('The ultimate source of music information by ')}
                {l('allowing anyone to contribute and releasing the ')}
                {l('data under open licenses.')}
              </li>
              <li style={{paddingBottom: '10px'}}>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  size="lg"
                />
                {' '}
                {l('The universal lingua franca for music by ')}
                {l('providing a reliable and unambiguous form of music ')}
                {l('identification, enabling both people and machines ')}
                {l('to have meaningful conversations about music.')}
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  size="lg"
                />
                {' '}
                {l('Like Wikipedia, MusicBrainz is maintained ')}
                {l('by a global community of users and we want everyone ')}
                {l('— including you — to participate and contribute.')}
              </li>
            </ul>
          </div>
          <iframe
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="col-lg-6"
            frameBorder="0"
            src="https://www.youtube.com/embed/-CVNe9gmG6c"
            title="video"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
