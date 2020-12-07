// Description:
//   Example scripts for you to examine and try out.
//
// Notes:
//   They are commented out by default, because most of them are pretty silly and
//   wouldn't be useful and amusing enough for day to day huboting.
//   Uncomment the ones you want to try and experiment with.
//
//   These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md
const exercise1 = require("../exercises/exercise1");
const exercise2 = require("../exercises/exercise2");
const exercise3 = require("../exercises/exercise3");

const paramExp = /#\{\s*.*?\s*\}/ig
const paramMatch = /#\{\s*(.*?)\s*\}/ig

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function translatePrompt(prompt, isCaseSensitive) {
  const mainStrings = prompt.split(paramExp)
  const flags = isCaseSensitive ? "g" : "gi"
  return new RegExp(mainStrings.map(escapeRegExp).join("(.*)"), flags)
}

function getParams(userPrompt, templatePrompt) {
  userPrompt = userPrompt.trim()
  templatePrompt = templatePrompt.trim()

  const mainStrings = templatePrompt.split(paramExp)
  const matches = templatePrompt.match(paramMatch)
  if (!matches) {
    return {}
  }

  const firstPlaceholder = userPrompt.indexOf(mainStrings[0])
  let promptPlaceholder = userPrompt.substring(firstPlaceholder + mainStrings[0].length)
  const params = {}
  for (let i = 0; i < matches.length; i++) {
    const arg = matches[i].substring(2, matches[i].length - 1)
    const argMatches = arg.split(" as ").map(s => s.trim())
    let paramName = arg
    const nextPlacholder = promptPlaceholder.indexOf(mainStrings[i + 1])
    const paramValue = nextPlacholder > 0 ? promptPlaceholder.substring(0, nextPlacholder) : promptPlaceholder
    let paramType = 'string'
    if (argMatches.length > 1) {
      paramName = argMatches[0]
      paramType = argMatches[1]
    }

    if (paramType === "boolean") {
      if (paramValue === "true") {
        params[paramName] = true
      } else if (paramValue === "false") {
        params[paramName] = false
      } else {
        params[paramName] = Boolean(paramValue)
      }
    } else if (paramType === "number") {
      if (paramValue.indexOf(".") < 0) {
        params[paramName] = Number.parseInt(paramValue, 10)
      } else {
        params[paramName] = Number.parseFloat(paramValue)
      }
    } else if (paramType === "string") {
      params[paramName] = paramValue
    } else {
      throw new Error(`Invalid data type: ${paramType} in "${matches[i]}"`)
    }

    promptPlaceholder = promptPlaceholder.substring(nextPlacholder + mainStrings[i + 1].length)
  }

  return params
}


function processExerciseObject(robot, scripts) {
  for (messageObj of scripts) {
    const { label, handler, prompt, isReply, isListening, isCaseSensitive } = messageObj
    const command = isListening ? "hear" : "respond"
    if (prompt instanceof RegExp) {
      robot[command(prompt, handler)]
      continue
    }

    const regExp = translatePrompt(prompt, isCaseSensitive)
    robot[command](regExp, (res) => {
      const userPrompt = res.match[0]
      try {
        const params = getParams(userPrompt, prompt)
        const response = handler(params)

        if (isReply) {
          res.reply(response)
        } else {
          res.send(response)
        }
      } catch (e) {
        throw new Error(`There was an error in the script "${label}".\n\n${e}`)
      }
    })
  }
}

module.exports = (robot) => {
  if (exercise1.ACTIVATE_BOT) {
    processExerciseObject(robot, exercise1.botScripts)
  }

  if (exercise2.ACTIVATE_BOT) {
    processExerciseObject(robot, exercise2.botScripts)
  }

  if (exercise3.ACTIVATE_BOT) {
    processExerciseObject(robot, exercise3.botScripts)
  }
}
