module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("Comments", {
        title: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        summary: {
            type: DataTypes.TEXT,
            unique: false,
            allowNull: false
        },
        stance: {
            type: DataTypes.INTEGER,
            unique: false,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false,
            defaultValue: 'posted'
        }
    },{underscored: true});
    return Comment;
};
