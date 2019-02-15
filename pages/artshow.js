import React from 'react'
import Draggable from 'react-draggable'
import Page from '../components/page'
import Layout from '../components/layout.js'
import { Carousel, MediaBox } from 'react-materialize'

export default class extends Page {
  constructor(props) {
    super(props)

    this.state = {
      data: null
    }
  }
  render() {
    return (
      <Layout>
        <Carousel
          images={[
            'https://lorempixel.com/250/250/nature/1',
            'https://lorempixel.com/250/250/nature/2',
            'https://lorempixel.com/250/250/nature/3',
            'https://lorempixel.com/250/250/nature/4',
            'https://lorempixel.com/250/250/nature/5'
          ]}
        />
        <Draggable
          axis="x"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[25, 25]}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="picture1-drag">
            <div className="handle">Drag from here</div>
            <div>This readme is really dragging on...</div>
          </div>
        </Draggable>
        <style jsx>
          {`
            .picture1-drag {
              background-image: url('https://lorempixel.com/250/250/nature/1');
            }
          `}
        </style>
      </Layout>
    )
  }
}
