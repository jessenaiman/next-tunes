import Layout from '../components/layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Blogs = props => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {props.posts.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Blogs.getInitialProps = async function() {
  const res_posts = await fetch('http://localhost:1337/posts')
  const posts = await res_posts.json()

  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${posts[0]}`)

  return {
    posts: posts,
    shows: data
  }
}

export default Blogs
