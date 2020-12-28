// Set this assignment to true if you do want to use it.
module.exports.ACTIVATE_BOT = true;

module.exports.botScripts = [
  {
    label: 'kaurChatBot',
    prompt: 'Hello my chat #{name}',
    handler: function () {
      return ('I HEARD YOU!'+
      'SO YOU ARE TALKING TO ME'+
      'CONTINUE, I’M LISTENING'+
      'VERY INTERESTING CONVERSATION'+
      'TELL ME MORE...')
      ;},
      isReply: true,
    isCaseSensitive: false,
    isListening: true,
  },
  {
    label: 'kaurChatBot',
    prompt: 'Hello my chat #{name}',
    handler: function (params) {
      return ('Hello ' + params.name)
      ;},
      isReply: true,
    isCaseSensitive: false,
    isListening: true,
  },
  {
    label: 'kaurChatBot',
    prompt: 'What is #{amount as number} + 10',
    handler: function (params) {
      a= params.amount
    ////////  b=param1.num2
      total = a + 10
      return ('It is' + (total))
      ;},
      isReply: true,
    isCaseSensitive: false,
    isListening: true,
  },

  {
    label: 'kaurChatBot',
    prompt: 'Hello laptop #{name} is not working',
    handler: function (params) {
      
      return ('Hi ' + params.name + ' go to url wwww.google.com')
      ;},
      isReply: true,
    isCaseSensitive: false,
    isListening: true,
  },
  {
    label: 'kaurChatBot',
    prompt: 'Is #{amount as number} even or odd?',
    handler: function (params) {
      remainder = params.amount% 2 
      if (remainder == 0 ){return 'even'}
      else {return 'odd'}
      ;},
      isReply: true,
    isCaseSensitive: false,
    isListening: true,
  },

  {
    label: 'kaurChatBot',
    prompt: 'Give me three items to reverse: #{param1}, #{param2}, #{param3}',
    handler: function (params) {
      arr = [params.param1, params.param2, params.param3]
      return arr.reverse()
      ;},
      isReply: true,
    isCaseSensitive: false,
    isListening: true,
  },
  {
    label: 'kaurChatBot',
    prompt: 'Is #{amount} even or odd or string?',
    handler: function (params) {
      remainder = params.amount% 2 
      if (remainder == 0 ){return 'even'}
      else if (remainder != 0){return 'string'}
      else {return 'odd'}
      ;},
      isReply: true,
    isCaseSensitive: false,
    isListening: true,
  },

];

