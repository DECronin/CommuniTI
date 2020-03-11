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
        }, 
        thread_id: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        }, 
        username: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        user_id: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        }
    },{underscored: true});
    return Comment;
};
