# pull the official base image
FROM node:alpine
# set working direction
WORKDIR /Marvel_React
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
# add app
COPY ./ ./
# expose port 3000
EXPOSE 3000
# start app
CMD ["npm", "start"]
