const bcrypt = require('bcrypt');
const { UserService } = require('../database/services');

// Public functions
async function signIn(email, password) {
  const user = await UserService.getByEmail(email);

  if (user) {
    const isPasswordCorrect = await _checkPassword(password, user.password_hash);
    if (isPasswordCorrect) {
      return user;
    }
    else {
      return false;
    }
  } else {
    return false;
  }
}

async function signUp(name, email, password) {
  if (await UserService.getByEmail(email)) {
    return false;
  }

  const salt = await _generateSalt();
  const hashedPassword = await _hashPassword(password, salt);

  const user = await UserService.create({
    name,
    email,
    password_hash: hashedPassword,
    verified: Math.random() > 0.1,
  });

  return user;
}

function editUser(usedId, data) {
  UserService.update(usedId, data);
}


// Internal functions
function _checkPassword(password, hashedPassword) {
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
  editUser,
};
