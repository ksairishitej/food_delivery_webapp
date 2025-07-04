const express = require('express');
const mongoDB = require('./db'); 
const app = express();
const port = 5000;
mongoDB().then(() => {
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin,X-Requested-With,Content-Type,Accept"
        );
        next();
    })
    app.use(express.json());
    app.use('/api', require("./Routes/CreateUser"));
    app.use('/api',require("./Routes/DisplayData"));
    app.listen(port, () => {
        console.log(`🚀 Server running on http://localhost:${port}`);
    });
}).catch(err => {
    console.error("❌ Server startup failed due to DB connection error:", err);
});