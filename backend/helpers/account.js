const bcrypt = require('bcrypt');
const { UserService } = require('../database/services');

// Public functions
async function signIn(email, password) {
  //
}

async function signUp(name, email, password) {
  const salt = await _generateSalt();
  const hashedPassword = await _hashPassword(password, salt);
  const isPasswordCorrect = await _checkPassword(username, hashedPassword);

  if (isPasswordCorrect) {
    const user = await UserService.create({
      name,
      email,
      password_hash: hashedPassword,
      verified: Math.random() > 0.1 ? true : false,
    });
    console.log('user:');
    console.log(JSON.stringify(user));

    console.log(`Sign in user ${email}, hashed password: ${hashedPassword}`);
    return true;
  } else {
    console.log('Invalid credentials');
    return false;
  }
}


// Internal functions
function _checkPassword(email, password) {
  const realPassword = 'password123'; // get depending on email

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
  signUp,
};
