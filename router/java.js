const javaRouter = (app, fs) => {
    // variables
    const dataPath = './jsonData/java.json';

    // READ
    app.get('/javaQuestion', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });
};

module.exports = javaRouter;
