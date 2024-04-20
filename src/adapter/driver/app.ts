import express from "express";

const app = express();
app.get('/', (_request, response) => response.json({ msg: 'API IS ON FIRE!' }))
app.listen(3000, () => console.log('Server is listening on port 3000'));

