import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import adminRouter from './routes/adminRoute.js'

const app = express()
const port = process.env.PORT || 4000
connectDB()

app.use(express.json())
app.use(cors())

app.use('/api/admin', adminRouter)

app.get('/',(req,res)=>{
    res.send('api working')
})

// app.listen(port, ()=>console.log('server started', port))

export default app;
