module.exports = function(sequelize, dataTypes) {
    let alias = "Movie";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoincrement: true
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        awards: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            default: 0
        },
        length: {
            type: dataTypes.INTEGER(10).UNSIGNED
        },
        genre_id: {
            type: dataTypes.INTEGER(10).UNSIGNED
        }
    };
    let config = {
        timestamps: true,
        underscored: true
    }

    let Movie = sequelize.define(alias, cols, config);

    Movie.associate = function(models) {
        Movie.belongsTo(models.Genre, {
            as: "genre",
            foreignKey: "genre_id"
        })
    }

    return Movie;
}