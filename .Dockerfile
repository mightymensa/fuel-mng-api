from node:ubuntu-20.04-nodejs-12.14.1


RUN apt-get update

RUN mkdir /app

RUN git clone

WORKDIR "/app"

CMD ["cd","/app"]
CMD [ "git","clone", "" ]
