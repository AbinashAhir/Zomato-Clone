import styled from 'styled-components'

export const Container = styled.div`
    padding: 80px 60px;
    background: radial-gradient(circle, #fff2e6);
`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100px;
    margin: 0 auto;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, lfr));
    grid-gap: 20px;
`
export const Link = styled.a`
    color: #4d4d4d;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
    &:hover{
        color: #ff9c00;
        transition: 200ms ease-in;
    }
`
export const Title = styled.p`
    font-size: 24px;
    color: #4d4d4d;
    margin-bottom: 40px;
    font-weight: bold
`