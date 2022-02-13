import { DynamoDB } from "aws-sdk";

const options = {
	region: "localhost",
	endpoint: "http://localhost:8000",
  accessKeyId: 'xxxxxx',
  secretAccessKey: 'xxxxxx',
};

const isOffline = () => {
	return process.env.IS_OFFLINE; //Variável de ambiente setada automaticamente pelo plugin serverless-offline
}

export const document = isOffline()
	? new DynamoDB.DocumentClient(options)
	: new DynamoDB.DocumentClient()