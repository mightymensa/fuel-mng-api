# Use the official Node.js image as the base image
FROM node:16

# Set a working directory inside the container
WORKDIR /app

# Install git to clone the repository
RUN apt-get update && apt-get install -y git

# Clone the Adonis Git repository (replace 'YOUR_GIT_REPO_URL' with the actual repository URL)
RUN git clone https://github.com/mightymensa/fuel-mng-api.git .

# Install dependencies
RUN npm install

# Expose the port used by Adonis (if Adonis uses a different port, change it accordingly)
EXPOSE 3333

# Start the Adonis application
CMD ["node", "ace", "serve", "--watch"]
