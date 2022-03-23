import styled from 'styled-components';
import astronaut from '../../Assets/Astronaut.jpg';

//______________________________________________________________________________________________________

export const MainContainer = styled.div` 
width: 100vw;
height: 100vh;
background-image: url(${astronaut});
background-position-y: top;
background-size: cover;
`

export const HomeButtonContainer = styled.section`
display: flex;
justify-content: space-between;
width: 95vw;
margin-bottom: 10px;;

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

export const TripDetails = styled.section`
display: flex;
justify-content: center;
width: 98vw;
`

export const CardTrip = styled.ul`
list-style: none;
border: 1px solid gray;
border-radius: 5px;
width: 70vw;
margin: 20px 0px;
padding: 10px;
line-height: 30px;
font-size: 20px;
color: #dadada;
text-align: justify;
box-shadow: 0 0 8px 4px #9794944c;
background-color: #000000c0;

p{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-style: oblique;
    color: white;
}
`

export const CandidatesContainer = styled.section` 
display: flex;
justify-content: center;
`

export const CandidatesRequestContainer = styled.section` 
list-style: none;
border: 1px solid gray;
border-radius: 5px;
width: 45vw;
height: 38vh;
margin: 20px;
padding: 10px;
line-height: 30px;
font-size: 20px;
color: #dadada;
text-align: justify;
box-shadow: 0 0 8px 4px #9794944c;
overflow-y: scroll;
::-webkit-scrollbar {
    width: 0px;
}

p{
    font-weight: bold;
    text-align: center;
}

button{
    margin: 1% 12%;
}
`

export const ApprovedCandidatesContainer =styled.section` 
list-style: none;
border: 1px solid gray;
border-radius: 5px;
width: 45vw;
height: 38vh;
margin: 20px;
padding: 10px;
line-height: 30px;
font-size: 20px;
color: #dadada;
text-align: justify;
background-color: #000000c0;
box-shadow: 0 0 8px 4px #9794944c;
overflow-y: scroll;
::-webkit-scrollbar {
    width: 0px;
}

p{
    font-weight: bold;
    text-align: center;
}
`

