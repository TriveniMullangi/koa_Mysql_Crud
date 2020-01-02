const Router = require('koa-router');
const router = new Router();
const service = require('../services/dbService')

router.get('/getStudents', async (ctx, next) => {
    console.log("in get routes")
    let item = await service.show();
    ctx.body = item;
});

router.post('/addStudents', async (ctx, next) => {
    console.log("in post route")
    var body =  ctx.request.body;
    console.log("body in post api", body)
    let item = await service.add(body);
    ctx.body = item;
});
router.put('/updateStudents/:email', async (ctx, next) => {
    console.log("in put route")
    var email =  ctx.params.email;
    var grade = ctx.request.body.grade
    console.log("email", email," grade",grade )
    let item = await service.update(grade,email);
    ctx.body = item;
});
router.delete('/deleteStudents', async (ctx, next) => {
    console.log("in delete route")
    var email =  ctx.query.email;
    console.log("email", email )
    let item = await service.delete(email);
    ctx.body = item;
});
module.exports = router;