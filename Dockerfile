# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages
RUN npm install

# Bundle app source
COPY . .

# Create an empty WEBSITE.txt file so the app doesn't crash on startup
RUN touch WEBSITE.txt

# Your app's startup command
CMD [ "node", "index.js" ]
