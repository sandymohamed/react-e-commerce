import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'

import useStyles from './style'
const Main = ({categories}) => {
    const classes = useStyles();

  
    return (
        <>
        <Card className={classes.root}>
            <CardMedia className={classes.media} image="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h2" gutterBottom>
                        start shopping now...
                    </Typography>
                    <Typography variant="h4" color='textSecondary' >
                          get to 30% sale    
                    </Typography>
                </div>
                 
            </CardContent>
           
            <CardActions disableSpacing className={classes.cardActions} >
                <Link  to="/products" className={classes.link}>go to shop 👉
                </Link>
            </CardActions>
            
        </Card>
        <Typography color='textSecondary' style={{textAlign: 'center'}}> created by <a  style={{textDecoration:'none'}}href="https://www.linkedin.com/in/sandy-mohammed-873b821bb/">Sandy Mohammed</a></Typography>
        </>
    )
    
}

export default Main
