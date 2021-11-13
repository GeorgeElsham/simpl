module.exports = (sequelize, DataTypes) => {
    return sequelize.define('societies', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            unique: true,
        },
        name: {
            type: DataTypes.VARCHAR(256),
            defaultValue: 'Unnamed',
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            defaultValue: 'Empty',
            allowNull: false,
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