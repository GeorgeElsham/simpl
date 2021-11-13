module.exports = (sequelize, DataTypes) => {
    return sequelize.define('society', {
        /**
         * Basics
         */
        guild_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            unique: true,
        },
        ownerid: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        premium: {
            type: DataTypes.STRING,
            defaultValue: '0',
            allowNull: false,
        },
        channels: {
            type: DataTypes.STRING,
            defaultValue: 'all',
            allowNull: false,
        },
        prefix: {
            type: DataTypes.STRING,
            defaultValue: ';',
            allowNull: false,
        },
        colour: {
            type: DataTypes.STRING,
            defaultValue: '#d14a1d',
            allowNull: false,
        },
        currency: {
            type: DataTypes.STRING,
            defaultValue: 'GBP',
            allowNull: false,
        },
        locale: {
            type: DataTypes.STRING,
            defaultValue: 'en',
            allowNull: false,
        },
        commandlocking: {
            type: DataTypes.TEXT,
            defaultValue: 'Global',
            allowNull: false,
        },


        // Wipes
        ongoingalerts: {
            type: DataTypes.TEXT,
            defaultValue: '[]',
            allowNull: false,
        },

        // Client updates
        clientupdaterole: {
            type: DataTypes.STRING,
            defaultValue: '0',
            allowNull: false,
        },
        clientupdatechannel: {
            type: DataTypes.STRING,
            defaultValue: '0',
            allowNull: false,
        },

        // Server updates
        serverupdaterole: {
            type: DataTypes.STRING,
            defaultValue: '0',
            allowNull: false,
        },
        serverupdatechannel: {
            type: DataTypes.STRING,
            defaultValue: '0',
            allowNull: false,
        },

        // Oxide updates
        oxideupdaterole: {
            type: DataTypes.STRING,
            defaultValue: '0',
            allowNull: false,
        },
        oxideupdatechannel: {
            type: DataTypes.STRING,
            defaultValue: '0',
            allowNull: false,
        },

        // New skins
        skinupdaterole: {
            type: DataTypes.STRING,
            defaultValue: '0',
            allowNull: false,
        },
        skinupdatechannel: {
            type: DataTypes.STRING,
            defaultValue: '0',
            allowNull: false,
        },
        skinautosend: {
            type: DataTypes.STRING,
            defaultValue: '0',
            allowNull: false,
        },

        // Blog updates
        facepunchblogupdaterole: {
            type: DataTypes.STRING,
            defaultValue: '0',
            allowNull: false,
        },
        facepunchblogupdatechannel: {
            type: DataTypes.STRING,
            defaultValue: '0',
            allowNull: false,
        },
        
        // Rustafied updates
        rustafiedblogupdaterole: {
            type: DataTypes.STRING,
            defaultValue: '0',
            allowNull: false,
        },
        rustafiedblogupdatechannel: {
            type: DataTypes.STRING,
            defaultValue: '0',
            allowNull: false,
        },

        // Hackers
        banfeedchannel: {
            type: DataTypes.STRING,
            defaultValue: '0',
            allowNull: false,
        },
        banfeedmode: {
            type: DataTypes.TEXT,
            defaultValue: '0',
            allowNull: false,
        },
        hackerwatchlist: {
            type: DataTypes.TEXT,
            defaultValue: '{}',
            allowNull: false,
        },
        hackerwatchchannel: {
            type: DataTypes.STRING,
            defaultValue: '0',
            allowNull: false,
        },
        hackerwatchrole: {
            type: DataTypes.STRING,
            defaultValue: '0',
            allowNull: false,
        },

        // Commits
        commitchannel: {
            type: DataTypes.TEXT,
            defaultValue: '0',
            allowNull: false,
        },
        commitalert: {
            type: DataTypes.STRING,
            defaultValue: '0',
            allowNull: false,
        },

        // Twitch drops
        twitchdropsrole: {
            type: DataTypes.STRING,
            defaultValue: '0',
            allowNull: false,
        },
        twitchdropschannel: {
            type: DataTypes.STRING,
            defaultValue: '0',
            allowNull: false,
        },
        twitchdropsalerts: {
            type: DataTypes.TEXT,
            defaultValue: '{}',
            allowNull: false,
        },
    
        /**
         * Rust plus
         */
        rustserver: {
            type: DataTypes.TEXT,
            defaultValue: '{}',
            allowNull: false,
        },
        upkeepdata: {
            type: DataTypes.TEXT,
            defaultValue: '[]',
            allowNull: false,
        },
    
        /**
         * Other
         */
        locations: {
            type: DataTypes.TEXT,
            defaultValue: '[]',
            allowNull: false,
        },
        referred: {
            type: DataTypes.STRING,
            defaultValue: 'None',
            allowNull: false,
        },
        roles: {
            type: DataTypes.TEXT,
            defaultValue: '[]',
            allowNull: false,
        },
    });
};