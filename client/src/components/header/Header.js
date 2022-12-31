import React from 'react'
import { LOGO } from '../../constants/url'
import { HEADER_DEFAULT_TYPE } from '../../types/default_types'

const Header = ({mainStyle}) => {
  return (
    <header className={mainStyle.headerWrapp}>
        <img src={LOGO} alt='profile img' className={mainStyle.image} />
    </header>
  )
}

export default Header;

Header.defaultProps = HEADER_DEFAULT_TYPE;