const router = require('koa-router')()

router.prefix("/users")
router.post("/", function(ctx, next) {
  ctx.body = "this is a users response"
})

/**
 * 用户登录接口
 */
router.post("/login", async ctx => {
  const request = ctx.request.body
  const { username, password } = request

  if (username && password) {
    ctx.body = {
      "code": 200,
      "msg": "success",
      "data": "登录成功"
    }
  }
})

module.exports = router