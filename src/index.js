const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const path = require('path');
const koaStatic = require('koa-static');
const { minify } = require('html-minifier');

const app = new Koa();
const router = new Router();
const port = 2222; // Change to the desired port number

// Configure views middleware
app.use(
  views(path.join(__dirname, 'views'), {
    extension: 'ejs',
  })
);

// Serve static assets
app.use(koaStatic(path.join(__dirname, 'assets')));

// Minify HTML middleware
app.use(async (ctx, next) => {
  await next();
  if (ctx.response.type === 'text/html') {
    ctx.response.body = minify(ctx.response.body, {
      collapseWhitespace: true,
      removeComments: true,
    });
  }
});

// Enable koa-minify middleware for JavaScript files
// (Keep the existing code for JavaScript minification)

// Define your routes here
const index = require('./routes/index');
router.use('/', index.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Server is running on port localhost:${port}`);
});
