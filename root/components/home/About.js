/*
 * @flow strict-local
 * Copyright (C) 2022 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import * as React from 'react';

const About = (): React.Element<'section'> => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <iframe
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="col-lg-6 order-1 order-lg-2"
            data-bs-aos="zoom-in"
            data-bs-aos-delay="150"
            frameBorder="0"
            src="https://www.youtube.com/embed/-CVNe9gmG6c"
            title="video"
          />
          <div
            className="col-lg-6 content"
            data-bs-aos="fade-right"
          >
            <h3
              className="navbar-brand text-brand"
            >
              {l('About')}
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
            <p className="fst-italic">
              {l('MusicBrainz is an open music encyclopedia ')}
              {l('that collects music metadata and makes ')}
              {l('it available to the public.')}
              <br />
              <br />
              {l('MusicBrainz aims to be:')}
            </p>
            <ul>
              <li>
                <i className="bi bi-check-circle" />
                {l('The ultimate source of music information by ')}
                {l('allowing anyone to contribute and releasing the ')}
                {l('data under open licenses.')}
              </li>
              <li>
                <i className="bi bi-check-circle" />
                {l('The universal lingua franca for music by ')}
                {l('providing a reliable and unambiguous form of music ')}
                {l('identification, enabling both people and machines ')}
                {l('to have meaningful conversations about music.')}
              </li>
              <li>
                <i className="bi bi-check-circle" />
                {l('Like Wikipedia, MusicBrainz is maintained ')}
                {l('by a global community of users and we want everyone ')}
                {l('— including you — to participate and contribute.')}
              </li>
            </ul>
            <a
              className="read-more"
              href="https://musicbrainz.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              {l('Read More')}
              <i className="bi bi-long-arrow-right" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
