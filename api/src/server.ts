import express, { application } from 'express';
import path from 'path';
import fs from 'fs';
// import cors from 'cors';

const app = express();

// const corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200
// }

// app.use(cors(corsOptions))


const pathToFile = path.resolve(__dirname, 'data.json');

const getResources = () => JSON.parse(fs.readFileSync(pathToFile, 'utf8'))

app.get('/', (req, res) => {
    res.send('Ciao Mondo');
})

app.get('/api/resources', (req, res) => {
    const resources = getResources();
    res.send(resources);
})

app.listen(3333, () => {
    console.log('Server is listening on port 3333')
})