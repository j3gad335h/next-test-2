# Use an official Node.js runtime as the base image
FROM node:18.17.1

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json, yarn.lock, and .yarnrc to the working directory
COPY package.json yarn.lock .yarnrc ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN yarn build

# Expose the desired port (default for Next.js is 3000)
EXPOSE 3000

# Define the command to run your Next.js application
CMD ["yarn", "start"]
