import Link from 'next/link'
import { Follow } from 'react-twitter-widgets'

const MyFooter = () => (
  <footer>
    <nav class="navbar fixed-bottom navbar-light bg-light">
      <p class="float-left">© 2019 Tickles and Tunes</p>
      <ul class="float-right list-inline">
        <li class="list-inline-item">
          <script src="https://apis.google.com/js/platform.js" />
          <div
            class="g-ytsubscribe"
            data-channelid="UC_THbKUe6o-K64vh7gWCPyQ"
            data-layout="default"
            data-count="default"
          />
        </li>
        <li class="list-inline-item">
          <a
            class="twitter-follow-button"
            href="https://twitter.com/TicklesAndTunes?ref_src=twsrc%5Etfw"
            data-show-count="false">
            {' '}
            @TicklesAndTunes
            <script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8" />
          </a>
        </li>
      </ul>
    </nav>
  </footer>
)

export default MyFooter
