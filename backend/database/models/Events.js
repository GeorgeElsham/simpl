module.exports = (sequelize, DataTypes) => {
    return sequelize.define('events', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            unique: true,
        },
        society_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING(256),
        },
        description: {
            type: DataTypes.TEXT,
        },
        location: {
            type: DataTypes.TEXT,
        },
        user: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        start_date: {
            type: DataTypes.DATE,
        },
    }, {
        freezeTableName: true,
        underscored: true,
    });
};