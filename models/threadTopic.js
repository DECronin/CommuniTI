module.exports = (sequelize, DataTypes) => {
    const ThreadTopic = sequelize.define("threadTopics", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    },{underscored: true});
    return ThreadTopic;
};
