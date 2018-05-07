const {models} = require("../models");
const Sequelize = require("sequelize");

exports.index=(req,res,next) => {
    models.quiz.findAll()
        .then(quizzes => {
            res.render("quizzes", {quizzes});
        } )
        .catch(error => next(error));

};