// Set this assignment to true if you do want to use it.
module.exports.ACTIVATE_BOT = false;

module.exports.botScripts = [
  {
    label: 'An Example Script',
    prompt: 'Good Evening',
    handler: function () {
      return 'Good Evening to You!';
    },
  },
];
