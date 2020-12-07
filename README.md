# Slackbot Lab

## Objectives

The goal of this lab is to implement a chat bot demonstrating the skills you
have acquired thus far. Specifically this lab will exercise the following
skills:

- Translating a problem into computer-understandable format
- Choosing thoughtful data types to represent the kinds of information you wish to use
- Implementing coding using functions, objects, arrays, and other data types.

## Getting Started

Building a chatbot technically requires more than the skills above, but luckily,
there is software that makes our work _much_ easier. To get started, we need to
install all of the relevant software called packages that we need (we call
the packages you need to run your own software, _dependencies_).

We assume you have forked and cloned this repository. Open up your terminal and
navigate to this project directory.

```
$ cd PATH/TO/slackbot-exercise
```

You are welcome to view the dependencies of this project. They can be found in
the `package.json`.

```
$ cat package.json
```

Let's install these dependencies! In project folder, run the following command.

```
$ npm install
```

We've used `npm` very briefly in the past, but `npm` comes from `node` for
**N**ode **P**ackage **M**anager. It's responsible for installing those
dependencies. Each dependency can also be called a package.

Assuming a no errors pop on your screen, npm installed the packages correctly.
If you list the files in your project directory (using `ls`), you will notice
a folder called `node_modules`. Npm installed the packages here.

> **Tip:** We do not commit the packages in `node_modules` to git. Fortunately,
> you do not need to worry because we added the folder to `.gitignore` to avoid
> adding those files accidentally.

Once everything is installed, you can start working in the code.

```
$ code .
```

## Running your chat locally

You can start your chatbot locally by running in your terminal (in your project
directory):

```
$ bin/hubot --name mychatbot
```

The name will be helpful in naming your chatbot as you like it.

You'll see some start up output and a prompt:

```
[Sat Feb 28 2015 12:38:27 GMT+0000 (GMT)] INFO Using default redis on localhost:6379
mychatbot>
```

Then you can interact with slackbot-exercise by typing `slackbot-exercise help`.

```
mychatbot> mychatbot help
mychatbot animate me <query> - The same thing as `image me`, except adds [snip]
mychatbot help - Displays all of the help commands that slackbot-exercise knows about.
...
```

## Lab Directions

In this lab, we will walk you through two examples of usage in implementing
this bot. Afterward, you will begin to design and implement a simple chat bot
using your own creativity!

### Exercise 1 - Tutorial

Open up `exercises/exercise1.js` in your code editor. Inside you will see three
example functions and get the opportunity to play with it.

I custom wrote this "specification" to make things easier. Each exercise exports
the following:

- `ACTIVATE_BOT` - a boolean. If set to true, the Chatbot interface will include the provided scripts.
- `botScripts` - an array. This contains all of the bot scripts.

Each bot script is an object containing the following keys:

