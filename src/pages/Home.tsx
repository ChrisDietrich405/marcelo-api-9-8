import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Home() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNi_ZYWCck2b9bt5OH906jDwME5xsJeTC3Wg&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Financial Updates Now
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Financial Updates Now provides you with the most up to date financial information in the most convenient format.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
