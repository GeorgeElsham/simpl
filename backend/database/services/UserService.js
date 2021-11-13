const { Users } = require('../connection');
const { v4: uuidv4 } = require('uuid');

exports.getById = (uuids) => {
    if (uuids.length === 0) {
        return Users.findOne({
            where: {
                id: uuids[0]
            }
        });
    }
    else {
        return Users.findAll({
            where: {
                id: uuids
            }
        });
    }
}

exports.create = (data) => {
    return Users.create({
        id: uuidv4(),
        name: data.name,
        email: data.email,
        profile_picture: data.profile_picture,
        password_hash: data.password_hash,
        password_salt: data.password_salt,
        verified: data.verified,
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