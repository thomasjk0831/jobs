import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import morgan from 'morgan'
//routers
import jobRouter from './routes/jobRouter.js'

//setup middleware to use logging about requests
if(process.env.NODE.ENV === 'development')
app.use(morgan('dev'))

//setup middleware to accept json
app.use(express.json())

app.get("/", (req, res)=>{
  res.send("hello world")
})

app.post('/', (req, res)=>{
  console.log(req)
  res.json({ message: 'data received'})
})

app.use('/api/v1/jobs', jobRouter)

//NO ROUTES MATCH
app.use('*', (req,res)=>{
  res.status(404).json({msg:'not found'})
})

//ERROR HANDLE HAS TO BE LAST ROUTE
app.use((err, req, res, next)=>{
  console.log(err)
  res.status(500).json({msg:'something went wrong'})
})

const port = process.env.PORT || 5100
app.listen(port, ()=>{
    console.log("listening on 5100...")
})

