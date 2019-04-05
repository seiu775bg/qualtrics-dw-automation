FROM node:9-slim
EXPOSE 9229
WORKDIR /usr/src/app
COPY . .
CMD ["node", "--inspect-brk", "src/worker.js"]
# CMD ["npm", "start"]
