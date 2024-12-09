FROM node

WORKDIR /myapp

COPY . .

RUN npm install --legacy-peer-deps

EXPOSE 3000

CMD ["npm", "run", "dev"]
