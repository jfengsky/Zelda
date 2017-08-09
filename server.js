const express = require('express')
const app = express()

const view = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vue example</title>
</head>
<body>
    <div>{{message}}</div>
    <script src="/build.js"></script>
</body>
</html>`

app.use(express.static(__dirname + '/dist'))
app.get('/', function(req, res) {
  res.send(view);
})
app.listen(3300)