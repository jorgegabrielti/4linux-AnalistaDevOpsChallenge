FROM node:18 as installer
COPY . /coffee-shop
WORKDIR /coffee-shop
RUN npm i -g typescript ts-node
RUN npm install --silent --progress=false
RUN rm -rf frontend/node_modules
RUN rm -rf frontend/.angular
RUN rm -rf frontend/src/assets
RUN rm data/chatbot/botDefaultTrainingData.json || true
RUN rm ftp/legal.md || true
RUN rm i18n/*.json || true

FROM gcr.io/distroless/nodejs:18
LABEL authors="Thaynara Mendes and Samuel Gonçalves"
WORKDIR /coffee-shop
COPY --from=installer  /coffee-shop .
EXPOSE 3000
CMD ["/coffee-shop/build/app.js"]