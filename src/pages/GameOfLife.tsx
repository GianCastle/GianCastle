import { SiteMain, SiteSectionTitle, SiteTitle, inner, outer } from '../styles/shared';

import Footer from '../components/Footer';
import { GameBoard } from '../components/gameoflife/Game';
import Helmet from 'react-helmet';
import IndexLayout from '../layouts';
import React from 'react';
import SiteNav from '../components/header/SiteNav';
import Wrapper from '../components/Wrapper';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const CallOut = css`
  position: relative;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #0a0b0d;
`;

const NavWrapper = styled.div`
  padding: 4vh;
`;

const About = () => (
  <IndexLayout>
    <Helmet>
      <title>GianCastle - The Game Of Life</title>
    </Helmet>
    <Wrapper>
      <header css={[CallOut]}>
        <NavWrapper>
          <SiteNav />
        </NavWrapper>
      </header>

      <div>
        <GameBoard />
      </div>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
