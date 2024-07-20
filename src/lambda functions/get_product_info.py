import json

def lambda_handler(event, context):
    product_name = event['currentIntent']['slots']['ProductName']
    # Logic to retrieve product information from backend system
    product_info = get_product_info(product_name)
    response = {
        "dialogAction": {
            "type": "Close",
            "fulfillmentState": "Fulfilled",
            "message": {
                "contentType": "PlainText",
                "content": f"Information about {product_name}: {product_info}"
            }
        }
    }
    return response

def get_product_info(product_name):
    # Mock function to simulate backend interaction
    return "This is a great product with many features."
