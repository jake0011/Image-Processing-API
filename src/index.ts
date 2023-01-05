import express from 'express'
import router from './routes/api.routes'

const app = express()
const port = 4000


app.get('/', (req, res) => {
    res.send('This is our image Processing API')
})

app.use('/api', router)

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})
