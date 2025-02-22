import { 
  Context,
  APIGatewayProxyResult,
  APIGatewayEvent
} from 'aws-lambda';

/**
 * Sample pure Lambda function
 * 
 * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {APIGatewayEvent} event API Gateway Lambda Proxy Input Format
 * 
 * @see https://docs.aws.amazon.com/lambda/latest/dg/python-context-object.html
 * @param {Context} context Lambda Context runtime methods and attributes
 * 
 * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Promise<APIGatewayProxyResult>} API Gateway Lambda Proxy Output
 */
export const handler = (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
  return Promise.resolve(
    {
      statusCode: 200,
      body: JSON.stringify({
        message: 'hello world',
      }),
    }
  )
};
