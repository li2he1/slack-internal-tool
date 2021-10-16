import React from 'react'
import styled from 'styled-components';
import {FiberManualRecord, Create} from '@material-ui/icons';
export default function Sidebar() {
    return (
            <SidebarContainer>
                <SidebarHeader>
                    <SidebarInfo>
                        <h2>Company Internal Panel</h2>
                        <h3><FiberManualRecord/>
                            Peter He
                        </h3>
                        </SidebarInfo>
                        <Create/>
                </SidebarHeader>
            </SidebarContainer>

    )
}

const SidebarContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;
    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;

const SidebarInfo = styled.div`
    flex:1;
    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }
    > h3 {
        displau: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }
    > h3 > .MuiSvgIcon-root{
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }



`;
