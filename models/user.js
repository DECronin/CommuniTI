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
            unique: true,
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
        phone: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true,
            validate: {
                len: [9,11],
                isNumeric: true
            }
        },
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

//  Pulled from Dan's Example? // eslint-disable-next-line no-unused-vars
//   User.associate = function(models) {
//     User.hasMany(models.Address, { foreignKey: 'userId' })
//     User.hasMany(models.ChangeRequest, { foreignKey: 'userId' })
//     User.hasOne(models.PractitionerSearchList, { foreignKey: 'userId' })
//     User.belongsToMany(models.Enrollments, { through: 'UserEnrollments', foreignKey: 'userId' })
//     User.hasMany(models.Token, { foreignKey: 'userId' })
//     User.hasMany(models.Certificate, { foreignKey: 'userId' })
//   }
    return User;
};
