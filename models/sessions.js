// Table's intention it to hold "Login/Active-History" for Accounts?
// May need to add a user-id field or exclude until furhter developement

module.exports = (sequelize, DataTypes) => {
    const Session = sequelize.define("Sessions", {
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        }
    },{underscored: true});
    return Session;
};
