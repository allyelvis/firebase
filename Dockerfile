# Backend service setup
FROM node:16
WORKDIR /app
COPY ./backend .
RUN npm install
CMD ["node", "server.js"]
