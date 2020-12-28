import paginateSchema from './paginate.schema';

const paginateValidation = (data) => {
  return paginateSchema.validate(data);
};

export default paginateValidation;