- `label` - A name for you to identify this message object (a string)
- `prompt` - The message that "prompts" the bot to respond (a string)
- `handler` - A function that tells the bot what to do. It returns the response (a string)
- `isReply` - OPTIONAL, A boolean that when set to `true` will respond specifically to the user (defaults to false)
- `isCaseSensitive - OPTIONAL, A boolean that when set to `true` will only respond to the specific prompt regardless of capitalization (defaults to false)
- `isListening` - OPTIONAL, A boolean that when set to `true` will respond if the message is said without mentioning the bot's name (defaults to false).

Exercise 1 shows three examples showcasing different prompts and usage of the handler.

1. Uses a basic prompt and response.
2. Uses "placeholders" in the prompt string. Anything with "#{label}" will be exposed in the params object sent to the handler under that label. TIP: I recommend using camelCase for these variables.
3. Uses multiple placeholders in the prompt string. By default, all placeholders are strings, but you can qualify the placeholder as either a number or a boolean as well. The chatbot interface parses it for you.

Play with these in the chatbot!

### Exercise 2 - Tutorial

Given what you understood above, try to write your own bot script in `exercises/exercise2.js`.
The questions here are meant to help you practice building your own scripts from scratch.

### Exercise 3 - Use your Imagination

You've now played with some code, and wrote your own basic scripts. Now it's time to use your
creativity and build a full-fledged bot! Give it a personality and give it a task to do.

1. Aim for 7 - 10 interactions. The more, the merrier.
2. Utilize different interaction schemes (listening, replying, placeholders)

### Lab

Now, let's take the training wheels off and let you explore your imagination.
Hopefully, this is the fun part of the lab! The goal is to build the chat bot
to do whatever you like.

As in writing, many people struggle with [Blank Screen Syndrome](https://heidicohen.com/overcome-blank-blog-post-syndrome/). That is, struggling to move from an empty
screen to a thought provoking piece of code.

My biggest piece of advice, take some time to create a plan and try different ideas!

#### The Plan

Take a look at a [great cheat sheet for chat bots](https://chatbotsmagazine.com/the-ultimate-cheat-sheet-for-building-the-best-chatbot-2e7ab821d3a3).

To summarize, it recommends the following:

1. Start Small
2. Think about your bot's _personality_ (smart, sassy, grumpy, sleepy)
3. Don't try to make it "appear human". Give it human-like qualities but keep it a bot.
4. Have a short and concise greeting message to inform the user what it does.
5. Offer sample or a comprehensive options (keep the list small to avoid too many decisions)
6. Personalize the experience where possible.
7. Direct the user to the next action avoiding the need to have them guess what to do.
8. Offer multiple types of responses. Perhaps based on their response or based on `Math.random()`

In the end, the goal of this exercise is to implement something to demonstrate
what you have learned thus far. Do not worry if you feel your bot feels "boring"
or "basic". Take pride because _you built it yourself_.

## Advanced

<details>
  <summary>This project was built on top of [Hubot](http://hubot.github.com). You can interact directly by adding
  scripts to the `scripts` folder.</summary>

### Configuration

A few scripts (including some installed by default) require environment
variables to be set as a simple form of configuration.

Each script should have a commented header which contains a "Configuration"
section that explains which values it requires to be placed in which variable.
When you have lots of scripts installed this process can be quite labour
intensive. The following shell command can be used as a stop gap until an
easier way to do this has been implemented.

    grep -o 'hubot-[a-z0-9_-]\+' external-scripts.json | \
      xargs -n1 -I {} sh -c 'sed -n "/^# Configuration/,/^#$/ s/^/{} /p" \
          $(find node_modules/{}/ -name "*.coffee")' | \
        awk -F '#' '{ printf "%-25s %s\n", $1, $2 }'

How to set environment variables will be specific to your operating system.
Rather than recreate the various methods and best practices in achieving this,
it's suggested that you search for a dedicated guide focused on your OS.

### external-scripts

There will inevitably be functionality that everyone will want. Instead of
writing it yourself, you can use existing plugins.

Hubot is able to load plugins from third-party `npm` packages. This is the
recommended way to add functionality to your hubot. You can get a list of
available hubot plugins on [npmjs.com][npmjs] or by using `npm search`:

    % npm search hubot-scripts panda
    NAME             DESCRIPTION                        AUTHOR DATE       VERSION KEYWORDS
    hubot-pandapanda a hubot script for panda responses =missu 2014-11-30 0.9.2   hubot hubot-scripts panda
    ...

To use a package, check the package's documentation, but in general it is:

1. Use `npm install --save` to add the package to `package.json` and install it
2. Add the package name to `external-scripts.json` as a double quoted string

You can review `external-scripts.json` to see what is included by default.

### Super Advanced Usage

It is also possible to define `external-scripts.json` as an object to
explicitly specify which scripts from a package should be included. The example
below, for example, will only activate two of the six available scripts inside
the `hubot-fun` plugin, but all four of those in `hubot-auto-deploy`.

```json
{
  "hubot-fun": ["crazy", "thanks"],
  "hubot-auto-deploy": "*"
}
```

**Be aware that not all plugins support this usage and will typically fallback
to including all scripts.**

[npmjs]: https://www.npmjs.com

### hubot-scripts

Before hubot plugin packages were adopted, most plugins were held in the
[hubot-scripts][hubot-scripts] package. Some of these plugins have yet to be
migrated to their own packages. They can still be used but the setup is a bit
different.

To enable scripts from the hubot-scripts package, add the script name with
extension as a double quoted string to the `hubot-scripts.json` file in this
repo.

[hubot-scripts]: https://github.com/github/hubot-scripts

If you are going to use the `hubot-redis-brain` package (strongly suggested),
you will need to add the Redis to Go addon on Heroku which requires a verified
account or you can create an account at [Redis to Go][redistogo] and manually
set the `REDISTOGO_URL` variable.

    % heroku config:add REDISTOGO_URL="..."

If you don't need any persistence feel free to remove the `hubot-redis-brain`
from `external-scripts.json` and you don't need to worry about redis at all.

[redistogo]: https://redistogo.com/

</details>

## Deployment

<details>
  <summary>Deployment is unnecessary for this exercise, but if you like, you can
  read the following instructions to run it out.</summary>

```
$ heroku create --stack cedar
$ git push heroku master
```

If your Heroku account has been verified you can run the following to enable
and add the Redis to Go addon to your app.

```
$ heroku addons:add redistogo:nano
```

If you run into any problems, checkout Heroku's [docs][heroku-node-docs].

You'll need to edit the `Procfile` to set the name of your hubot.

More detailed documentation can be found on the [deploying hubot onto
Heroku][deploy-heroku] wiki page.

### Restart the bot

You may want to get comfortable with `heroku logs` and `heroku restart` if
you're having issues.

</details>

## Prepare for submission.

This README is intended to help get you started. Definitely update and improve
to talk about your own instance, how to use and deploy, what functionality is
available, etc!

### Under the Hood

If you are interested in learning more about how this chat bot lab was built.
This chat bot built on the [Hubot][hubot] framework. It was
initially generated by [generator-hubot][generator-hubot], and configured to be
deployed on [Heroku][heroku] to get you up and running as quick as possible.

[heroku]: http://www.heroku.com
[hubot]: http://hubot.github.com
[generator-hubot]: https://github.com/github/generator-hubot

> Some plugins will not behave as expected unless the
> [environment variables](#configuration) they rely upon have been set.
