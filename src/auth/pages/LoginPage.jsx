import { Link as RouterLink } from "react-router-dom"
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { useDispatch } from "react-redux"
import { checkingAuthentication, checkingCredentials, starGoogleSingIn } from "../../store/auth"


export const LoginPage = () => {
  
  const {email, password, onInputChange }  = useForm({
    email: 'missa@google.com',
    password: '123456'
  });
  //const {} = useSelector ( state => state.auth )
  const dispatch = useDispatch();

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log({email, password });
    dispatch( checkingAuthentication() );
  }

  const onGoogleSignIn = () =>{
    console.log('onGoogleSignIn');
    dispatch( starGoogleSingIn() )
  }
  
  return (

    <AuthLayout title="Login">

    <form onSubmit={ onSubmit }>
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2}}>
                  <TextField 
                  label="Correo" 
                  type="email" 
                  placeholder="correo@google.comm"
                  fullWidth
                  name="email"
                  value={ email }
                  onChange={ onInputChange }
                  />
              </Grid>
               
              <Grid item xs={12} sx={{ mt: 2}}>
                  <TextField 
                  label="Contraseña" 
                  type="password" 
                  placeholder="Contraseña"
                  fullWidth
                  name="password"
                  value={ password }
                  onChange={ onInputChange }
                  />
              </Grid>

              <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1}}>
                <Grid item xs={ 12 } sm={ 6 }>
                    <Button
                     type="submit" 
                    variant="contained" 
                    fullWidth
                    >
                      Login
                    </Button>
                </Grid>
                <Grid item xs={ 12 } sm={ 6 }>
                    <Button 
                      variant="contained" 
                      fullWidth
                      onClick={ onGoogleSignIn }>
                      <Google/>
                      <Typography sx={{ml: 1}}>Google</Typography>
                    </Button>
                </Grid>

              </Grid>

              <Grid container direction='row' justifyContent='end'>
                <Link component={ RouterLink } color='inherit' to="/auth/register">
                Crear Una Cuenta
                </Link>

              </Grid>

            </Grid>

          </form>

    </AuthLayout>
          
  )
}
