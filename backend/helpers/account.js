const bcrypt = require('bcrypt');

// Public functions
async function signIn(username, password) {
  const salt = await _generateSalt();
  const hashedPassword = await _hashPassword(password, salt);
  const isPasswordCorrect = await _checkPassword(username, hashedPassword);

  if (isPasswordCorrect) {
    console.log(`Sign in user ${username}, hashed password: ${hashedPassword}`);
  } else {
    console.log('Invalid credentials');
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
