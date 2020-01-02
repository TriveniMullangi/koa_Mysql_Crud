const Koa = require('koa');
const logger = require('koa-logger');
var bodyParser = require('koa-bodyparser');
const dbRouter  =  require('./routes/sampleDb_route');
const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(bodyParser());

// log all events to the terminal
app.use(logger());

// error handling
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
        ctx.app.emit('error', err, ctx);
    }
});


// tells the router to use all the routes that are on the object
app.use(dbRouter.routes());
app.use(dbRouter.allowedMethods());

// tell the server to listen to events on a specific port
const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
module.exports = server;