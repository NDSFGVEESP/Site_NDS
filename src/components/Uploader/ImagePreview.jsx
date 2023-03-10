import React from 'react';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { compose } from "redux";
import {changeHeader, deleteImage} from "../../views/NewPostPage/redux/actions";
import Card from "@material-ui/core/es/Card/Card";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import CardActionArea from "@material-ui/core/es/CardActionArea/CardActionArea";
import withStyles from '@material-ui/core/styles/withStyles';
import GridList from "@material-ui/core/es/GridList/GridList";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from "@material-ui/core/es/Divider/Divider";

const styles = theme => ({
  gridList: {
    flexWrap: 'nowrap',
  },
  card: {
    maxWidth: 100,
    maxHeight: 145,
    justifyContent: 'center',
    margin: 10
  },
  media: {
    height: 0,
    paddingTop: '100%'
  },
  deleteButton: {
    marginTop: 2,
    marginLeft : 25
  },
  isHeader: {
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#00e676',
    borderStyle: 'dashed',
  }
});

const filesPath = 'uploadedFiles';

function ImagePreview(props) {
  const {stagedImages} = props.newPost;
  const {classes} = props;

  const handleClick = (index) => {
    const currIndex = stagedImages.findIndex(el => el.isHeader);
    props.changeHeader(currIndex, index)
  };

  const handleDelete = (el) => {
    props.firebase.deleteFile(`${filesPath}/${el.name}`)
      .then(() => {
        props.deleteImage(el)
      })
      .catch((e) => {
        console.log(e)
      })
  };

  if (stagedImages.length) {
    return (
      <>
        <GridList className={classes.gridList} cols={2.5}>
          {stagedImages.map((el, index) => {
            return (
              <Card className={`${classes.card} ${el.isHeader ? classes.isHeader : null}`} key={index}>
                <CardActionArea onClick={() => handleClick(index)}>
                  <CardMedia
                    className={classes.media}
                    image={el.url}
                    title={el.name}/>
                </CardActionArea>
                <Divider/>
                <IconButton aria-label="Delete" className={classes.deleteButton} onClick={() => handleDelete(el)}>
                  <DeleteIcon fontSize="small"/>
                </IconButton>
              </Card>
            )
          })}
        </GridList>
      </>
    );
  } else {
    return null;
  }

}

ImagePreview.propTypes = {
  firebase: PropTypes.object.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => {
  return {
    newPost: state.newPost
  }
};

const mapDispatchToProps = dispatch => ({
  deleteImage: image => dispatch(deleteImage(image)),
  changeHeader: (currentHeaderIndex, newHeaderIndex) => dispatch(changeHeader(currentHeaderIndex, newHeaderIndex))
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  firebaseConnect(),
)(ImagePreview);