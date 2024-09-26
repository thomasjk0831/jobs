const db = require('../data/connection')

module.exports = {
    find,
    findPostsByName,
    add
}

function find() {
    return db('subreadit')
}

function add(name) {
    return db("subreadit").insert({ name }, "id")
        .then(ids => {
            return find()
        })
}