const { society_categories } = require("./enums");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('societies', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            unique: true,
        },
        name: {
            type: DataTypes.STRING(256),
        },
        description: {
            type: DataTypes.TEXT,
        },
        profile_picture: {
            type: DataTypes.BLOB,
        },
        category: {
            type: DataTypes.ENUM(society_categories),
            defaultValue: "misc",
            allowNull: false,
        },
        color: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        underscored: true,
    });
};