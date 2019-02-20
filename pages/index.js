import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Container, Row, Col, CardDeck, Card, Jumbotron, Carousel, OverlayTrigger } from 'react-bootstrap'
import Grid from '@material-ui/core/Grid'
import StarIcon from '@material-ui/icons/StarBorder'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Layout from '../components/layout'
import Featured from '../components/featured'
import { VictoryPie } from 'victory'

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
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
  jumbo: {
    backgroundImage: "url('static/images/artshow/jesse-garden023.jpg')"
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`
  },
  mainItems: {
    paddingTop: `20px`
  }
})

const carouselItems = [
  {
    heading: 'Welcome To Tickles and Tunes.',
    subheading:
      'Discover the best resources for both parents and teachers in the form of music, video, and educational material. Come join and share a song with us.',
    extraText: '',
    link: ''
  },
  {
    heading: '',
    subheading: '',
    extraText: '',
    link: ''
  },
  {
    heading: '',
    subheading: '',
    extraText: '',
    link: ''
  }
]

const cards = [
  {
    title: 'Music',
    description: ['Songs for all ages'],
    image: 'static/images/ArtShow/curtis-dancers011-8x10.jpg',
    buttonText: 'Explore and Sing along',
    buttonLink: '/music',
    buttonVariant: 'outlined'
  },
  {
    title: 'Videos',
    description: ['Watch and play along'],
    image: 'static/images/artshow/curtis skateboarder012.jpg',
    buttonText: 'Take a look',
    buttonLink: '/videos',
    buttonVariant: 'contained'
  },
  {
    title: 'The Art Show',
    description: ['We want to see what makes you smile, sing, and laugh'],
    descriptionExpanded:
      'This site could do with many splashes of colour. Please share your art, and we will put it in our gallery, on instagram (work in progress), and anywhere we can fit on our site.',
    image: 'static/images/artshow/edward-stringart-10x8.jpg',
    buttonText: 'Share your creativity',
    buttonLink: '/artshow',
    buttonVariant: 'outlined'
  },
  {
    title: 'The Business Side',
    description: ['Read more about how we can help you improve your online streaming sales.', <VictoryPie />],
    descriptionExpanded:
      'Tickles and Tunes provides the best advertising and marketing for independent artists who provide quality education.',
    image: '',
    buttonText: 'Learn more',
    buttonLink: '/services',
    buttonVariant: 'outlined'
  }
]

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations']
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one']
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource']
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use']
  }
]

function Pricing(props) {
  const { classes } = props

  return (
    <Layout>
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="static/images/artshow/jesse-garden023.jpg?text=First slide&bg=373940"
                alt="First slide"
              />
              <Carousel.Caption>
                <div className="container">
                  <h1>Welcome To Tickles and Tunes.</h1>
                  <p>
                    Discover the best resources for both parents and teachers in the form of music, video, and
                    educational material. Come join and share a song with us.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="static/images/artshow/edward 2 people018_twitter-landscape.jpg?text=Second slide&bg=282c34"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h1>Listen and Learn</h1>
                <p>Listen to this month's kids playlist and other great music</p>
                <p className="lead">...also for grown ups</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="static/images/artshow/edward-stringart-3x1-vignette.jpg?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Watch and Play</h3>
                <p>Fingerplays, action songs,</p>
                <p className="lead">and lots of music</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          {/* End hero unit */}
          <div className={classes.mainItems}>
            <Container>
              <CardDeck>
                {cards.map(card => (
                  <Card>
                    <Card.Img variant="top" src={card.image} />
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="contained" className={classes.button} href={card.buttonLink}>
                        {card.buttonText}
                      </Button>
                    </Card.Footer>
                  </Card>
                ))}
              </CardDeck>
              <Featured />
            </Container>
          </div>
        </main>
        {/* Footer */}
        <footer className={classNames(classes.footer, classes.layout)}>
          <Container>
            <Grid container spacing={32} justify="space-evenly">
              {footers.map(footer => (
                <Grid item xs key={footer.title}>
                  <Typography variant="h6" color="textPrimary" gutterBottom>
                    {footer.title}
                  </Typography>
                  {footer.description.map(item => (
                    <Typography key={item} variant="subtitle1" color="textSecondary">
                      {item}
                    </Typography>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Container>
        </footer>
        {/* End footer */}
      </React.Fragment>
    </Layout>
  )
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Pricing)
