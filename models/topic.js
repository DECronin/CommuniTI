module.exports = (sequelize, DataTypes) => {
    const Topic = sequelize.define("Topics", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        }
    },{underscored: true});
    return Topic;
};
