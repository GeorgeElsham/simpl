const { Users, Societies } = require('../connection');
const { v4 } = require('uuid');

exports.getByEmail = (email) => {
    return Users.findOne({
        where: {
            email,
        }
    });
}

exports.getById = (uuids) => {
    if (uuids.length === 1) {
        return Users.findOne({
            where: {
                id: uuids[0]
            },
            include: Societies,
        });
    }
    else {
        return Users.findAll({
            where: {
                id: uuids
            },
            include: Societies,
        });
    }
}

exports.getByEmail = (emails) => {
    if (emails.length === 1) {
        return Users.findOne({
            where: {
                email: emails[0]
            },
            include: Societies,
        });
    }
    else {
        return Users.findAll({
            where: {
                email: emails
            },
            include: Societies,
        });
    }
}

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

exports.update = (uuid, data) => {
    return Users.update({
        ...data,
        where: {
            id: uuid,
        }
    })
}