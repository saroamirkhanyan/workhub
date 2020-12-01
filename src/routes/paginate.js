import paginationValidation from '@/validation/pagination'

const paginate = (req, res, next) => {
  let { page, count } = req.query
  //  To Number
  page = parseInt(page)
  count = parseInt(count)

  const { error } = paginationValidation({ page, count })
  if (error) return res.status(400).send(error)

  const skipping = (page - 1) * count

  req.pagination = { page, count, skipping }

  next()

}

export default paginate