import React from "react";
import styled from "styled-components";


const Nav = () => {
    return (
      <TopNav>
        <div className='black-nav'>
          <div>Developer Blog</div>
        </div>
      </TopNav>
    );
};

export default Nav;

const TopNav = styled.div`
    background: black;
    width: 100%;
    display: flex;
    color: wheat;
    padding: 20px;
    font-weight: 600;
    font-size: 20px;
`