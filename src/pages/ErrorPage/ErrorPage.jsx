import React from 'react'
import Image from '../../assets/img/svg/Group 2292.svg'
import Image1 from '../../assets/img/Ellipse 211.png'
import Image2 from '../../assets/img/svg/Group 2321.svg'
import style  from '../../modules/Error.module.css'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'

const ErrorPage = ()  => {
      return(
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
           <div className={style.class}>
          <div className={style.error}>
             <h1>Error 404</h1>
             <p>No encontramos la pagina que estabas buscando</p>
             <img src={Image} className={style.Image}/>
             <Link  href="#">Volver al Inicio</Link>
          </div>
              <div className={style.elipse}>
                <img src={Image1}/>
              </div>
              <div className={style.Image2}>
                <img src={Image2}/>
              </div>
          </div>
        </Grid>
      </Grid>
  )
}

export default ErrorPage;