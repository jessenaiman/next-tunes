import React from 'react'
import { render } from 'react-dom'
import Gallery from 'react-photo-gallery'
import Photo from './photo'
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc'
import Page from '../components/page'
import Layout from '../components/layout'

const photos = [
  {
    src: 'static/images/artshow/curtis skateboarder012.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'static/images/artshow/curtis-dancers011-8x10.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'static/images/artshow/edward 2 people018_twitter-landscape.jpg',
    width: 3,
    height: 1
  },
  {
    src: 'static/images/artshow/edward-cup-4x3.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'static/images/artshow/edward-stringart-10x8.jpg',
    width: 10,
    height: 8
  },
  {
    src: 'static/images/artshow/jesse-3people-3x1.jpg',
    width: 3,
    height: 1
  },
  {
    src: 'https://source.unsplash.com/zh7GEuORbUw/600x799',
    width: 3,
    height: 4
  },
  {
    src: 'https://source.unsplash.com/PpOHJezOalU/800x599',
    width: 4,
    height: 3
  },
  {
    src: 'https://source.unsplash.com/I1ASdgphUH4/800x599',
    width: 4,
    height: 3
  }
]

const SortablePhoto = SortableElement(Photo)
const SortableGallery = SortableContainer(({ photos }) => {
  return <Gallery photos={photos} columns={4} ImageComponent={SortablePhoto} />
})

export default class extends Page {
  constructor() {
    super()
    this.onSortEnd = this.onSortEnd.bind(this)
    this.state = {
      photos: photos
    }
  }
  onSortEnd({ oldIndex, newIndex }) {
    this.setState({
      photos: arrayMove(this.state.photos, oldIndex, newIndex)
    })
  }
  render() {
    return (
      <Layout>
        <SortableGallery axis={'xy'} photos={this.state.photos} onSortEnd={this.onSortEnd} />
      </Layout>
    )
  }
}
