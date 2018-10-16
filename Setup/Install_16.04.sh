#!/bin/sh


chmod 777 UpdateDocker.sh

systemctl restart docker
./UpdateDocker.sh
