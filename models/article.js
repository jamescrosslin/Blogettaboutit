"use strict";
const { Sequelize, Model } = require("sequelize");

module.exports = (sequelize) => {
  class Article extends Model {}
  Article.init(
    {
      title: Sequelize.STRING,
      author: Sequelize.STRING,
      body: Sequelize.TEXT,
    },
    { sequelize }
  );
  return Article;
};
