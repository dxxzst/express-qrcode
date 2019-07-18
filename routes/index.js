const express = require('express');
const router = express.Router();
const QRCode = require('qr-image');

/* GET home page. */
router.get('/', function (req, res, next) {
    let size = Math.round(21 * 5);
    let margin = 2;
    var url=req.query.url;
    var codeStr = QRCode.imageSync(url, {type: 'png', size: size, margin: margin});
    var base64 = 'data:image/jpeg;base64,' + codeStr.toString('base64');

    res.render('index', {imageBase64: base64});
});

module.exports = router;
