# Unit Testing

## Step 1: Set Up Testing Framework
1. Choose a testing framework (e.g., Jest for JavaScript, PyTest for Python).
2. Install the necessary packages for your testing framework.

## Step 2: Write Unit Tests for Lambda Functions
1. Create test files for each Lambda function.
2. Example test for `check_order_status.py` using PyTest:
    ```python
    import check_order_status

    def test_get_order_status():
        order_number = '12345'
        result = check_order_status.get_order_status(order_number)
        assert result == 'shipped'

    def test_lambda_handler():
        event = {
            'currentIntent': {
                'slots': {
                    'OrderNumber': '12345'
                }
            }
        }
        result = check_order_status.lambda_handler(event, None)
        expected_response = {
            "dialogAction": {
                "type": "Close",
                "fulfillmentState": "Fulfilled",
                "message": {
                    "contentType": "PlainText",
                    "content": "Your order status is shipped."
                }
            }
        }
        assert result == expected_response
    ```

## Step 3: Run Unit Tests
1. Run the tests using your chosen testing framework.
2. Ensure all tests pass before proceeding to integration testing.
