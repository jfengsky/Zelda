const express = require('express')
const app = express()

const view = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<title>vue-webpack</title>
</head>
<body>
    <section id="app"></section>
    <script src="/build.js"></script>
</body>
</html>`

app.use(express.static(__dirname + '/dist'))
app.get('/', function(req, res) {
  res.send(view);
})
app.listen(3300)