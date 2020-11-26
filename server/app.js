const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();

//build middle ware to get a endpoint
app.use('/graphql', graphHTTP({

}))

app.listen(4000, () => {
  console.log ('listening port 4000')
})