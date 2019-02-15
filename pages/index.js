import Link from 'next/link'
import React from 'react'
import { Container, Row, Col, Jumbotron } from 'reactstrap'
import { Card, CardTitle } from 'react-materialize'
import Layout from '../components/layout'
import Featured from '../components/featured'

export default () => (
  <Layout>
    <Jumbotron>
      <h1>Welcome</h1>
      <p className="lead">
        Tickles and Tunes should feel like a comfortable gathering space for families and educators. We're going to
        share and learn new things together! As little ones discover their fingers and toes, and the world around them,
        we can encourage development by singing and celebrating along the way.
      </p>
      <p className="lead">
        This will be a safe, nurturing place where we try our best to use positive words. No matter who you are or where
        you're from, feel free to shake your sillies out for as long as you want!
      </p>
      <p className="lead">
        Please find something here to love, and then share something you love back. We're going to plant some seeds and
        watch them grow.
      </p>
    </Jumbotron>
    <Container>
      <Row key="first-row">
        <Col sm="6">
          <Card
            key="art-show-card"
            header={<CardTitle image="https://lorempixel.com/250/250/nature/1">The Art Show</CardTitle>}
            actions={[
              <Link href="#">
                <a>This is a Link</a>
              </Link>
            ]}>
            We want to see what makes you smile, sing, and laugh. This site could do with many splashes of colour.
            Please share your art, and we will put it in our gallery, on instagram (work in progress), and anywhere we
            can fit on our site.
          </Card>
        </Col>
        <Col sm="6">
          <Card
            key="support-card"
            header={<CardTitle image="https://lorempixel.com/250/250/nature/2">Support Tickles and Tunes</CardTitle>}
            actions={[
              <Link href="#">
                <a>This is a Link</a>
              </Link>
            ]}>
            Please subscribe to our YouTube channel. Follow us on twitter, and facebook. Tell your friends about us,
            tell everybody...go tell it on a mountain.
          </Card>
        </Col>
      </Row>
      <Featured />
    </Container>
  </Layout>
)
