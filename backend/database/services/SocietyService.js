const { Societies } = require('../connection')

exports.get = (uuid) => {
    Societies.findOne(uuid);
}

exports.create = (data) => {
    Societies.create(data);
}