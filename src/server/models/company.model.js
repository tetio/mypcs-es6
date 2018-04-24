import mongoose from 'mongoose'
import httpStatus from 'http-status'
import APIError from '../helpers/APIError'

const PrimaryContactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true },
  },
  { _id: false },
)

const CompanySchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  web: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  region: { type: String, required: false },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
  phone: { type: String, required: true },
  fax: { type: String, required: false },
  situation: { type: String, required: true },
  lastModification: { type: Date, required: true },
  primaryContact: PrimaryContactSchema,
  users: { type: [String], required: false },
})

CompanySchema.method({})

CompanySchema.statics = {
  /**
   * Get company
   * @param {ObjectId} id - The objectId of company.
   * @returns {Promise<Company, APIError>}
   */
  get(_id) {
    return this.findById(_id).exec().then(company => {
      if (company) {
        return company
      }
      const error = new APIError('Company not found.', httpStatus.NOT_FOUND)
      return Promise.reject(error)
    })
  },

  /**
   * Get company list.
   * @property {number} req.query.skip - Number of companies to be skipped.
   * @property {number} req.query.limit - Limit number of companies to be returned.
   * @returns {Company[]}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find().sort({ createdAt: -1 }).skip(skip).limit(limit).exec()
  },
}

/**
 * @typedef Company
 */
export default mongoose.model('Company', CompanySchema)
