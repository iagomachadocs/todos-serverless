import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "@libs/dynamodbClient";
import { v4 as uuidV4 } from "uuid";

interface ICreateTodo {
  id: string;
  userId: string;
  title: string;
  done: boolean;
  deadline: string;
}

export const handler: APIGatewayProxyHandler = async (event) => {

  const { title, deadline } = JSON.parse(event.body);
  const { userId } = event.pathParameters;

  const todo: ICreateTodo = {
    id: uuidV4(),
    userId,
    title,
    deadline: new Date(deadline).toISOString(),
    done: false
  }

  await document.put({
    TableName: "todos",
    Item: todo
  }).promise()

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Todo created successfully."
    })
  }
}