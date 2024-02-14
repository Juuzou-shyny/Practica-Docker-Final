# Use an official Node runtime as a parent image
FROM node:19-alpine

# Set the working directory in the container
WORKDIR /app

# Assuming your Dockerfile is one level above the mi-app-react folder,
# adjust the COPY commands to reflect the path to mi-app-react
# Copy package.json and package-lock.json to the working directory
COPY mi-app-react/package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining application code to the working directory
# This assumes all of your React app's code is within mi-app-react
COPY mi-app-react/ .

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
