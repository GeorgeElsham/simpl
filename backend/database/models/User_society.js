const { roles } = require("./enums");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user_society', {
        user_id: {
            type: DataTypes.UUID,
            unique: true,
            allowNull: false,
        },
        society_id: {
            type: DataTypes.UUID,
            unique: true,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM(roles),
            defaultValue: 'member',
            allowNull: false,
        },
    }, { 
        freezeTableName: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
};