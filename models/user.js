const bcrypt = require('bcryptjs');
const saltRounds = 3;

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("Users", {
        last_name: {
            type: DataTypes.STRING,
            unique: false,
            // allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            unique: false,
            // allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            // unique: true,
            // allowNull: false,
            // validate: {
            //     isEmail: true
            // }
        },
        password: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        // phone: {
        //     type: DataTypes.STRING,
        //     unique: false
        //     // unique: true,
        //     // allowNull: true,
        //     // validate: {
        //     //     len: [9,11],
        //     //     isNumeric: true
        //     // }
        // },
        accountStatus: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false,
            defaultValue: 'pending'
        }
    },{underscored: true});

    
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
  }

  function hashPasswordIfChanged(user) {
    if (user.changed('password')) {
      return bcrypt.hash(user.get('password'), bcrypt.genSaltSync(saltRounds)).then(hashedPw => {
        user.password = hashedPw
      })
    }
    return 0
  }

  // This shoudl trigger if individualHooks set to true on Update or Create
  User.beforeSave(hashPasswordIfChanged)

  return User;
};
