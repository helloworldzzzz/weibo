const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})


router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'

  }
})

router.get('/profile/:userName',async (ctx,next)=>{  //：动态参数
  const { userName }=ctx.params
  ctx.body={  //ctx=context ctx.body 就是 ctx.response.body 
    title:'this is profile page',userName
  }

})

router.get('/loadMore/:userName/:pageIndex',async (ctx,next)=>{
  const { userName,pageIndex}=ctx.params
  ctx.body={
  title:'this is load API',userName,pageIndex
}
})



module.exports = router
