const angularRouter = (app, fs) => {
    // variables
    const dataPath = './jsonData/angular.json';

    // READ
    app.get('/angularQuestion', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });
};

module.exports = angularRouter;
