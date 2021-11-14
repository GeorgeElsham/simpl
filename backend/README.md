# SiMPL Society Management Platform

TODO Description

## How to use

1.  Run `npm start` - In production

2.  Run `npm run dev` - In development ( nodemon )

3.  Run `npm run dev:sync` - In development ( resets database )

## Flags

`--debug` Shows debug level logs

`--sync` Syncs the database

`--forcesync` Hard syncs the database ( deletes all data and rebuilds it )

`--seed` Adds test data to the database

### Documentation

✔️ GET   / - Home

✔️ GET   /api/auth/protected - Test route for seeing if it is protected or not
✔️ POST  /api/auth/sign-in - Signs in
✔️ POST  /api/auth/sign-up - Signs up
✔️ POST  /api/auth/sign-out - Signs out
❌ PATCH /api/auth/edit - Edit user data

❌ GET   /api/societies - Get all societies for a specific user
❌ GET   /api/societies/:soc/ - Info about soc ( only if that user is in it )
❌ POST  /api/societies/:soc/join - Join that society
❌ POST  /api/societies/:soc/leave - Leave that society
❌ GET   /api/societies/:soc/members - All members of soc
❌ GET   /api/societies/:soc/events - Fetch all events
✔️ POST  /api/societies/:soc/events/create - Create an event ( has to be owner )
❌ POST  /api/societies/:soc/events/join - That user joins that event
✔️ GET   /api/societies/:soc/announcements - Fetch all announcements
✔️ POST  /api/societies/:soc/announcements/create - Creates an announcement ( has to be owner )