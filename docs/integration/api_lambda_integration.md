# Integrating API Gateway with Lambda

## Step 1: Create API Gateway Resource
1. In the API Gateway console, create a new resource (e.g., `/chatbot`).
2. Add a POST method to the resource.

## Step 2: Set Up Lambda Integration
1. In the method setup, choose "Lambda Function" as the integration type.
2. Enter the Lambda function name and save.

## Step 3: Test the Integration
1. Use a tool like Postman to send a POST request to the API Gateway endpoint.
2. Verify that the Lambda function is invoked and returns the correct response.
