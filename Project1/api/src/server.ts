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

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Ciao Mondo');
})

app.get('/api/resources', (req, res) => {
    const resources = getResources();
    res.send(resources);
})

app.get('/api/resources/:id', (req, res) => {
    const resources = getResources();
    const {id} = req.params;
    const foundResource = resources.find((resource: any) => resource.id === id);

    res.send(foundResource)


})

app.post('/api/resources', (req, res) => {
    const resources = getResources();
    const resource = req.body;

    resource.createdAt = new Date();
    resource.status = "inactive";
    resource.id = Date.now().toString();

    resources.unshift(resource);

    fs.writeFile(pathToFile, JSON.stringify(resources, null, 2), err => {
        if(err) {
            res.status(422).send('Cannot store data in the file!')
        } 

        res.send('Data has been saved');
    });
})

app.listen(3333, () => {
    console.log('Server is listening on port 3333')
})