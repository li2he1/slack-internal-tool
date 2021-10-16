import React from 'react'
import styled from "styled-components"
import { Avatar } from '@material-ui/core';
import {AccessTime, Search, HelpOutline} from "@material-ui/icons"

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar
                //TODO: Add onclick
                />
                <AccessTime />

            </HeaderLeft>
            <HeaderSearch>
                <Search/>
                <input placeholder = "Search Slack"/>

            </HeaderSearch>
            
            <HeaderRight>
                <HelpOutline/>
            </HeaderRight>
        </HeaderContainer>
    )
}




const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    display: flex;
    padding: 0 50px;
    color: gray;
    border: 1px gray solid;

    > input {
        background-color: transparent;
        border: none;
        text-align: center;
        min-widthL 30vw;
        outline: 0;
        color: white;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items:center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`;
const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 20px;
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`;