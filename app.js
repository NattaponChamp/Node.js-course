const express = require('express')
const app = express()
const morgan = require('morgan')
const debug = require('debug')('app')
const port = 3000

app.use(morgan('combined'))

app.get('/',(req,res)=>{

    res.send('Hello world Ver2')

})
app.listen(port,()=>{
    debug('Listening on port',port)
})