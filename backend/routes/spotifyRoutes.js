import express from 'express'; // require express dependency

export const spotifyRoutes = express.Router();

// spotify api authorization code flow
// https://developer.spotify.com/documentation/web-api/tutorials/code-flow

var client_id = 'CLIENT_ID';
var redirect_uri = 'http://127.0.0.1:8888/callback';

spotifyRoutes.get('/login', (req, res) => {
  // request authorization to access data
  var state = generateRandomString(16);
  var scope = 'user-library-read';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
})