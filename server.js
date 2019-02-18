const express = require('express')
const SheetsRegistry = require('jss')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    // We are going to fill these out in the sections to follow.
    function renderFullPage(html, css) {
      /* ... */
    }

    function handleRender(req, res) {
      /* ... */
    }

    // This is fired every time the server-side receives a request.
    server.use(handleRender)

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
