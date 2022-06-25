import React, { useContext, useState } from 'react'
import "../assets/css/login.css";
import { AuthContext } from '../context/AuthContext';
import { 
  Avatar, 
  Button, 
  Checkbox, 
  Container, 
  CssBaseline, 
  FormControlLabel, 
  TextField, 
  Typography, 
  Grid, 
  Box, 
  Link, 
  makeStyles 
} from '@material-ui/core';

import AuthService from '../services/AuthService'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/#">
        UTSS-MICROCRED
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  
}));


function Login() {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const { setUser, setIsAuth } = useContext(AuthContext);
  const classes = useStyles();

  const loginuser = (e) => {

    e.preventDefault();

    let data = {

      email: email,
      password: password

    }

    AuthService.login(data).then(jsonData => {
      console.log(jsonData, '%cabcd', "color: blue");
    if
        (jsonData.message==='errors connect'){
        alert("verifier votre email et mot de passe")
      
      }
       if (!jsonData.error) {
        setUser(jsonData.user);
        setIsAuth(jsonData.isAuthenticated);
        { (jsonData.user.role==="admin" || jsonData.user.role==="comite") ?window.location.href = '/dash':window.location.href = '/dashClient'}
      }
    })

  }

  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper} onSubmit={loginuser} >
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Connexion
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            value={email}
            onChange={(e) => setemail(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            rules={[
              {
                  type: 'email',
                  message: 'Donnée entrée pas valide',
              },
              {
                  required: true,
                  message: 'SVP entrer votre E-mail',
              },
            ]}
          />
          <TextField
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            autoComplete="current-password"
            rules={[
              {
                  required: true,
                  message: 'SVP entrer votre mot de passe',
              },
            ]}
            hasFeedback
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Se souvenir"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Se connecter
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Mot de passe oublié?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Vous n'avez pas de compte? s'inscrire"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
        
};

export default Login
