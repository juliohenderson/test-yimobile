import React, { Component } from 'react';
import styled from 'styled-components';

const Item = styled.div`
    display: flex;
    padding: 10px;

    &:nth-child(odd){
        background-color: rgba(20, 73, 189, .1);
    }
`;

const Thumbnail = styled.img`
    width: 50px;
    height: 50px;
    flex: 0 0 50px;
`;

const Name = styled.p`
    margin: 0 auto 0 10px;
    letter-spacing: 0.5px;
    text-align: left;
    align-self: center;
`;

const Button = styled.button`
    background-color: ${p => p.color};
    color: #fff;
    font-weight: 400;
    font-size: .8em;
    height: 24px;
    width: 80px;
    text-transform: uppercase;
    align-self: center;
    border: none;

    &:focus{
        outline: none;
    }
`;
export default class ListItem extends Component{
    state = {
        following: false
    }

    follow(){
        this.setState({following: !this.state.following})
    }

    render() {
        const { thumbnail, name } = this.props;
        return (
            <Item>
                <Thumbnail src={ thumbnail } />
                <Name>{ name }</Name>
                <Button color={ this.state.following ? '#E51C72': '#1449BF' } onClick={ ()=>this.follow()}>{ this.state.following ? 'Seguindo' : 'Seguir' }</Button>
            </Item>
        )
    }
}