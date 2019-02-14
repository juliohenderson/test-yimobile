import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 60vh;
`;
export default p => (
    <Container>
        <Loader type="Oval" color={p.color} height={80} width={80} />
    </Container>
)