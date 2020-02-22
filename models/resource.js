module.exports = (sequelize, DataTypes) => {
    const Resource = sequelize.define("Resources", {
        title: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        category: {
            type: DataTypes.String,
            unique: false,
            allowNull: false
        },
        stance: { // 5pt pro to con
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        additional: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true
        },
        // reliability: {
        //     type: DataTypes.INTEGER,
        //     unique: false,
        //     allowNull: false
        // },
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
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        status: { // recognised, commented, pending, problematic
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        }
    },{underscored: true});
    return Resource;
};
