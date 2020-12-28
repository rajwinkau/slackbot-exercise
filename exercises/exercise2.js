// Set this assignment to true if you do want to use it.
module.exports.ACTIVATE_BOT = true;

module.exports.botScripts = [
  {
    label: 'kaurchatBot',
    prompt: 'I am tired',
    handler: function () {
      return 'Wake Up!';
    },
    isReply: true,
    isCaseSensitive: false,
    isListening: true,
  },

  // Write an interaction where one user says "I'm tired", the bot says "Wake up!"
  //
  // mychatbot> I'm tired
  // mychatbot responds "Wake up!"
  {
    label: 'An Example Script with Vari',
    prompt: 'What is the area of a circle with radius #{name}',
    handler: function (params) {
      const circleArea = Math.PI * (params.name * params.name);
      return 'The area is ' + circleArea.toFixed(2) + '!';
    },
    isReply: true,
    isCaseSensitive: false,
    isListening: true,
  },

  {
    label: 'An Example Script with Variables',
    prompt: 'Tell me a story with #{name} and #{name1}',
    handler: function (params) {
      return (
        params.name +
        'and' +
        params.name1 +
        'went up the hill to fetch a pail of water'
      );
    },
    isListening: true,
  },

  // Write an interaction where one user asks the bot
  // "What's the area of a circle with radius X?" where X is any number
  // The chatbot will respond to the user with the answer.
  //
  // mychatbot> mychatbot What's the area of a circle with radius 5?
  // mychatbot responds to user "The area is 78.5398...."

  // Write an interaction where one user asks the bot
  // "Tell me a story with NAME1 and NAME2" where NAME1 and NAME2 is any string
  // The chatbot will respond with the answer.
  //
  // mychatbot> mychatbot Tell me a story with Jack and Jill
  // mychatbot responds to user "Jack and Jill went up the hill to fetch a pail of water."
];
