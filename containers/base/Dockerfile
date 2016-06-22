
############################################################
# Wave Base Image
# Base: https://github.com/phusion/baseimage-docker
# Author: Graham Robertson
############################################################


########################################
# BASE SYSTEM:
FROM phusion/baseimage:0.9.18
RUN apt-get update

ADD ./build_files /tmp/build_files

# our application's code will be mapped here:
RUN mkdir -p /usr/local/wave
WORKDIR /usr/local/wave
ENTRYPOINT /usr/local/wave/bin/entrypoint

########################################


########################################
RUN /tmp/build_files/node-install

RUN npm install -g typescript
RUN npm install -g typings
RUN npm install -g nodemon
RUN typings install dt~node --global

EXPOSE 48484

RUN apt-get install -y python
RUN /tmp/build_files/zmq-install /tmp/build_files

########################################


########################################
# EXTRAS:
RUN apt-get -y install toilet lolcat
RUN ln -s /usr/games/lolcat /usr/bin/lolcat

########################################


########################################
# CLEAN-UP:
#RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

########################################
