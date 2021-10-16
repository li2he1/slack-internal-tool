import React from 'react'
import styled from "styled-components"
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from "@material-ui/icons/AccessTime"

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar
                //TODO: Add onclick
                />
                <AccessTimeIcon />

            </HeaderLeft>
            {/* Header Search*/}
            {/* Header Right*/}
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
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

const HeaderAvatar = styled(Avatar)``