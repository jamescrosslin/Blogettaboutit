"use strict";
const { Sequelize, Model } = require("sequelize");
const moment = require("moment");

module.exports = (sequelize) => {
  class Article extends Model {
    publishedAt() {
      const date = moment(this.createdAt).format("MMMM D, YYYY, h:mma");
      return date;
    }
    shortDescription() {
      const description = this.body.length > 200 ? this.body.slice(0, 200) + "..." : this.body;
      return description;
    }
  }
  Article.init(
    {
      title: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: '"Title" is required',
          },
        },
      },
      author: Sequelize.STRING,
      body: Sequelize.TEXT,
    },
    { sequelize }
  );
  return Article;
};
