module.exports = (sequelize, DataTypes) => {
    const Thread = sequelize.define("Threads", {
        title: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        stance: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        summary: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        }
    },{underscored: true});
    return Thread;
};
