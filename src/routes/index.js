const Router = require('koa-router');
const router = new Router();
const path = require('path');

// Define your routes here
router.get('/', async (ctx) => {
  await ctx.render('index');
});

module.exports = router;
