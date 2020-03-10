module.exports = (sequelize, DataTypes) => {
    const Resource = sequelize.define("Resources", {
        title: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        stance: { // 5pt pro to con
            type: DataTypes.STRING,
            unique: false,
            allowNull: false,
            defaultValue: "3"
        },
        additional: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true
        },
        url: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false,
            validation: {
                isUrl: true
            }
        },
        publisher: {
            type: DataTypes.STRING,
            unique: false,
            // allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            unique: false,
            // allowNull: false
        },
        source: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            defaultValue: 'DB-Model Error'
        },
        status: { // recognised, commented, pending, problematic
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            defaultValue: 'pending'
        }
    },{underscored: true});
    return Resource;
};
