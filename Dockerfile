$ nano Dockerfile

 

FROM node:11.4.0-alpine

 

RUN cd /

RUN git clone https://github.com/4relial/Megumi-Bot

RUN cd Megumi-Bot

WORKDIR /Megumi-Bot

RUN npm install

RUN npm start
