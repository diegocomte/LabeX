import LogoWhite from '../../Assets/LogoWhite.png';
import { IntroductionContainer, MainContainer, ButtonHeaderContainer, SocialMedia } from "./StyleAboutUsPage";
import { Button } from "@mui/material";
import { goToHomePage } from "../../Route/NavFunctions";
import { useNavigate } from "react-router-dom";


export default function AdminCreateTripPage() {
    const navigate = useNavigate();

    return (
        <MainContainer>
            <ButtonHeaderContainer>
                <img
                    onClick={() => goToHomePage(navigate)}
                    src={LogoWhite}
                    alt='Logo LabeX' />
                <Button
                    variant="outlined"
                    color='secondary'
                    onClick={() => goToHomePage(navigate)}>
                    Home
                </Button>
            </ButtonHeaderContainer>
            <IntroductionContainer>
                <h1>Quem somos</h1>
                <p>
                    Especializados em viagens espaciais, somos a companhia espacial com a cabeça de outro
                    planeta. Somos especialistas em trocadilhos também. Nosso objetivo? Simples: proporcionar
                    a melhor viagem espacial da sua vida, seja para as compras de enxoval do seu bebê ou
                    para quitutes exóticos das festas de bodas de casamento. Chá de revelação, com meteoritos
                    estourando na cor desejada? Também temos, contate-nos via redes sociais para orçamentos.
                </p>
                <h1> Nossa história</h1>
                <p>
                    A gente já tava cansado de ir sempre aos mesmos lugares, sabe. Floripa saturou, Rio é
                    complicado, São Paulo tá quente demais. Salvador derretia com nossas ideias, as piranhas
                    nos rios de Goiás não deixavam nadar tranquilamente. Os mosquitos também cansaram nossa
                    beleza na Amazônica... foi então que pensamos: bijus de saturno dando mole, anéis sobrando
                    ... partiu desfrutar. Aquela foi nossa primeira viagem. Os pedidos foram tantos que partimos
                    para o setor de viagens e cá estamos.
                </p>

                <h1>Nossos contatos</h1>
                <SocialMedia>
                    <a href='https://www.facebook.com/' target='_blank' >Facebook</a>
                    <a href='http://linkedin.com.br/' target='_blank' >LinkedIn</a>
                    <a href='https://www.instagram.com/' target='_blank' >Instagram</a>
                    <a href='https://twitter.com/' target='_blank' >Twitter</a>
                </SocialMedia>
            </IntroductionContainer>
        </MainContainer>
    )
}