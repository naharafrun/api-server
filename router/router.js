const angularRouter = require('./angular');
const javaRouter = require('./java');

const appRouter = (app, fs) => {
    // API url
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // route module
    angularRouter(app, fs);
    javaRouter(app, fs);
};

// this line is unchanged
module.exports = appRouter;
