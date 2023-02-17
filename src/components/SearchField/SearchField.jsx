import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import {styles} from "./styles";
import CssBaseline from "@material-ui/core/es/CssBaseline";
import SearchIcon from '@material-ui/icons/Search';
import TextField from "@material-ui/core/es/TextField";
import InputAdornment from "@material-ui/core/es/InputAdornment/InputAdornment";
import IconButton from "@material-ui/core/es/IconButton/IconButton";

class SearchField extends Component {
  state = { searchText: '' };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleSearch = () => {
    console.log("working")
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <CssBaseline/>
        <TextField
          id="search-field"
          className={classes.searchField}
          fullWidth
          variant="outlined"
          type="text"
          label="Busca no blog"
          value={this.state.searchText}
          onChange={this.handleChange('searchText')}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Buscar"
                  onClick={this.handleSearch}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </>
    );
  }
}

SearchField.propTypes = {};

export default withStyles(styles)(SearchField);