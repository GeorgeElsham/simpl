module.exports = (sequelize, DataTypes) => {
    return sequelize.define('announcements', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            unique: true,
        },
        society_id: {
            type: DataTypes.UUID,
        },
        event_id: {
            type: DataTypes.UUID,
        },
        description: {
            type: DataTypes.TEXT,
        },
        user: {
            type: DataTypes.UUID,
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        underscored: true,
    });
};