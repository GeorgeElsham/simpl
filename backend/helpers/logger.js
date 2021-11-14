const winston = require('winston');
require('dotenv').config();
const { createLogger, format, transports } = winston;
const { NODE_ENV } = require('../config');

const myCustomLevels = {
    levels: {
        crit: 0, // This should only be logged if there is a bug and something unexpected happened
        error: 1, // Something went wrong but it was expected
        warn: 2, // Something went wrong but it was anticipated and happens often
        alert: 3, // Something you should look at
        success: 4, // Something good happened
        info: 5, // Something happened from user action
        notice: 6, // The application is starting or something core is happeneing
        sys: 7, // Stuff resulting from user action or programmatic events
        debug: 8, // Lots of random things logged here for later debugging
    },
    colors: {
        crit: 'bgRed bold italic white',
        error: 'red',
        warn: 'yellow bold',
        alert: 'magenta',
        success: 'brightGreen bold',
        info: 'green',
        notice: 'white bold',
        sys: 'cyan',
        debug: 'grey dim',
    },
};

winston.addColors(myCustomLevels.colors);

const makeSingleLine = format(info => {
    info.message = info.message
        .split('\n').join(' ') // Removes all newlines
        .split(' ').filter(a => a).join(' ') // Removes all large spaces e.g. this   will       become => this will become

    return info;
});

const handleErrors = format(info => {
    if (info.message == 'Unhandled promise rejection' || info.reason instanceof TypeError || info.reason instanceof Error) {
        info.error = {
            message: info.reason.message,
            name: info.reason.name,
            fileName: info.reason.fileName,
            lineNumber: info.reason.lineNumber,
            columnNumber: info.reason.columnNumber,
            stack: info.reason.stack,
        }
    }
    return info;
});


const logger = createLogger({
    levels: myCustomLevels.levels,
    level: 'debug',
    exitOnError: false,
    format: format.combine(
        format.json(),
        handleErrors(),
        makeSingleLine(),
        format.timestamp({
            format: 'YYYY MMM DD HH:mm:ss.SSS', // https://github.com/taylorhakes/fecha#formatting-tokens
        }),
        format.printf(sys => `${sys.timestamp} ${sys.level}: ${sys.message}`),
    ),
});

// Development log transports
if (NODE_ENV == 'development') {
    logger.add(new transports.Console({
        level: process.argv.includes('--debug') || process.argv.includes('-d') ? 'debug' : 'sys', // Only logs debug if --debug flag is found
        format: format.combine(
            format.colorize(),
            format.printf(
                sys => `${sys.timestamp} ${sys.level}: ${sys.message}`,
            ),
        ),
    }));
}

// Production log transports
if (NODE_ENV == 'production') {
    logger.add(new transports.Console({
        format: format.combine(
            format.colorize(),
            format.printf(sys => `${sys.timestamp} ${sys.level}: ${sys.message}`),
        ),
    }));
}

module.exports = { logger };

// Example logs

// logger.debug('a = 0', { ddtags: 'test' })
// logger.log('sys', 'Hello simple log!');
// logger.info('testing!')
// logger.warn('Hello log with metas', { test: 'ing' });
// logger.alert('alerting')
// logger.success('YAY!')
// logger.notice('starting up!')
// logger.error(' OH NO!')
// logger.crit('Oppsies')