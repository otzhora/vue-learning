const express = require('express')
const bodyParser= require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

const posts = require('./routs/api/post')

app.use('/api/posts', posts)

const port = process.env.PORT || 8000

// Handle prod
if (process.env.NODE_ENV === 'production' || 1) {
    app.use(express.static(__dirname + '/public/'))

    // Handle SPA
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/public/index.html')
    })
}


app.listen(port, () => console.log(`Server started on ${port}`))