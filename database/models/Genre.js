module.exports = function(sequelize, dataTypes) {
    let alias = "Genre";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        ranking: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            unique: true
        },
        active: {
            type: dataTypes.INTEGER(1),
            allowNull: false
        }
    }

    let config = {
        tableName: "genres",
        timestamps: true,
        underscored: true // Solo a los timestamps
    }

    let Genre = sequelize.define(alias, cols, config);

    return Genre;
}