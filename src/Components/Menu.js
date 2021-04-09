import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import ListItem from './ListItem';
import { Banner } from './Banner'


const MenuStyled = styled.menu`
    background-color: #ccc;
    margin-top: 80px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;


export const Menu = () => (
    <MenuStyled>
        <Banner/>
        {/* dob banner */}
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList = {dbMenu.burger}/>
        </SectionMenu>

        <SectionMenu>
            <h2>Закуски и напитки</h2>
            <ListItem itemList = {dbMenu.other} />
        </SectionMenu>
    </MenuStyled>
)