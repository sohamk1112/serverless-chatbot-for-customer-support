# Creating AWS Lambda Functions

## Step 1: Create a Lambda Function
1. Open the AWS Management Console.
2. Navigate to AWS Lambda.
3. Click "Create function".
4. Choose "Author from scratch".
5. Define the function name and execution role.
6. Click "Create function".

## Step 2: Write Lambda Code
1. In the Lambda console, write the code for the function.
2. Example code for checking order status (`check_order_status.py`):
    ```python
    import json

    def lambda_handler(event, context):
        order_number = event['currentIntent']['slots']['OrderNumber']
        # Logic to retrieve order status from backend system
        order_status = get_order_status(order_number)
        response = {
            "dialogAction": {
                "type": "Close",
                "fulfillmentState": "Fulfilled",
                "message": {
                    "contentType": "PlainText",
                    "content": f"Your order status is {order_status}."
                }
            }
        }
        return response

    def get_order_status(order_number):
        # Mock function to simulate backend interaction
        return "shipped"
    ```

## Step 3: Connect Lambda with Lex
1. In the Lex console, go to the "Fulfillment" section of the intent.
2. Choose "AWS Lambda function" and select the function created.
3. Click "Save Intent".
