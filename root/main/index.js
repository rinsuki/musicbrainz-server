/*
 * @flow strict-local
 * Copyright (C) 2022 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import {useCallback, useState} from 'react';

import './styles/colors.less';
import './styles/globals.less';
import './styles/Home.less';
import Head from '../layout/components/Head';

import Header from './components/Home/Header/Header';
import Footer from './components/Home/Footer/Footer';
import ScrollToTop from './components/Utils/ScrollToTop/ScrollToTop';
import Supporters from './components/Home/Supporters/Supporters';
import Intro from './components/Home/Intro/Intro';
import AppDownload from './components/Home/AppDownload/AppDownload';
import About from './components/Home/About/About';
import Facts from './components/Home/Facts/Facts';
import Explore from './components/Home/Explore/Explore';
import Projects from './components/Home/Projects/Projects';

function Home() {
  const DARK_MODE_KEY = 'dark_mode';
  const [dark, setDark] = useState(getSetting);
  let theme = dark ? 'theme-dark' : 'theme-light';

  function getSetting() {
    try {
      return JSON.parse(window.localStorage.getItem(DARK_MODE_KEY)) === true;
    } catch (e) {
      return false;
    }
  }

  function updateSetting(value) {
    try {
      window.localStorage.setItem(DARK_MODE_KEY, JSON.stringify(value === true));
    } catch (e) {}
  }

  const toggleDarkMode = useCallback(function () {
    setDark(prevState => {
      const newState = !prevState;
      updateSetting(prevState);
      return newState;
    });
  }, []);

  return (
    <div>
      <Head />
      <Header isDarkThemeActive={dark} switchActiveTheme={toggleDarkMode} theme={theme} />
      <Intro theme={theme} />
      <About theme={theme} />
      <Facts theme={theme} />
      <Projects theme={theme} />
      <Explore theme={theme} />
      <Supporters theme={theme} />
      <AppDownload theme={theme} />
      <Footer theme={theme} />
      <ScrollToTop
        backgroundColor="#EB743B"
        hover={{backgroundColor: 'purple', opacity: '0.95'}}
        icon="bi bi-caret-up-fill"
        margin="24px"
        position={{bottom: '12%', right: '0%'}}
      />
    </div>
  );
}
export default Home;
