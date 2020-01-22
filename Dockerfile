FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copies the yarn.lock file to the container
# COPY yarn.lock /usr/src/app/
# Copies the package.json to the container
# COPY package*.json /usr/src/app/

COPY . /usr/src/app/
# COPY /public /usr/src/app/
# COPY server.js /usr/src/app/

# Install dependencies
RUN yarn install
RUN yarn build
# RUN yarn build

COPY . /usr/src/app/
# COPY /build /usr/src/app/


EXPOSE 3000
CMD [ "node", "server.js" ]