const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')


const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/blogs' , blogRoutes)

mongoose.connect('mongodb://localhost:27017/Blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Error connecting to MongoDB', err));



app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});