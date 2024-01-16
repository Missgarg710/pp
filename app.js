import express from 'express';
import router from './router/router.js';
import bodyParser from 'body-parser';
const app = express()
const port = 3000

app.set('view engine',"ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/',router);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})