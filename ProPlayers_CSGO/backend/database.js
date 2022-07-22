var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {        
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQlite database.')
        db.run(`CREATE TABLE players (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text,
            team text,
            score text,
            avatar text 
            )`, (err) => {
            if (err) {                
            } else {
                console.log('create success')
            }
        })
    }
})


module.exports = db

