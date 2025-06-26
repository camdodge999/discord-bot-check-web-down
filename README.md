# Discord Website Down Checker Bot

This Discord bot monitors a list of websites and sends notifications to a specified Discord channel if any of them go down or come back online.

## Features

-   **Website Monitoring:** Continuously checks the availability of websites listed in `WEBSITE.txt`.
-   **Discord Notifications:** Sends messages to a designated Discord channel when a website's status changes (goes down or comes back up).
-   **Configurable:** Easily set up with your Discord bot token and channel ID.

## Prerequisites

Before you begin, ensure you have the following:

-   **Node.js:** Make sure you have Node.js installed (version 16 or higher is recommended).
-   **Discord Bot Token:** A Discord bot token from the Discord Developer Portal. You'll need to enable the `Message Content Intent` for your bot.
-   **Discord Channel ID:** The ID of the Discord channel where you want the bot to send notifications.

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/discord-bot-check-web-down.git
    cd discord-bot-check-web-down
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## Configuration

1.  **Create a `.env` file:**

    Create a file named `.env` in the root directory of the project. This file will store your sensitive information.

    ```
    DISCORD_TOKEN=YOUR_DISCORD_BOT_TOKEN
    CHANNEL_ID=YOUR_DISCORD_CHANNEL_ID
    ```

    Replace `YOUR_DISCORD_BOT_TOKEN` with your actual Discord bot token and `YOUR_DISCORD_CHANNEL_ID` with the ID of your desired Discord channel.

2.  **Populate `WEBSITE.txt`:**

    Open the `WEBSITE.txt` file and add the URLs of the websites you want to monitor, one URL per line.

    Example `WEBSITE.txt`:

    ```
    https://example.com
    https://another-website.org
    https://my-blog.net
    ```

## Usage

To start the bot, run the following command in your terminal from the project's root directory:

```bash
npm start
```

The bot will then connect to Discord and begin monitoring the websites listed in `WEBSITE.txt`.