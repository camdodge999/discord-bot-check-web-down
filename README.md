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

### Running Locally

To start the bot locally, run the following command in your terminal from the project's root directory:

```bash
npm start
```

### Running with Docker

You can also run the bot using Docker, which provides a consistent environment regardless of your local setup.

1.  **Build the Docker image:**

    ```bash
    docker build -t discord-website-checker .
    ```

2.  **Run the container:**

    ```bash
    docker run -d --name website-checker \
      -e DISCORD_TOKEN=YOUR_DISCORD_BOT_TOKEN \
      -e CHANNEL_ID=YOUR_DISCORD_CHANNEL_ID \
      -v $(pwd)/WEBSITE.txt:/usr/src/app/WEBSITE.txt \
      discord-website-checker
    ```

    **Note:** Replace `YOUR_DISCORD_BOT_TOKEN` and `YOUR_DISCORD_CHANNEL_ID` with your actual values.

3.  **Alternative: Using docker-compose (recommended):**

    Create a `docker-compose.yml` file in the project root:

    ```yaml
    version: '3.8'
    services:
      discord-bot:
        build: .
        environment:
          - DISCORD_TOKEN=${DISCORD_TOKEN}
          - CHANNEL_ID=${CHANNEL_ID}
        volumes:
          - ./WEBSITE.txt:/usr/src/app/WEBSITE.txt
        restart: unless-stopped
    ```

    Then run:

    ```bash
    docker-compose up -d
    ```

4.  **Managing the Docker container:**

    - **View logs:** `docker logs website-checker`
    - **Stop the container:** `docker stop website-checker`
    - **Remove the container:** `docker rm website-checker`

The bot will then connect to Discord and begin monitoring the websites listed in `WEBSITE.txt`.