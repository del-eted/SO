const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

async function queryItems(params){
  
  try {
    const data = await docClient.query(params).promise()
    return data.Items
  } catch (err) {
    return err
  }
}

  exports.handler = async (event, context) => {
    let params = {
    TableName : 'SO_database',
    KeyConditionExpression: "PK = :PK",
    ExpressionAttributeValues: {
      ':PK': event.query
      }
  }
  
  let data = await queryItems(params)
    return data
}