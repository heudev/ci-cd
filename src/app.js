const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Merhaba CI/CD!' });
});

app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Uygulama ${port} portunda çalışıyor`);

    });
}

module.exports = app; 