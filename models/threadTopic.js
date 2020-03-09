module.exports = (sequelize, DataTypes) => {
    const ThreadTopic = sequelize.define("ThreadTopics", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        topic_id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'testing'
        },
        thread_id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'testing'
        }
    },{underscored: true});
    return ThreadTopic;
};
