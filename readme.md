# Botarium

A simple starter kit for building bots using Node + TypeScript + BotKit.

### How to run

1. `npm install` to install all required tools.
2. `npm run init` to initialize project. 
3. `npm run serve` to start the server.
4. `npm run debug` to start the debugger (using blink devtools in Chrome) - navigate to `http://127.0.0.1:8080/?port=5858` and set breakpoints in files under `src` directory to debug TypeScript sources.

### Other run scripts

1. `npm run tsc:watch` to auto-compile the source .ts files in `src` directory.

### Environment variables

This project uses [dotenv](https://github.com/motdotla/dotenv) to set custom environment variables. Simply add an `.env` file and put your variables there.

In order to implement a Slack Bot for example you need to provide a token for BotKit. To do this, you can simply create an `.env` file and
add a `BOT_TOKEN` variable. This variable is defined in [.env.template](.env.template) file.

### Examples

There is currently one example showing how to implement a simple bot for Slack - [slack-ping-pong-bot](examples/slack-ping-pong-bot)

Other examples for BotKit are available at [BotKit's GitHub examples folder](https://github.com/howdyai/botkit/tree/master/examples).


