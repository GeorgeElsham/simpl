const bcrypt = require('bcrypt');
const { UserService } = require('../database/services');

// Public functions
async function signIn(email, password) {
  const user = await UserService.getByEmail(email);

  if (user) {
    const isPasswordCorrect = await _checkPassword(password, user.password_hash);

    // TODO: set cookies

    return isPasswordCorrect;
  } else {
    return false;
  }
}

async function signUp(name, email, password) {
  if (await UserService.getByEmail(email)) {
    console.error('User is already signed up');
    return;
  }

  const salt = await _generateSalt();
  const hashedPassword = await _hashPassword(password, salt);

  const user = await UserService.create({
    name,
    email,
    password_hash: hashedPassword,
    verified: Math.random() > 0.1,
  });
  console.log('user:');
  console.log(JSON.stringify(user));

  console.log(`Sign in user ${email}, hashed password: ${hashedPassword}`);
}


// Internal functions
async function _checkPassword(password, hashedPassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedPassword, (err, result) => {
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
