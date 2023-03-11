const express = require('express');
const cookieParser = require('cookie-parser');
const singupRoutes = require('./routes/signup.js'); 
const app = express();
const port = 3000;
app.use(express.json());
app.use(cookieParser());




// app.use('/', routes);
 app.use("/api", [singupRoutes]);

app.listen(port, () => {
  console.log(`Start listen Server: ${port}`);
});

module.exports = app;
