# Configuring API Gateway

## Step 1: Create an API
1. Open the AWS Management Console.
2. Navigate to API Gateway.
3. Click "Create API".
4. Choose "REST API" and click "Build".

## Step 2: Define Resources and Methods
1. Create a new resource (e.g., `/chatbot`).
2. Add a method (e.g., POST) to the resource.

## Step 3: Integrate with Lambda
1. In the method setup, choose "Lambda Function" as the integration type.
2. Select the region and enter the Lambda function name.
3. Click "Save".

## Step 4: Deploy the API
1. Click on "Deploy API".
2. Create a new deployment stage (e.g., `prod`).
3. Note the invoke URL for the API.
