class NewsController {
    //[GET] /news
    index(req, res){
        res.render("news");
    }
    //[GET] /news/:slug
    show(req, res){
        res.send("1234");
    }
}

module.exports = new NewsController;