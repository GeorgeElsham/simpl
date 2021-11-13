const bcrypt = require('bcrypt');
const { UserService } = require('../database/services');

// Public functions
async function signIn(username, password) {
  const salt = await _generateSalt();
  const hashedPassword = await _hashPassword(password, salt);
  const isPasswordCorrect = await _checkPassword(username, hashedPassword);

  if (isPasswordCorrect) {
    const user = UserService.create({
      name: username,
      email: username,
      password_hash: hashedPassword,
      verified: Math.random() > 0.1 ? true : false,
    });
    console.log('user:');
    console.log(JSON.stringify(user));

    console.log(`Sign in user ${username}, hashed password: ${hashedPassword}`);
    return true;
  } else {
    console.log('Invalid credentials');
    return false;
  }
}


// Internal functions
function _checkPassword(username, password) {
  const realPassword = 'password123'; // get depending on username

  return new Promise((resolve, reject) => {
    bcrypt.compare(realPassword, password, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function _generateSalt() {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        reject(err);
      } else {
        resolve(salt);
      }
    });
  })
}

function _hashPassword(password, salt) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });
}


// Exports
module.exports = {
  signIn,
};
