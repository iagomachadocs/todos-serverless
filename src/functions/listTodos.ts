import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "../libs/dynamodbClient";

export const handler: APIGatewayProxyHandler = async (event) => {
  const { userId } = event.pathParameters;

  const { Items: todos } = await document.query({
    TableName: "todos",
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId" : userId
    }
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(todos)
  }
}