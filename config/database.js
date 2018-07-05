if(process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: 'mongodb://<laavis>:<nakkipiilo69>@ds161520.mlab.com:61520/videas-prod'
  }
} else {
  module.exports = {
    mongoURI: 'mongodb://localhost/videas-dev'
  }
}