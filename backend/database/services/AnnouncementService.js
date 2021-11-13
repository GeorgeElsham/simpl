const { Announcements } = require('../connection')

exports.get = (uuid) => {
    Announcements.findOne(uuid);
}

exports.create = (data) => {
    Announcements.create(data);
}