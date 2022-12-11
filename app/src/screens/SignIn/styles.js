import React from 'react';
import styled from 'styled-components/native';

// Cor fundo #F7F7F7
export const Container = styled.SafeAreaView`
    background-color: #F7F7F7;
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #B87A81;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #EFF0F6;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;
// cor texto: B87A81
export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #B87A81; 
`;
export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #B87A81;
    font-weight: bold;
    margin-left: 3px;
`;