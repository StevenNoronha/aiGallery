const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000
const mongoDB = require('./db'); // database connection

app.use(cors({ origin: 'http://localhost:3000' }));     // cross origin policy, helps in sending requests from frontend to backend

mongoDB();              // call to connect to database

app.get('/', (req, res) => {          // homepage of server
  res.send('Server of Aesthetic Alchemy')
})

app.use(express.json());
app.use('/api', require('./routes'));           // redirecting api calls to routes.js


app.listen(process.env.PORT || port, () => {        // server listening on port 5000
  console.log(`Example app listening on port ${port}`)
})
