require('./config/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const { clientOrigins } = require('./config/env.dev');

console.log(process.env.NODE_ENV)
app.use(cors({ origin: clientOrigins }));
app.use(express.json());

app.use('./', (req, res) => {
  res.send('hi')
})

app.use('/', require('./routes/taskList'));
app.use('/', require('./routes/day'));

console.log(process.env.PORT)

mongoose.connect(process.env.URLDB,{
  useNewUrlParser:true, useUnifiedTopology: true /*useCreateIndex:true, useFindAndModify: false */},(err,res)=>{
  if(err) throw err;
  console.log('conexión exitosa con la DB');
});

app.listen(process.env.PORT, () => {
  console.log('Server listening in port ' + process.env.PORT )
});

