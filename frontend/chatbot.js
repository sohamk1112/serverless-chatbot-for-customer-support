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
