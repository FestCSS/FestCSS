const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const koaStatic = require('koa-static');
const { minify: minifyHTML } = require('html-minifier');

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
  if (ctx.response.type === 'text/html' && ctx.response.body) {
    ctx.response.body = minifyHTML(ctx.response.body, {
      collapseWhitespace: true,
      removeComments: true,
    });
  }
});

// Read files and set up routes dynamically
const pagesDir = path.join(__dirname, 'views/pages');
fs.readdirSync(pagesDir).forEach(file => {
  const route = file === 'index.ejs' ? '/' : `/${path.basename(file, '.ejs')}`;
  router.get(route, async (ctx) => {
    await ctx.render(path.join('pages', path.basename(file, '.ejs')));
  });
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
