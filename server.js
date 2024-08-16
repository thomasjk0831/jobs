import express from 'express'
const app = express()
//setup middleware to accept json
app.use(express.json())

app.get("/", (req, res)=>{
  res.send("hello world")
})

app.post('/', (req,res)=>{
  console.log(req)
  res.json({message: 'data received', data: req.body})
})

app.listen(5100, ()=>{
    console.log("listening on 5100...")
})
