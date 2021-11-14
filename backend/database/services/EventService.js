const { Events } = require('../connection')

exports.get = (uuids) => {
    if (uuids.length === 0) {
        return Events.findOne({
            where: {
                id: uuids[0]
            }
        });
    }
    else {
        return Events.findAll({
            where: {
                id: uuids
            }
        });
    }
}

exports.getBySoc = (uuid) => {
    return Events.findAll({
        where: {
            society_id: uuid,
        }
    });
}

exports.create = (data) => {
    return Events.create({
        id: data.id,
        society_id: data.society_id,
        title: data.title,
        description: data.description,
        location: data.location,
        user: data.user,
        start_date: data.start_date,
    });
}

exports.getAll = () => {
    return Events.findAll();
}