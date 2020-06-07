# Specify base image.
FROM node:alpine

# Specify wworking directory.
WORKDIR /usr/app

# Copy dependency file to container file system.
COPY ./package.json ./

# Install dependencies inside the container.
RUN npm install

# Copy other files inside the container.
COPY ./src ./

# Specify the startup command.
CMD [ "npm", "start" ]