import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import userImg from '../image/user.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const LogIn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100px; 
`;

const ImgUser = styled.img`
    width: 25px;
    align-items: center;
`;

const P = styled.p`
    text-align: center;
    font-size: 0.8em;
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo" />
            <H1>Mr.Donald's</H1>
        </Logo>
        <LogIn>
            <ImgUser src={userImg} alt="user photo" />
            <P>Войти</P>
        </LogIn>
        {/* <button>Войти</button> */}
    </NavBarStyled>
)