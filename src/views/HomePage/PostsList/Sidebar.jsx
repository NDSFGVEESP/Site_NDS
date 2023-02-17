import React from 'react';
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import { withStyles } from "@material-ui/core";
import { styles } from "../styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {Link as RouterLink} from "react-router-dom";
import SearchField from "../../../components/SearchField/SearchField";

const AboutLink = props => <RouterLink to="/about" {...props} />;


const Sidebar = (props) => {
  const { classes } = props;

  return (
    <>
      <CssBaseline/>
      <SearchField/>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          Sobre
        </Typography>
        <Typography>
          Criado em 2008 por iniciativa das escolas das FGV-SP, o Núcleo de Estudos de Data Science (NDS) busca incentivar o debate e a pesquisa aplicada em ciência de dados, aprendizado estatístico e aprendizado por máquina em ciências sociais (administração, ciência política, direito, economia, finanças, relações internacionais e demais áreas correlatas).
          <br/>
          <Link component={AboutLink}>Leia mais...</Link>
        </Typography>
      </Paper>
      {/*<Typography variant="h6" gutterBottom className={classes.sidebarSection}>*/}
      {/*  Social*/}
      {/*</Typography>*/}
    </>
  );
};

Sidebar.propTypes = {

};

export default withStyles(styles)(Sidebar)

