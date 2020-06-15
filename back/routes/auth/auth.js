const express = require('express');
const app = express()
const router = express.Router();
const connection = require("../../config")
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser)


router.post('/signup', function (req, res, next) {
    connection.query('insert into users set?', req.body, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).send("Error trying to signup")
        } else {
            res.status(200).send(results)
        }
    })
});

module.exports = router;