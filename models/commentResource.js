module.exports = (sequelize, DataTypes) => {
    const CommentResource = sequelize.define("CommentResources", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    },{underscored: true});
    return CommentResource;
};
