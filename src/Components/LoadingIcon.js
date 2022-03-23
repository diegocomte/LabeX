import styled from 'styled-components';
import loading from '../Assets/Loading.gif';

//____________________________________________________________________________________________________

const LoadingContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`


const Loading = styled.img`
width: 10vw;
`

export const LoadingIcon = () => {
    return (
        <LoadingContainer>
            <Loading src={loading} />
        </LoadingContainer>
    )
}
