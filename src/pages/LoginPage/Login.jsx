import React from "react";
import Group from '../../assets/img/Group 2288.svg';
import This from '../../assets/img/Vector.svg';
import Image1 from '../../assets/img/Ellipse 211.png'
import Image2 from '../../assets/img/svg/Group 2321.svg'
import style from '../../modules/Error.module.css'
import Box from "@mui/material/Box";
import { display } from "@mui/system";
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Image3 from '../../assets/img/Vector 21.37.26.png';
import { userLogin } from '../../services/axiosServices'

const Login = () => {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    // showPassword: false,
  });

  const handleLogin = async (event) => {
    event.preventDefault();

    const response = await userLogin(values)

    if (response.status === 'logged in') {
      localStorage.setItem('Token', JSON.stringify(response.token))
      window.location.reload()
      window.location.href = ('/')
      alert('Te logeaste correctamente')
    } else if (response.status === 'not verified') {
      console.log(response)
      alert('Usuario no verificado')
    } else {
      console.log(response)
      alert('Usuario no encontrado')
    }
  }

  const handleChangeEmail = (event) => {
    setValues(prev => ({ ...prev, email: event.target.value }))
  }

  const handleChangePassword = (event) => {
    setValues(prev => ({ ...prev, password: event.target.value }))
  }

  return (
    <Grid container xs={12}>
      <Box>
        <img src={Image3} />
      </Box>
      <Grid xs={12} md={8}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Correo@mail.com"
          onChange={handleChangeEmail}
          sx={{ bgColor: 'var(--purple)' }}
          type="email"
          fullWidth />
      </Grid>
      <Grid xs={12} md={8}>
        <TextField
          autoFocus
          margin="dense"
          onChange={handleChangePassword}
          id="name"
          label="Contraseña"
          sx={{ bgColor: 'var(--purple)' }}
          type="email"
          fullWidth />
      </Grid>
      <Grid xs={8} md={8}>
        <Button
          onClick={handleLogin}
          type={'submit'}
        >Iniciar Sesión</Button>
      </Grid>
    </Grid>
  )
}
export default Login;