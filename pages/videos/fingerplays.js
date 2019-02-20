import Page from '../components/page'
import Layout from '../components/layout'

export default class extends Page {
  render() {
    return (
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          class="embed-responsive-item"
          src="https://www.youtube.com/embed/videoseries?list=undefined"
          allowfullscreen=""
        />
      </div>
    )
  }
}
