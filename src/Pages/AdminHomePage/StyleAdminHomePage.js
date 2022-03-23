import styled from 'styled-components';
import astronaut from '../../Assets/Astronaut.jpg';


//____________________________________________________________________________________________________________


export const CardTrip = styled.div`
display: flex;
flex-direction: column;
border: 1px solid gray;
border-radius: 5px;
width: 50vw;
margin: 10px 0px;
padding: 10px;
line-height: 30px;
font-size: 20px;
color: #dadada;
text-align: justify;
box-shadow: 0 0 8px 4px #9794944c;
:hover{background-color: #24242490};

p{
    display: flex;
    justify-content: space-between;
    width: 48vw;
}

h3{
    display: inline;
    color: white;
    width: 80vw;
    :hover{cursor: pointer;};
}

.deleteIcon{
    height: 5vh;
    :hover{cursor: pointer;background-color: #00000090; border-radius: 8px;};
}
`

export const LoadingIcon = styled.img`
width: 10vw;
margin-top: 100px;
`

export const MainContainer = styled.div`
width: 100vw;
height: 100vh;
background-image: url(${astronaut});
background-position-y: top;
background-size: cover;

h1{
    text-align: center;
    margin-bottom: 15px;
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
::-webkit-scrollbar {
    width: 0px;
}
`

export const HomeButtonContainer = styled.section`
display: flex;
justify-content: space-between;
width: 99vw;
margin-bottom: 15px;;

img{
    margin-top: 10px;
    max-height: 80px;
    :hover{cursor: pointer;}
}

button{
    margin: 20px;
    width: auto;
    height: 45px;
    font-size: 18px;
    border: 2px solid white;
    color: white;
    :hover{transition: 1s; cursor: pointer; border: 2px solid white; background-color: white; color: black;};
    }
`