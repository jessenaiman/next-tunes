import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Layout from '../components/sample-layout'
import Featured from '../components/featured'
import MyCard from '../components/my-card'
import Paper from '@material-ui/core/Paper'
import Page from '../components/page'
import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import StarIcon from '@material-ui/icons/StarBorder'
import Toolbar from '@material-ui/core/Toolbar'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  appBar: {
    position: 'relative'
  },
  toolbarTitle: {
    flex: 1
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2
    }
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`
  }
})

const cards = [
  {
    title: 'Music',
    description: ['Listen to playlists designed for all ages'],
    buttonText: 'Explore and Sing along',
    buttonVariant: 'outlined'
  },
  {
    title: 'Videos',
    description: ['Watch and play along'],
    buttonText: 'Take a look',
    buttonVariant: 'contained'
  },
  {
    title: 'The Art Show',
    description: [
      'We want to see what makes you smile, sing, and laugh. This site could do with many splashes of colour. Please share your art, and we will put it in our gallery, on instagram (work in progress), and anywhere we can fit on our site.'
    ],
    buttonText: 'Share your creativity',
    buttonVariant: 'outlined'
  },
  {
    title: 'The Business Side',
    description: [
      'Tickles and Tunes provides the best advertising and marketing for independent artists who provide quality education. Read more about how we can help you improve your online streaming sales.'
    ],
    buttonText: 'Learn more',
    buttonVariant: 'outlined'
  }
]
export default class extends Page {
  render() {
    return (
      <Layout>
        <main className={styles.layout}>
          {/* Hero unit */}
          <div className={styles.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Pricing
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" component="p">
              Quickly build an effective pricing table for your potential customers with this layout. It&apos;s built
              with default Material-UI components with little customization.
            </Typography>
          </div>
          {/* End hero unit */}
          <Grid container spacing={40} alignItems="flex-end">
            {cards.map(tier => (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                    className={styles.cardHeader}
                  />
                  <CardContent>
                    {tier.description.map(line => (
                      <Typography variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </CardContent>
                  <CardActions className={styles.cardActions}>
                    <Button fullWidth variant={tier.buttonVariant} color="primary">
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </main>
      </Layout>
    )
  }
}
