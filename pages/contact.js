import Layout from '../components/layout.js'

export default () => (
  <Layout>
    <div class="container">
      <div class="pb-2 mt-2 mb-4 border-bottom">
        <h3>Say Hello To The Morning, or your Toes, or Us</h3>
        <p>Tickles and Tunes should be about celebrating what makes us special, and sharing those qualities. </p>
        <p class="lead"> Please send us your favourite pictures, drawing, and ideas.</p>
        <p>
          Or email us at <a href="mailto:artshow@ticklesandtunes.com">artshow@ticklesandtunes.com</a>
        </p>
      </div>
      <form method="POST">
        <input type="hidden" name="_csrf" />
        <div class="form-group row">
          <label class="col-md-2 col-form-label font-weight-bold" for="message">
            Please tell us your idea or suggestion
          </label>
          <div class="col-md-8">
            <textarea class="form-control" name="message" id="message" rows="7" autofocus="true" />
          </div>
        </div>
        <div class="form-group">
          <div class="offset-md-2 col-md-8 p-1">
            <button class="btn btn-primary" type="submit">
              <i class="far fa-envelope fa-sm" /> Send
            </button>
          </div>
        </div>
      </form>
    </div>
  </Layout>
)
