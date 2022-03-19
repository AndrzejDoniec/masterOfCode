const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res){        ////ustawianie end pointów
    res.send("<h2>Hello World</h2>");
})


app.get('/about', function(req, res){        ////ustawianie end pointów
    res.send("<h2>o mnie</h2>");
})

app.listen(port, (err) => {
  if (err) {
    return console.log(`Wystąpił błąd ${err.message}`);
  }
  return console.log(`Apka działa na porcieeeee ${port}`);
});
