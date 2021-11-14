const { Users, Societies } = require('../connection');
const { v4 } = require('uuid');

exports.create = (data) => {
    return Users.create({
        id: v4(),
        name: data.name,
        email: data.email,
        profile_picture: data.profile_picture,
        password_hash: data.password_hash,
        verified: data.verified,
    });
}

exports.getByEmail = (email) => {
    return Users.findOne({
        where: {
            email,
        }
    });
}

exports.getByEmails = (emails) => {
    return Users.findAll({
        where: {
            email: emails,
        },
        include: Societies,
    });
}

exports.getById = (uuid) => {
    return Users.findOne({
        where: {
            id: uuid,
        },
        include: Societies,
    });
}

exports.getByIds = (uuids) => {
    return Users.findAll({
        where: {
            id: uuids,
        },
        include: Societies,
    });
}

exports.update = (uuid, data) => {
    return Users.update({
        ...data,
        where: {
            id: uuid,
        }
    })
}
