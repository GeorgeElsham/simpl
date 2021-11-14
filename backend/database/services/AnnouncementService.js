const { Announcements } = require('../connection')

exports.getOne = (uuids) => {
    if (uuids.length === 0) {
        return Announcements.findOne({
            where: {
                id: uuids[0]
            }
        });
    }
    else {
        return Announcements.findAll({
            where: {
                id: uuids
            }
        });
    }
}

exports.getBySoc = (uuid) => {
    return Announcements.findAll({
        where: {
            society_id: uuid,
        }
    });
}

exports.create = (data) => {
    return Announcements.create({
        id: data.id,
        society_id: data.society_id,
        event_id: data.event_id,
        description: data.description,
        user: data.user,
    });
}

exports.getAll = () => {
    return Announcements.findAll();
}