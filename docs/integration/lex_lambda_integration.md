# Integrating AWS Lex with Lambda

## Step 1: Configure Lex to Call Lambda
1. In the Lex console, open the intent that needs backend interaction.
2. Go to the "Fulfillment" section.
3. Choose "AWS Lambda function" and select the Lambda function.

## Step 2: Modify Lambda to Handle Lex Requests
1. Ensure the Lambda function parses the Lex event format.
2. Example code snippet:
    ```python
    def lambda_handler(event, context):
        intent_name = event['currentIntent']['name']
        if intent_name == 'CheckOrderStatus':
            return handle_check_order_status(event)
    ```

## Step 3: Test the Integration
1. Use the Lex console to test the intent.
2. Ensure the Lambda function is invoked and returns the correct response.
