'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {}

  Listing.init({
    
    user_id: {
        type: DataTypes.INTEGER
    },
    price: {
      type: DataTypes.DOUBLE
      },
    image: {
        type: DataTypes.STRING
        },
    description: {
      type: DataTypes.TEXT
        },
    address: {
      type: DataTypes.STRING
        },
    longitude: {
      type: DataTypes.DOUBLE
        },
    latitude: {
      type: DataTypes.DOUBLE  
            }
  }, {
    sequelize,
    modelName: 'listing'
  });
// // associations 
//   Listing.associate = (models) => {
//     Listing.belongsTo(models.User);
//   };
  
  return Listing;
};
