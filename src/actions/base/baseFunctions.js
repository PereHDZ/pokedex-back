const baseFunctionGenerator = (Model) => {
    const count = (query) => Model.countDocuments(query)

    const create = (type) => {
        new Promise((resolve, reject) => {
            const newType = new Model(type);
            newType.save((err, created) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(created)
                }
            });
        });
    };

    const findAll = () => Model.find({});

    const findByQuery = (query) => Model.find(query);

    const findById = (id) => Model.findById(id);

    const findOneByQuery = (query) => Model.findOne(query);

    const findByQueryAndUpdate = (query, type) => Model.findOneAndUpdate(query, type, { new: true });

    const insertMany = (objects) => Model.insertMany(objects);

    const remove = (id) => Model.deleteOne({ id });

    const update = (id, type) => Model.findOneAndUpdate({ id }, type, { new: true });

    const updateMany = (filter, updateQuery, options) => Model.updateMany(filter, updateQuery, options);

    const deleteMany = (query) => Model.deleteMany(query);

    const validate = (object) => Model.validate(object);

    return {
        count,
        create,
        deleteMany,
        findAll,
        findByQuery,
        findByQueryAndUpdate,
        findById,
        insertMany,
        remove,
        update,
        updateMany,
        validate
    }
}
