import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Ciao Mondo');
})

app.listen(3333, () => {
    console.log('Server is listening on port 3333')
})