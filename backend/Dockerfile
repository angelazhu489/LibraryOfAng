FROM node:22-alpine

WORKDIR /usr/local/app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "app.js"]


# docker run -d \
#   -p 27017:27017 \
#   -e MONGO_INITDB_ROOT_USERNAME=admin \
#   -e MONGO_INITDB_ROOT_PASSWORD=pwd \
#   --net mongo-network \
#   --name mongodb \
#   mongo

# docker run -d \
#   -p 8081:8081 \
#   -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
#   -e ME_CONFIG_MONGODB_ADMINPASSWORD=pwd \
#   -e ME_CONFIG_BASICAUTH_USERNAME=ang \
#   -e ME_CONFIG_BASICAUTH_PASSWORD=pwd \
#   --net mongo-network \
#   --name mongo-express \
#   -e ME_CONFIG_MONGODB_SERVER=mongodb \
#   mongo-express