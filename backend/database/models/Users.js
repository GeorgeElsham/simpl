module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            unique: true,
        },
        name: {
            type: DataTypes.STRING(256),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(256),
            unique: true,
            allowNull: false,
        },
        profile_picture: {
            type: DataTypes.BLOB,
        },
        password_hash: {
            type: DataTypes.STRING(32),
            allowNull: false,
        },
        password_salt: {
            type: DataTypes.BLOB,
            allowNull: false,
        },
        verified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
    }, { 
        freezeTableName: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
};