// /**
//  * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
//  */
// exports.handler = async (event, context) => {
//   // insert code to be executed by your lambda trigger
//   return event;
// };


// import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
// import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { PutCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

exports.handler = async (event, context) => {
    let date = new Date()
    if (event.request.userAttributes.sub) {
        let command = new PutCommand({
            Item: {
                'id': event.request.userAttributes.sub,
                '__typename': 'User',
                'username': event.userName,
                'email': event.request.userAttributes.email,
                'createdAt': date.toISOString(),
                'updatedAt': date.toISOString(),
            },
            TableName: process.env.USERTABLE
        })

        try {
            const response = await docClient.send(command)
            console.log("Success");
            console.log(response);
        } catch (err) {
            console.log("Error", err)
        }

        console.log("Success: Everything executed correctly")
        context.done(null, event)

    } else {
        console.log("Error: Nothing was written to DynamoDB")
        context.done(null, event)
    }
};