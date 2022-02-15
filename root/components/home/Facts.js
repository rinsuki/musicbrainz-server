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
import {faMusic, faHeadphones, faCompactDisc, faUsers}
  from '@fortawesome/free-solid-svg-icons';

const Facts = (): React.Element<'section'> => {
  return (
    <section className="counts">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <FontAwesomeIcon
                className="icon"
                icon={faMusic}
                size="4x"
              />
              <div>
                <span>
                  {l(`1.88 M`)}
                </span>
                <p>
                  {l(`Artists`)}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <FontAwesomeIcon
                className="icon"
                icon={faCompactDisc}
                size="4x"
              />
              <div>
                <span>
                  {l(`3.00 M`)}
                </span>
                <p>
                  {l(`Releases`)}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <FontAwesomeIcon
                className="icon"
                icon={faHeadphones}
                size="4x"
              />
              <div>
                <span>
                  {l(`35.20 M`)}
                </span>
                <p>
                  {l(`Tracks`)}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <FontAwesomeIcon
                className="icon"
                icon={faUsers}
                size="4x"
              />
              <div>
                <span>
                  {l(`2.18 M`)}
                </span>
                <p>
                  {l(`Editors`)}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Facts;
