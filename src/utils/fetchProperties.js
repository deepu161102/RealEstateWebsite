const axios = require("axios");
// const endpoint = "http://localhost:3000/api/graphql";
const dev = process.env.NODE_ENV !== 'production'
const server = dev ? 'http://localhost:3000/api/graphql' : 'https://real-estate-1h5d.vercel.app/api/graphql';
const graphqlQuery = `query Query{
        getProperties{
          price
          description
          beds
          bathroom
          area
          isLiked
          isForSale
          lat
          lng
        }
      }`
  


const fetchProperties = async () => {

    try{
        let resp = await axios({
            url: server,
            method: 'post',
            data: {
              query: graphqlQuery
              
            }
          })
          console.log("resp", resp.data.data.getProperties);
          return resp.data.data.getProperties
    }catch(err){
        console.log(err);

    }
 
};


module.exports = fetchProperties
// console.log(response.data); // data
// console.log(response.errors); // errors if any
