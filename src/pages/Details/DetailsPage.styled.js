import styled from 'styled-components'

export const HeadersContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;

    img{
        width: 307px;
        height: 113px;
    }

`

export const ButtonHomePage = styled.button`
    background-color: transparent;
    color: black;
    text-decoration: underline;
    font-weight: bold;
    font-size: 24px;
`

export const ButtonRemovePokedex = styled.button`
    width: 226px;
    height: 57px;
    background: #FF6262;
    border-radius: 8px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: white;
    border: none;
`

export const Body = styled.div`
    background-color: gray;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    h1{
        color: white;
        font-size: 48px;
        font-weight: 700;
    }
`