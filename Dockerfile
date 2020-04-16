FROM node as base_builder
COPY package.json/ /opt/altere_bruder/frontend/package.json
WORKDIR /opt/altere_bruder/frontend/
RUN npm install

FROM base_builder as builder
COPY public/ /opt/altere_bruder/frontend/public
COPY src/ /opt/altere_bruder/frontend/src
COPY craco.config.js/ /opt/altere_bruder/frontend/craco.config.js

WORKDIR /opt/altere_bruder/frontend/
RUN npm run build
RUN ls ./build

FROM httpd
WORKDIR /usr/local/apache2/htdocs/
COPY --from=builder /opt/altere_bruder/frontend/build/ .


