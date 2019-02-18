import Link from 'next/link'
import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Layout from '../components/layout'
import Featured from '../components/featured'
import MyCard from '../components/my-card'
import Paper from '@material-ui/core/Paper'
import { Container, Row, Col, Jumbotron, CardDeck, Card } from 'react-bootstrap'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

class Index extends React.Component {
  state = {
    open: false
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  handleClick = () => {
    this.setState({
      open: true
    })
  }

  render() {
    const { classes } = this.props
    const { open } = this.state

    return (
      <Layout>
        <Jumbotron fluid>
          <Container>
            <h1>Fluid jumbotron</h1>
            <p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </Container>
        </Jumbotron>
        <Container>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Listen</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Watch</Card.Title>
                <Card.Text>This card has supporting text below as a natural lead-in to additional content. </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>The Art Show</Card.Title>
                <Card.Text>
                  "We want to see what makes you smile, sing, and laugh. This site could do with many splashes of
                  colour. Please share your art, and we will put it in our gallery, on instagram (work in progress), and
                  anywhere we can fit on our site.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>The Business Side</Card.Title>
                <Card.Text>
                  Please subscribe to our YouTube channel. Follow us on twitter, and facebook. Tell your friends about
                  us, tell everybody...go tell it on a mountain.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardDeck>

          <Featured />
        </Container>
      </Layout>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Index)
