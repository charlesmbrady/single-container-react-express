FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy all the files into the container
COPY . /usr/src/app/

# Install dependencies
RUN yarn install

# Build the frontend inside the container
RUN yarn build

# recopy everything to include the new build
# COPY . /usr/src/app/


EXPOSE 3000
CMD [ "node", "server.js" ]