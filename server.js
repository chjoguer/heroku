const express = require("express");
const path = require('path');
const app = express();
app.use(express.static('./dist/family-proyect'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/family-proyect/'}
  );
  });
  app.listen(process.env.PORT || 8080);
