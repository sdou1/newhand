
module.exports = (sequelize, DataTypes) => {
    var Song = sequelize.define('Song', {
        title: DataTypes.STRING,
        artist: DataTypes.STRING,
        description: DataTypes.STRING
    })
    return Song
}