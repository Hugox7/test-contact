import React from 'react';
import { TextField, Button } from '@material-ui/core';
import './ContactForm.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#035913'
    }
  },
  typography: { useNextVariants: true },
});



const ContactForm = () => {
    return(
      
      <div className="contact-form">
          <MuiThemeProvider theme={theme}>
              <form className="form">
                  <TextField
                      id="standard-with-placeholder"
                      label="Votre adresse mail"
                      placeholder="Votre adresse mail..."
                      className="text-field"
                      margin="normal"
                      type="email"
                      name="_replyto"
                  />
                  <TextField
                      id="outlined-multiline-static"
                      label="Votre message"
                      multiline
                      rows="10"
                      placeholder="Votre message..."
                      className="text-field"
                      margin="normal"
                      variant="outlined"
                      name="message"
                  />
                  <Button variant="outlined" className="button" type="submit" value="send">
                      Envoyer
                  </Button>
              </form>
          </MuiThemeProvider>
        
        </div>
    )
}

export default ContactForm;

/*import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import purple from '@material-ui/core/colors/purple';


const styles = theme => ({
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#035913'
    }
  },
  typography: { useNextVariants: true },
});

function CustomizedInputs(props) {
  const { classes } = props;

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <TextField
          className="text-field"
          label="MuiThemeProvider"
          id="mui-theme-provider-input"
        />
    </MuiThemeProvider>
    </div>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputs);*/