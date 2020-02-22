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
