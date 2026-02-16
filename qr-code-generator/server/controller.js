const service = require('./service');

exports.generateQR = async (req, res) => {
    try {
        const { data } = req.body;

        const formattedData = service.formatData(data);
        const qrCodeBuffer = await service.generateQRCode(formattedData);

        res.set('Content-Type', 'image/png');
        res.send(qrCodeBuffer);

    } catch (error) {
        res.status(500).json({ error: 'QR generation failed' });
    }
};
