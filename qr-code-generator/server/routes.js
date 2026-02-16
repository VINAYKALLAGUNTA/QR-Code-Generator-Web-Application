const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/generate-qr', controller.generateQR);

module.exports = router;

router.get('/', (req, res) => {
    res.send("QR API is running...");
});
