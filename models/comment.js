module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("Comments", {
        title: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        summary: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        stance: {
            type: DataTypes.INTEGER,
            unique: false,
            allowNull: false
        }
    },{underscored: true});
    return Comment;
};
