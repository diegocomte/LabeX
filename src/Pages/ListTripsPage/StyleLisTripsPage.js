import styled from 'styled-components';
import hearth from '../../Assets/Hearth.jpg';

//________________________________________________________________________________________________________________

export const CardTrip = styled.div`
border: 1px solid gray;
border-radius: 5px;
width: 50vw;
margin: 20px 0px;
padding: 10px;
line-height: 30px;
font-size: 20px;
color: #dadada;
text-align: justify;
box-shadow: 0 0 8px 4px #9794944c;

h3{
    display: inline;
    color: white;
}
`

export const MainContainer = styled.div`
width: 100vw;
height: 100vh;
background-image: url(${hearth});
background-position-y: top;
background-size: cover;
`

export const HomeButtonContainer = styled.section`
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

export const MinorContainer = styled.section`
display: flex;
justify-content: space-around;
align-items: center;
width: 99vw;
height: 80vh;
`

export const ApplyContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 28vw;
height: 30vw;

h1{
    text-align: center;
    font-size: 200%;
}

button{
    margin-top: 200px;
    font-size: 1.8em;
    border: 2px solid white;
    width: 250px;
    color: white;
    :hover{transition: 1s; cursor: pointer; border: 2px solid white;background-color: white; color: black;}
    }
`

export const TripsContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
overflow: scroll;
height: 70vh;
width: 60vw;
top: 500px;
border: 2px solid black;
background-color: #000000bc;
::-webkit-scrollbar {
    width: 0px;
}
`