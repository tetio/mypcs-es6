import Company from '../models/company.model'

/**
 * Load company and append to req.
 */
function load(req, res, next, id) {
  Company.get(String(id))
    .then(company => {
      req.company = company // eslint-disable-line no-param-reassign
      return next()
    })
    .catch(e => next(e))
}
