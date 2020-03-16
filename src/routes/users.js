const router = require('koa-router')()

router.prefix('/users')//前缀

router.get('/', function (ctx, next) { //后缀
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
router.post('/login',async(ctx,next)=>{
  const {userName,password }=ctx.request.body
  ctx.body={
    tag:52,
    userName,
    password
  }
})
module.exports = router
