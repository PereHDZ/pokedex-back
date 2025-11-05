const baseFunctionsGenerator = (Model) => {
  /**
   *
   * @param {*} query
   */
  const count = (query) => Model.countDocuments(query);
  /**
   *
   * @param {*} type
   */
  const create = async (type) => {
    const newType = new Model(type);
    return await newType.save();
  };

  /**
   *
   */
  const findAll = () => Model.find({});
  /**
   *
   * @param {*} query
   */
  const findByQuery = (query) => Model.find(query);
  /**
   *
   * @param {*} _id
   */
  const findById = (_id) => Model.findById(_id);
  /**
   *
   * @param {*} query
   */
  const findOneByQuery = (query) => Model.findOne(query);
  /**
   *
   * @param {*} query
   * @param {*} type
   */
  const findByQueryAndUpdate = (query, type) => Model.findOneAndUpdate(query, type, { new: true });
  /**
   *
   * @param {Array} objects
   */
  const insertMany = (objects) => Model.insertMany(objects);
  /**
   *
   * @param {*} _id
   */
  const remove = (_id) => Model.deleteOne({ _id });
  /**
   *
   * @param {*} _id
   * @param {*} type
   */
  const update = (_id, type) => Model.findOneAndUpdate({ _id }, type, { new: true });
  /**
   * @param {Object} filter
   * @param {Object} updateQuery
   * @param {Object} options
   */
  const updateMany = (filter, updateQuery, options) => Model.updateMany(filter, updateQuery, options);
  /**
   *
   * @param {Object} query
   */
  const deleteMany = (query) => Model.deleteMany(query);
  /**
   *
   * @param {*} object
   */
  const validate = (object) => Model.validate(object);

  return {
    count,
    create,
    deleteMany,
    findAll,
    findByQuery,
    findByQueryAndUpdate,
    findById,
    findOneByQuery,
    insertMany,
    remove,
    update,
    updateMany,
    validate,
  };
};

export default baseFunctionsGenerator;