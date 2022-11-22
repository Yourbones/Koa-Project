const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  ctx.body = 'Hello haoxing'
})

app.listen(3000)
console.log('Node服务器开启，监听在3000端口');
