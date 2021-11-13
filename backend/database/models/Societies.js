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
            type: DataTypes.ENUM(
                "sports",
                "academic",
                "misc"
            ),
            defaultValue: "misc",
            allowNull: false,
        },
        color: {
            type: DataTypes.INTEGER(6),
            defaultValue: 0,
            allowNull: false,
        },
    });
};