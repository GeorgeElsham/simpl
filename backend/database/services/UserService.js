const { Users } = require('../connection')

exports.get = (uuid) => {
    Users.findOne(uuid);
}

exports.create = (data) => {
    Users.create(data);
}