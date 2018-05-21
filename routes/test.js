var express = require('express')
var router = express.Router()

router.get('/getData', function (req, res, next) {
    var reqOrigin = req.header('origin')
    if (reqOrigin != undefined && reqOrigin.indexOf('http://localhost:8080') > -1) {
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
        res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
        res.header('Access-Control-Allow-headers','Content-Type,Content-Length,Authorization,Accept,X-Requested-With')
    }
    var swiperArray = [
        {index: 1, src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526884182375&di=a7c6bfdd0d9b834ff22c63f4770bdd50&imgtype=0&src=http%3A%2F%2Fimg07.tooopen.com%2Fimages%2F20170316%2Ftooopen_sy_201956178977.jpg'},
        {index: 2, src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526884198497&di=f763357c796c53db2298c8250c996c31&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0142135541fe180000019ae9b8cf86.jpg%401280w_1l_2o_100sh.png'}
    ]
    res.status(200).json({
        data: swiperArray,
        msg: '请求数据成功',
        errorcode: 0
    })
})

router.get('/getData2', function (req, res, next) {
    var swiperArray = [
        {index: 1, src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526884182375&di=a7c6bfdd0d9b834ff22c63f4770bdd50&imgtype=0&src=http%3A%2F%2Fimg07.tooopen.com%2Fimages%2F20170316%2Ftooopen_sy_201956178977.jpg'},
        {index: 2, src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526884198497&di=f763357c796c53db2298c8250c996c31&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0142135541fe180000019ae9b8cf86.jpg%401280w_1l_2o_100sh.png'}
    ]
    res.jsonp({
        data: swiperArray,
        msg: '请求数据成功',
        errorcode: 0
    })
})

module.exports = router



























