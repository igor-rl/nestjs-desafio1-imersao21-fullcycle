# Dockerfile

FROM node:20.16.0-alpine3.19

RUN apk --no-cache add redis
RUN touch /home/node/.bashrc | echo "PS1='\w\$ '" >> /home/node/.bashrc
RUN npm config set cache /home/node/app/.npm-cache --global

USER node
WORKDIR /home/node/app

# Copiar todos os arquivos e diretórios, incluindo o .docker
COPY ../ /home/node/app/

# Comando para manter o contêiner ativo, pode ser alterado depois
CMD [ "sh", "/home/node/app/.docker/start.sh" ]
