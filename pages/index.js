import Link from 'next/link'
import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Layout from '../components/layout'
import Featured from '../components/featured'
import MyCard from '../components/my-card'

export default () => (
  <Layout>
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6}>
        <MyCard title="Listen" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <MyCard title="Watch" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <MyCard
          title="The Art Show"
          description="We want to see what makes you smile, sing, and laugh. This site could do with many splashes of colour. Please share your art, and we will put it in our gallery, on instagram (work in progress), and anywhere we can fit on our site."
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <MyCard
          title="Support Tickles and Tunes"
          description="Please subscribe to our YouTube channel. Follow us on twitter, and facebook. Tell your friends about us, tell everybody...go tell it on a mountain."
        />
      </Grid>
      <Featured />
    </Grid>
  </Layout>
)
