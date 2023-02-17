import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PostList from './PostsList';
import {styles} from './styles'
import logo from '../../assets/datascience_logo.jpg'
import Parallax from "../../componentsExternal/Parallax/Parallax";

function Blog(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Parallax small filter image={logo}>
        <div className={classes.mainContainer}>
          <Grid container>
            <Grid item md={8}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom className={classes.mainHeader}>
                  NÚCLEO DE ESTUDOS DE DATA SCIENCE
              </Typography>
            </Grid>
            <Grid item md={4}>
              {/*<CardMedia className={classes.media} image={logo} alt="a"/>*/}
            </Grid>
          </Grid>
        </div>
      </Parallax>
      <div className={classes.layout}>
        <main className={classes.main}>

            <PostList/>

        </main>
      </div>
    </React.Fragment>
  );
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);