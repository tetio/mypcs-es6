import Chance from 'chance'
import Company from '../models/company.model'

/**
 * Load company and append to req.
function load(req, res, next, id) {
  console.log('in load @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
  Company.get(String(id))
    .then(company => {
      req.company = company // eslint-disable-line no-param-reassign
      return next()
    })
    .catch(e => next(e))
}


/**
 * Get company list.
 * @property {number} req.query.skip - Number of companies to be skipped.
 * @property {number} req.query.limit - Limit number of companies to be returned.
 * @returns {Company[]}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query
  Company.list({ limit, skip }).then(companies => res.json(companies)).catch(e => next(e))
}

function create(req, res, next) {
  const company = createCompany()
  company.save().then(createdCompany => res.json(createdCompany)).catch(e => next(e))
}

function createCompany() {
  let chance = new Chance()
  let company = new Company()
  company.code = chance.state() + chance.zip()
  company.name = chance.name()
  var domain = company.name.replace(' ', '').toLocaleLowerCase() + '.com'
  company.web = 'www.' + domain
  company.email = 'contact@' + domain
  company.name = company.name + ' Ltd.'
  company.address = chance.address()
  company.city = chance.city()
  company.region = chance.province({ full: true })
  company.country = chance.country({ full: true })
  company.postalCode = chance.postal()
  company.phone = chance.phone()
  company.fax = chance.phone()
  company.situation = 'A'
  company.lastModification = new Date()
  let first = chance.first()
  let last = chance.last()
  let contact = {
    firstName: first,
    lastName: last,
    mobile: chance.phone(),
    email: first.toLocaleLowerCase() + '.' + last.toLocaleLowerCase() + '@' + domain,
  }
  company.primaryContact = contactcon
  return company
}

export default { load, list, create }
