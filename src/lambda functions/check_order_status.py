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
