import React from 'react';
import styled from 'styled-components';
import { theme } from '../themes/themes'

const CustomButton = styled.button`
    outline: none;
    border: none;
    border-radius: 2px;
    font-size: 24px;
    background-color: ${theme.colors.secondary.background};
    padding: 8px;
    box-shadow: 0 0 4px #999;
`;

export default function Button(props) {
    return (
        <CustomButton onClick={props.onClick}>{props.children}</CustomButton>
    )
}