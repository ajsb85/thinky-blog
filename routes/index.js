exports.index = function(req, res){
    res.render('index.jade');
};

exports.partials = function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name + ".jade");
};
