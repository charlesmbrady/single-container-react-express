const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const path = require('path');


// Middlewares
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(express.json({ limit: '100mb' }));

// Serves the static React build 
app.use('/static', express.static(path.join(__dirname, './build/static')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/build/'));
});

app.get('/api/check', (req, res) => {
    console.log("get test hit");
    res.send("app is upp!")
})


// Error handler
app.use(function (err, req, res, next) {
    console.log('====== ERROR =======');
    console.error(err.stack);
    res.status(500);
});

// Starting Server
app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}`);
});