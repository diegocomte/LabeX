import styled from 'styled-components';

//______________________________________________________________________________________________________

export const MainContainer = styled.div` 
width: 100vw;
height: 100vh;
background-color: black;
`

export const ButtonHeaderContainer = styled.section`
display: flex;
justify-content: space-between;
width: 99vw;

img{
    margin-top: 10px;
    max-height: 80px;
    :hover{cursor: pointer;}
}

button{
    margin: 20px;
    width: 120px;
    height: 45px;
    font-size: 18px;
    border: 2px solid white;
    color: white;
    :hover{transition: 1s; cursor: pointer; border: 2px solid white; background-color: white; color: black;};
    }
`

export const AlignSection = styled.section` 
display: flex;
justify-content: center;
width: 98vw;
height: 80vh;
`

export const FormContainer = styled.section`
display: flex;
align-self: center;
align-items: center;
justify-content: center;
height: 60vh;
width: 50vw;
background-color: #ffffff;
border-radius: 10px;
padding: 20px;
border: 1px solid white;

.Form{
    display: flex;
    flex-direction: column;
    width: 60vw;
    color: black;
    text-align: center;
    font-size: 20px;
}

.TextField{
    margin: 15px 0px;
}

button{
    margin-top: 30px;
    font-size: 20px;
    border: 2px solid black;
    width: 20vw;
    color: black;
    align-self: center;
    :hover{transition: 1s; cursor: pointer; border: 2px solid white; background-color: black; color: white;};
}
`

export const ButtonsSubmitAndBackSection = styled.section`
display: flex;
justify-content: space-evenly;
`