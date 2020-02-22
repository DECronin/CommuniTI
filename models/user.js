
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("Users", {
        last_name: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
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
            allowNull: false
        }
    },{underscored: true});
    return User;
};
