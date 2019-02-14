import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    // height: 150px;
    border: 4px solid #1449BF;
    margin: 10px;
    border-left: none;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    &::before{
        content: '';
        height: 15px;
        width: 4px;
        background-color: #1449BF;
        display: flex;
        margin-top: -1px;
    }

    &::after{
        content: '';
        height: 55px;
        width: 4px;
        background-color: #1449BF;
        display: flex;
        margin-top: -48px;
    }
`;

const Title = styled.p`
    font-size: 35px;
    font-weight: 700;
    display: flex;
    margin: 4px 0;
    color: #E51C72;
    text-transform: uppercase;

    &::before{
        content: '';
        width: 4px;
        background: #E51C72;
        display: flex;
        margin-right: 10px;
    }
`;

const Description = styled.p`
    color: #1449BF;
    font-size: 1em;
    font-weight: 700;
    text-align: left;
    padding-left: 15px;
    max-width: 80%;
`;

const Button = styled.a`
    display: flex;
    align-self: flex-end;
    align-items: flex-end;
    line-height: 1;
    padding: 4px 8px;
    background-color: #1449BF;
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    font-size: .8em;
    margin: -10px 5px 0 0;
`;

class Header extends Component {
    render() {
      return (
        <Container>
            <Title>Excelente!</Title>
            <Description>Para aproveitar ao máximo, se conecte com seus amigos!</Description>
            <Button>Continuar</Button>
        </Container>
      )
    }
};

export default Header;