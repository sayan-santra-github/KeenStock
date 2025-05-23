require('dotenv').config()
const express = require('express');
const app = express()
const cors = require('cors')

const mainRouter = require('./router/mainRoute');
const userRouter = require('./router/userRoute')


app.use(cors);


app.use('/user', userRouter);

const port = process.env.PORT || 8990;
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});