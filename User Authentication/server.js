const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userroutes = require('./routes/userroutes');
const PORT = 3001;


const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', userroutes);


mongoose.connect('mongodb://localhost:27017/Users', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to Mongodb"))
    .catch((err) => console.log("Error connecting to MongoDb", err));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
})
    
