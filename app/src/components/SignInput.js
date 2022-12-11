import React from 'react';
import styled from 'styled-components/native';

// Cor fundo caixa de texto: #EFF0F6

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #EFF0F6;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;
const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #777A98;
    margin-left: 10px;
`;

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill="#B0A4CF" />
            <Input
                placeholder={placeholder}
                placeholderTextColor="#B0A4CF"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    );
}