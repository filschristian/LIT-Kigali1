import { Joi } from 'celebrate';

const createArticle = {
  article: Joi.object()
    .keys({
      title: Joi.string()
        .required()
        .trim(),
      body: Joi.string()
        .required()
        .min(50),
      description: Joi.string()
        .required()
        .trim(),
      tagList: Joi.array()
        .max(5)
        .items(Joi.string().trim()),
      status: Joi.string()
        .trim()
        .valid(['unpublished', 'published']),
      cover: Joi.string(),
    })
    .required(),
};

const getArticlesQuery = {
  tag: Joi.string().trim(),
  author: Joi.string().trim(),
  limit: Joi.number()
    .integer()
    .min(1)
    .max(25),
  offset: Joi.number()
    .integer()
    .min(0),
  page: Joi.number()
    .integer()
    .min(1),
  favorited: Joi.string(),
  title: Joi.string().trim()
};

export default {
  createArticle,
  getArticlesQuery
};
