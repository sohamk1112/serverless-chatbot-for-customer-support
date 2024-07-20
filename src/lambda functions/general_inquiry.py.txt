import json

def lambda_handler(event, context):
    inquiry = event['currentIntent']['slots']['Inquiry']
    # Logic to handle general inquiries
    response_message = handle_inquiry(inquiry)
    response = {
        "dialogAction": {
            "type": "Close",
            "fulfillmentState": "Fulfilled",
            "message": {
                "contentType": "PlainText",
                "content": response_message
            }
        }
    }
    return response

def handle_inquiry(inquiry):
    # Mock function to simulate backend interaction
    if inquiry.lower() == "operating hours":
        return "Our operating hours are 9 AM to 5 PM, Monday to Friday."
    elif inquiry.lower() == "location":
        return "We are located at 123 Main Street, Anytown, USA."
    elif inquiry.lower() == "contact":
        return "You can contact us at support@example.com or call us at (123) 456-7890."
    elif inquiry.lower() == "services":
        return "We offer a variety of services including product support, consultation, and training."
    else:
        return "I'm sorry, I don't have information on that inquiry."
