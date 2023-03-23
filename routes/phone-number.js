var express = require('express');
var router = express.Router();

/* POST to phone form endpoint. */
router.post('/', (req, res) => {
    console.log('\x1B[36mThe user submitted the phone number:', req.body.phone);
    res.send('Submitted')
    res.status(200).end();
})

module.exports = router;