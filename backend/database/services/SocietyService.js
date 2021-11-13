const { v4 } = require('uuid');
const { Societies } = require('../connection')

exports.get = (uuid) => {
    return Societies.findOne(uuid);
}

exports.create = (data) => {
    return Societies.create({
        id: v4(),
        name: data.name,
        description: data.description,
        profile_picture: data.profile_picture,
        category: data.category,
        color: Number(data.color),
    });
}