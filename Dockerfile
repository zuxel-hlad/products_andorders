# Use the base image with the right environment
FROM node:14

# Install application dependencies
COPY package*.json ./
RUN npm install

# Copying the application code
COPY . .

# Set the port on which the application will run
EXPOSE 3000

# The command to be executed when the container is started
CMD ["npm", "start"]