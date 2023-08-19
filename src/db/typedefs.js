const { gql } = require("apollo-server");
module.exports =  gql`
type Property {
  price:Float
  description: String
  beds:Int
  bathroom:Int
  area:Float
  isLiked:Boolean
  isForSale:Boolean
  lat:Float
  lng:Float

}
input PropertyInpuit {
  price:Float
  description: String
  beds:Int
  bathroom:Int
  area:Float
  isLiked:Boolean
  isForSale:Boolean
  lat:Float
  lng:Float
  
}
type Query {
  getProperties: [Property]
}
type Mutation {
  createProperty(propertyInput : PropertyInpuit):Property!
}
`


