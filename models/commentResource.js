module.exports = (sequelize, DataTypes) => {
    const CommentResource = sequelize.define("CommentResources", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        comment_id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'testing'
        },
        resource_id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'testing'
        }
    },{underscored: true});
    return CommentResource;
};
