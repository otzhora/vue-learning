const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

router.get('/', async (req, res) => {
    const posts = await loadPostCollection()
    res.send(await posts.find({}).toArray())
})

router.post('/', async (req, res) => {
    const posts = await loadPostCollection()
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    })

    res.status(201).send()
})

router.delete('/:id', async(req, res) => {
    const posts = await loadPostCollection()
    await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) })

    res.status(200).send()
})

async function loadPostCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://abc_test:test@vue-express-w7d2g.mongodb.net/test?retryWrites=true', {
        useNewUrlParser: true
    })

    return client.db('vue-express').collection('posts')
}

module.exports = router