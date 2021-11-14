const { v4 } = require('uuid');
const { Societies } = require('../connection')

exports.getById = (uuids) => {
    if (uuids.length === 1) {
        return Societies.findOne({
            where: {
                id: uuids[0]
            },
        });
    }
    else {
        return Societies.findAll({
            where: {
                id: uuids
            },
        });
    }
}

exports.getAll = () => {
    return Societies.findAll();
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

exports.addUser = (users, society) => {
    //assume user(s) and society exists
    if (users.length === 1) {
        society.addUser(users[0])
    } else {
        society.addUsers(users)
    }
}