module.exports = (sequelize, DataTypes) => {
    const Topic = sequelize.define("Topics", {
        title: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        }
    });
    return Topic;
};
