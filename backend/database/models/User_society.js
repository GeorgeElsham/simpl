module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user_society', {
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        society_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM(
                "member",
                "admin",
                "owner"
            ),
            defaultValue: 'member',
            allowNull: false,
        },
    });
};