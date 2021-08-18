import React from 'react';
import HeaderForDesktop from './header-for-desktop';
import { useWindowSize } from '../../hooks/useWindowSize';
import HeaderForMobile from './header-for-mobile';

const Header = () => {
  const [width, height] = useWindowSize();

  let header = null;

  if (width > 768) {
    header = <HeaderForDesktop />;
  } else {
    header = <HeaderForMobile />;
  }

  return header;
};

export default Header;
