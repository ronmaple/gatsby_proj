import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
// import logo from '../images/placeholder.png'
import logo from '../images/RonM2.png';

const HeaderWrapper = styled.div`
  background: white;
  img {
    margin-bottom: 0;
  }
`;

const HeaderContainer = styled.div`
    margin: 0 auto;
    height: 100px;
    padding: 0.3rem;
    /* border-bottom: solid 2px ${props => props.theme.colors.darkBlue}; */
`;


const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img style={{
            width: '85px',
            padding: '10px'
          }}
            src={logo}
            alt="Placeholder" />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
