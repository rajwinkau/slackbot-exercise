// Set this assignment to false if you do not want to use it.
module.exports.ACTIVATE_BOT = true

module.exports.botScripts = [
  {
    label: "An Example Script",
    prompt: "Good Evening",
    handler: function () {
      return "Good Evening to You!"
    },
    isReply: false,
    isCaseSensitive: false,
    isListening: false
  },
  {
    label: "An Example Script with Variables",
    prompt: "Say hello to #{name}",
    handler: function (params) {
      return 'Hello ' + params.name + '!'
    },
    isListening: true
  },
  {
    label: "An Example Script with Typed Variables",
    prompt: "Give twice $#{amount as number} to #{name}",
    handler: function (params) {
      const doubledAmount = 2 * params.amount;
      return 'I want to give $' + doubledAmount.toFixed(2) + ' to ' + params.name + '!'
    },
  }
]
