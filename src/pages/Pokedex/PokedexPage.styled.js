import styled from 'styled-components'

export const HeadersContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
    padding-right: 480px;

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

export const Body = styled.div`
    background-color: gray;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: max-content;
    margin-bottom: 0%;
    
    h1{
        color: white;
        font-size: 48px;
        font-weight: 700;
    }
`

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`