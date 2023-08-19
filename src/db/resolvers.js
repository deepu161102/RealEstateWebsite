const Property = require('./models/Property')

module.exports = {
  Query: {
    getProperties: async() => {
          
          let properties= await Property.find().limit(10)
          console.log(properties);
          return properties
      }
  },
  Mutation:{
      async createProperty(_, {propertInput:{price, description, beds, bathroom, area, isLiked, isForSale, lat, lng}}){
          const createProperty = new Property({
            price:price,
            description:description,
            beds:beds,
            bathroom:bathroom,
            area:area,
            isLiked:isLiked,
            isForSale:isForSale,
            lat:lat,
            lng:lng

          })
    
    
          const res = await createProperty.save()
          return {
            id:res.id,
            ...res._doc
          }
        }
  }
};