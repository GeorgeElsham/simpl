# SiMPL Society Management Platform

## About

This is our project for the November 2021 hackathon at the University of Southampton, CommunityHack! We were tasked with creating something to "benefit the community". After the 24 hours, we had a functional product which we presented at the end of the hackathon.

SiMPL is a society management platform. A common issue for university societies is trying to broadcast announcements and events to students - this is often done on multiple platforms, and in separate places. This can make it difficult to track multiple societies. Our project allows easier discover of these events, with chronological timelines and key announcements for each society - in just one place.

## Features

* Login page
  * Authenticate with email & password (password is hashed & salted etc.)
* Home page
  * Announcements
  * All events
  * Your events
* Societies page
  * Your societies
  * All societies
  * Create a society

## Stack

### Front-end

* [vue][10] for UI
* [axios][11] for HTTP requests

### Back-end

* [express][20] for web server
* [pg][21] for Node.js PostgreSQL client
* [bcrypt][22] for hashing passwords
* [sequelize][23] for SQL queries
* [faker][24] for generating fake test data
* [cookie-parser][25] for parsing cookie headers

## Contributors

* Euan Caskie: [@Ortovoxx][30]
* George Elsham: [@GeorgeElsham][31]
* German Nikolishin: [@SkymanOne][32]
* Matej Porubovic: [@mporubovic][33]


[10]: https://www.npmjs.com/package/vue
[11]: https://www.npmjs.com/package/axios

[20]: https://www.npmjs.com/package/express
[21]: https://www.npmjs.com/package/pg
[22]: https://www.npmjs.com/package/bcrypt
[23]: https://www.npmjs.com/package/sequelize
[24]: https://www.npmjs.com/package/faker
[25]: https://www.npmjs.com/package/cookie-parser

[30]: https://github.com/Ortovoxx
[31]: https://github.com/GeorgeElsham
[32]: https://github.com/SkymanOne
[33]: https://github.com/mporubovic
