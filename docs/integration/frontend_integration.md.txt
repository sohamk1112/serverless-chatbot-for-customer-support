# Front-End Integration

## Step 1: Set Up Front-End Framework
1. Create a basic HTML file (e.g., `index.html`).
2. Include a JavaScript file to handle chatbot interactions (e.g., `chatbot.js`).

## Step 2: Integrate AWS SDK
1. Include the AWS SDK in your HTML file:
    ```html
    <script src="https://sdk.amazonaws.com/js/aws-sdk-2.7.16.min.js"></script>
    ```

## Step 3: Implement Chatbot Interface
1. Create a simple chat interface in `index.html`.
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Chatbot</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div id="chat-container">
            <div id="chat-box"></div>
            <input type="text" id="user-input" placeholder="Type your message here...">
            <button id="send-button">Send</button>
        </div>
        <script src="chatbot.js"></script>
    </body>
    </html>
    ```

2. Add some basic styles in `styles.css`:
    ```css
    #chat-container {
        width: 400px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
    }

    #chat-box {
        height: 300px;
        overflow-y: scroll;
        border: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
    }

    #user-input {
        width: calc(100% - 60px);
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    #send-button {
        width: 50px;
        padding: 10px;
        border: none;
        background-color: #007bff;
        color: white;
        border-radius: 5px;
    }
    ```

## Step 4: Implement Chatbot Logic in JavaScript
1. Implement the chatbot logic in `chatbot.js`:
    ```javascript
    // Configure AWS SDK
    AWS.config.region = 'us-east-1'; // Update to your region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:example-pool-id', // Update to your Cognito Identity Pool ID
    });

    const lexruntime = new AWS.LexRuntime();

    document.getElementById('send-button').addEventListener('click', function() {
        const userInput = document.getElementById('user-input').value;
        if (userInput.trim() === '') return;

        appendMessage('user', userInput);
        document.getElementById('user-input').value = '';

        const params = {
            botAlias: '$LATEST',
            botName: 'YourBotName', // Update to your Lex bot name
            inputText: userInput,
            userId: 'user', // Use a unique identifier for the user
        };

        lexruntime.postText(params, function(err, data) {
            if (err) {
                console.error(err);
                appendMessage('bot', 'Error: ' + err.message);
            } else {
                appendMessage('bot', data.message);
            }
        });
    });

    function appendMessage(sender, message) {
        const chatBox = document.getElementById('chat-box');
        const messageDiv = document.createElement('div');
        messageDiv.className = sender;
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
    ```

## Step 5: Test the Front-End
1. Open `index.html` in a web browser.
2. Test sending messages and verify that the chatbot responds correctly.
3. Ensure the integration with AWS Lex, Lambda, and API Gateway works as expected.
