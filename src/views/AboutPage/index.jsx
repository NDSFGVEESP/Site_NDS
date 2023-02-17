import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import {Link, withStyles} from "@material-ui/core";
import { styles } from "./styles";
import Typography from "@material-ui/core/es/Typography/Typography";
import Divider from '@material-ui/core/Divider';

const AboutPage = (props) => {
  const { classes } = props;
  return (
    <div className={classes.layout}>
      <CssBaseline/>
      <Typography component="h1" variant="h3">
        Quem Somos
      </Typography>
      <br/>

      <Typography component='p' variant='subtitle1'>
        <strong>Missão: </strong>Promover ciência de dados na formação dos alunos e suas aplicações nos setores públicos e privados.
      </Typography>
      <br/>

      <Typography component='p' variant='subtitle1'>
        <strong>Objetivo: </strong>Criado em 2008 por iniciativa das escolas das FGV-SP, o <strong> Núcleo de Estudos de Data Science (NDS) </strong> busca incentivar o debate e a pesquisa aplicada em ciência de dados, aprendizado estatístico e aprendizado por máquina em ciências sociais (administração, ciência política, direito, economia, finanças, relações internacionais e demais áreas correlatas).
      </Typography>
      <br/>

      <Typography component='p' variant='subtitle1'>
        Fazem parte das atividades do núcleo:
      </Typography>
      <ul>
        <li>Reuniões mensais para discussão de estudos e aplicações;</li>
        <li>Cursos de aperfeiçoamento;</li>
        <li>Apoio à ênfase de Data Science do Mestrado Profissional em Engenharia Financeira;</li>
        <li>Pesquisas aplicadas;</li>
        <li>Intercâmbio com instituições de ensino e pesquisa;</li>
        <li>Encontro Brasileiro de Data Science;</li>
        <li>Organização de seminários.</li>
      </ul>
      <br/>

      <Typography component='p' variant='subtitle1'>
        Dentre os temas e tecnologias abordados pelo NDS estão:
      </Typography>
      <ul>
        <li>Big Data Analytics e Deep Learning;</li>
        <li>Inteligência Computacional e Aprendizagem de Máquina (Machine Learning);</li>
        <li>Inteligência Artificial (AI – Artificial Intelligence);</li>
        <li>Processamento de Linguagem Natural (NLP – Natural Language Processing);</li>
        <li>Geoinformação e Estatística Espacial (GeoAnalytics);</li>
        <li>Internet das Coisas (IoT – Internet of Things);</li>
        <li>Segurança e Proteção de Dados;</li>
        <li>Análise e Visualização de Dados (Data Analytics and Visualization);</li>
        <li>Computação na Nuvem (Cloud Computing);</li>
        <li>Temas correlatos: Linguagens de programação e ferramentas específicas , Computação na Nuvem, Data Mining, Text Mining, Web Scrapping, etc.</li>
      </ul>

      <br/>

      <Typography component='p' variant='subtitle1' gutterBottom>
        Para conhecer mais sobre as atividades e novidades do núcleo de estudos envie e-mail para <a href = "mailto: nds@fgv.br">nds@fgv.br</a>
      </Typography>

      <Divider style={{marginTop: 16, marginBottom: 32}}/>

      <Typography component="h1" variant="h3" gutterBottom>
        Quadro de Pesquisadores (2022)
      </Typography>

      <Typography component="h1" variant="h5" gutterBottom>
        Professores da FGV
      </Typography>

      <ul>
        <li><Link href="https://eesp.fgv.br/integrante/afonso-de-campos-pinto">Afonso de Campos Pinto (EESP-FGV)</Link></li>
        <li><Link href="http://lattes.cnpq.br/5511026147289005">Alessandro Martim Marques (EESP-FGV)</Link></li>
        <li><Link href="http://lattes.cnpq.br/6279577249131944">Ana Paula Appel (EESP-FGV)</Link></li>
        <li><Link href="https://eesp.fgv.br/integrante/andre-cury-maialy">Andre Cury Maialy (EESP-FGV)</Link></li>
        <li><Link href="https://eesp.fgv.br/integrante/andre-maranhao">Andre Maranhão (EESP-FGV)</Link></li>
        <li><Link href="http://lattes.cnpq.br/1740820317722673">Bruno Tebaldi de Queiroz Barbosa (EESP-FGV)</Link></li>
        <li><Link href="http://lattes.cnpq.br/6731656353508097">Edson Caoru Kitani (EESP-FGV)</Link></li>
        <li><Link href="https://eesp.fgv.br/integrante/eduardo-fonseca-mendes">Eduardo (Duda) Fonseca Mendes (EESP-FGV)</Link></li>
        <li><Link href="https://eaesp.fgv.br/en/faculty/eduardo-rezende-francisco">Eduardo Francisco Rezende (EAESP-FGV)</Link></li>
        <li><Link href="http://lattes.cnpq.br/6713612445238215">Élia Yathie Matsumoto (EESP-FGV)</Link></li>
        <li><Link href="https://eaesp.fgv.br/professor/gustavo-correa-mirapalheta">Gustavo Correa Mirapalheta (EAESP-FGV)</Link></li>
        <li><Link href="https://eaesp.fgv.br/professor/hitoshi-nagano">Hitoshi Nagano (EAESP-FGV)</Link></li>
        <li><Link href="https://eaesp.fgv.br/professor/joao-luiz-chela">João Luiz Chela (EAESP-FGV)</Link></li>
        <li><Link href="http://lattes.cnpq.br/1728809112622416">Luiz Henrique Moraes da Silva (EESP-FGV)</Link></li>
        <li><Link href="https://eesp.fgv.br/integrante/marcelo-fernandes">Marcelo Fernandes (EESP-FGV)</Link></li>
        <li><Link href="https://eesp.fgv.br/integrante/paulo-picchetti">Paulo Picchetti (EESP-FGV)</Link></li>
        <li><Link href="https://eaesp.fgv.br/pessoa/ricardo-ratner-rochman">Ricardo Ratner Rochman (EAESP-FGV)</Link></li>
      </ul>

      <Typography component="h1" variant="h5" gutterBottom>
        Doutorandos e Mestrandos
      </Typography>
      
      <ul>
        <li><Link href="http://lattes.cnpq.br/5809196001228289">Rafael Scopel (EESP-FGV)</Link></li>
      </ul>

        <Typography component="h1" variant="h5" gutterBottom>
            Alumni
        </Typography>

        <ul>
            <li><Link href="http://lattes.cnpq.br/8726320988786268">Adriana Bezerra Bessa (EESP-FGV)</Link></li>
            <li><Link href="http://lattes.cnpq.br/9964584050769893">Alex Akira Okuno (EESP-FGV)</Link></li>
            <li>Greta Jiupato (EEASP-FGV)</li>
            <li><Link href="http://lattes.cnpq.br/1995314563453576">Gustavo Grivol (EESP-FGV)</Link></li>
        </ul>
     
    </div>
  );
};

AboutPage.propTypes = {

};

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    clearFirestore: () => dispatch({ type: '@@reduxFirestore/CLEAR_DATA' })
  }
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(),
)(AboutPage)