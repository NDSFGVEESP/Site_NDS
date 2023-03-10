import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { styles } from "./styles";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import {
  Avatar, IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  withStyles
} from "@material-ui/core";
import {
  Delete as DeleteIcon
} from "@material-ui/icons"
import TextField from "@material-ui/core/es/TextField/TextField";
import Button from "@material-ui/core/es/Button/Button";
import Grid from '@material-ui/core/Grid';
import ReactMde from "react-mde";
import Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import {actionTypes} from "redux-firestore";
import MomentUtils from '@date-io/moment';
import { DateTimePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';

class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "write",
      eventTitle: '',
      eventLocation: '',
      eventAddress: '',
      eventBody: '',
      eventDate: new Date(),
      eventRegistration: '',
      eventProfessors: [],
      professorName: '',
      professorDescription: '',
    };
    this.converter = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tasklists: true
    });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = () => event => {
    this.props.firestore.add(
      { collection: 'events' },
      {
        eventTitle: this.state.eventTitle,
        eventLocation: this.state.eventLocation,
        eventAddress: this.state.eventAddress,
        eventBody: this.state.eventBody,
        eventDate: this.props.firestore.Timestamp.fromDate(new Date(this.state.eventDate.valueOf())),
        eventProfessors: this.state.eventProfessors,
        eventRegistration: this.state.eventRegistration,
        eventOpId: this.props.uid,
      }
    ).then(() => {
      this.props.clearFirestore()
    });
    this.setState({
      tab: "write",
      eventTitle: '',
      eventLocation: '',
      eventAddress: '',
      eventBody: '',
      eventDate: new Date(),
      eventProfessors: [],
      professorName: '',
      professorDescription: '',
      eventRegistration: ''
    });
  };

  handleSubtitle = event => {
    if (event.target.value.length < 100) {
      this.setState({
        postSubtitle: event.target.value,
      });
    } else {
      this.setState({
        postSubtitle: event.target.value.substring(0, 100),
      });
    }
  };

  handleDateChange = date => {
    this.setState({ eventDate: date });
  };

  addProfessor = () => event => {
    this.setState({
      eventProfessors: [...this.state.eventProfessors, {name: this.state.professorName, description: this.state.professorDescription}],
      professorName: '',
      professorDescription: '',
    })
  };

  removeProfessor = (key) => event => {
    this.setState({
      eventProfessors: this.state.eventProfessors.filter((el, index) => index !== key),
    })
  };

  handleBodyChange = (eventBody) => {
    this.setState({eventBody});
  };

  handleTabChange = (tab) => {
    this.setState({tab})
  };

  renderProfessors = (eventProfessors) => {
    if (eventProfessors.length) {
      return(
        this.state.eventProfessors.map((professor, key) => {
          return(
            <ListItem key={key}>
              <ListItemAvatar>
                <Avatar>
                  {professor.name.charAt(0)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={professor.name}
                secondary={professor.description}
              />
              <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={this.removeProfessor(key)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )
        })
      )
    } else {
      return <ListItem key={'noProfessor'}><ListItemText primary={'Nenhum Membro'}/></ListItem>
    }
  };

  render() {
    const {classes} = this.props;
    const { eventDate } = this.state;
    return (
      <main className={classes.main}>
        <CssBaseline/>
        <Paper className={classes.paper}>
          <Grid
            container
            spacing={16}
            direction="row"
          >
            <Grid item xs={12}>
              <TextField id="event-title"
                         label="T??tulo"
                         placeholder="T??tulo"
                         fullWidth
                         className={classes.eventTitle}
                         margin="normal"
                         value={this.state.eventTitle}
                         onChange={this.handleChange('eventTitle')}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={16}
            direction={'row'}
          >
            <Grid item xs={12}>
              <TextField label={'Local'}
                         placeholder={'Local do evento: institui????o e sala'}
                         fullWidth
                         className={classes.eventLocation}
                         value={this.state.eventLocation}
                         onChange={this.handleChange('eventLocation')}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={16}
            direction={'row'}
          >
            <Grid item xs={12}>
              <TextField label={'Endere??o'}
                         placeholder={'Endere??o: bairro, rua e n??mero'}
                         fullWidth
                         className={classes.eventAddress}
                         value={this.state.eventAddress}
                         onChange={this.handleChange('eventAddress')}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={16}
            direction={'row'}
          >
            <Grid item xs={12}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DateTimePicker
                  margin="normal"
                  autoOk
                  ampm={false}
                  inputVariant="outlined"
                  value={eventDate}
                  onChange={this.handleDateChange}
                  label="In??cio"
                  showTodayButton
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <ReactMde
            onChange={this.handleBodyChange}
            onTabChange={this.handleTabChange}
            value={this.state.eventBody}
            generateMarkdownPreview={markdown =>
              Promise.resolve(this.converter.makeHtml(markdown))}
            selectedTab={this.state.tab}
            className={classes.mdeEditor}
          />

          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={16}
          >
            <Grid item xs={5}>
              <TextField label={'Nome'}
                         placeholder={'Nome'}
                         fullWidth
                         value={this.state.professorName}
                         onChange={this.handleChange('professorName')}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField label={'Descri????o'}
                         placeholder={'Descri????o'}
                         fullWidth
                         value={this.state.professorDescription}
                         onChange={this.handleChange('professorDescription')}
              />
            </Grid>
            <Grid item>
              <Button variant='outlined' onClick={this.addProfessor()}>Adicionar</Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={16}
          >
            <Grid item xs={4}>
              <Paper>
                <List dense={true}>
                  {this.renderProfessors(this.state.eventProfessors)}
                </List>
              </Paper>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={16}
            direction={'row'}
          >
            <Grid item xs={12}>
              <TextField label={'Link para Instri????o'}
                         placeholder={'Link para Instri????o'}
                         fullWidth
                         className={classes.eventAddress}
                         value={this.state.eventRegistration}
                         onChange={this.handleChange('eventRegistration')}
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.postButton}
            style={{paddingTop: 30}}
          >
            <Grid item>
              <Button variant="contained"
                      color="primary"
                      onClick={this.handleSubmit()}>
                Post
              </Button>
            </Grid>
          </Grid>

        </Paper>
      </main>
    );
  }
}

NewEvent.propTypes = {
  uid: PropTypes.string,
  firestore: PropTypes.shape({
    add: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = state => {
  return {
    uid: state.firebase.auth.uid,
    newPost: state.newPost,
    tagNames: state.firestore.ordered.tags
      ? state.firestore.ordered.tags.map(el => el.tagName)
      : []
  }
};

const mapDispatchToProps = dispatch => {
  return {
    clearFirestore: () => dispatch({ type: actionTypes.CLEAR_DATA })
  }
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: 'tags',
        orderBy: ['tagName']
      }
    ]
  }),
)(NewEvent)