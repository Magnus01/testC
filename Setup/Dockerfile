##############################################################################################
# Purpose   : Dockerize Components of a simple data science stack (CPU version).
# Python    : 2.7
# Version   : 0.1
# Author    : Magnus Lysfjord
##############################################################################################
#
# This docker file will setup an environment with only a basic data science stack.
# This is used for some music related machine learning work. It inlcudes a full python,
# install, along with the scipy stack and tensor flow (CPU version).
#
# See the container maintained by Rob Lyon (robert.lyon@manchester.ac.uk), from which I
# created this dockerfile:
#
# https://github.com/ContinuumIO/docker-images/blob/master/anaconda/Dockerfile
##############################################################################################

# Use well supported Ubuntu distribution.
FROM ubuntu:16.04

# Contact me for help!
MAINTAINER robert.lyon@manchester.ac.uk

# The WORKDIR instruction sets the working directory for any RUN, CMD, ENTRYPOINT,
# COPY and ADD instructions that follow it in the Dockerfile. If the WORKDIR doesn’t
# exist, it will be created even if it’s not used in any subsequent Dockerfile instruction.
WORKDIR /home

#####################################################################
# Make required directories
#####################################################################

# Now create some diectories to store files and scripts
RUN mkdir soft
RUN mkdir soft/samples
RUN mkdir soft/samples/libROSA
RUN mkdir soft/samples/TensorFlow
RUN mkdir workspace

#####################################################################
# Install System tools needed
#####################################################################

RUN apt-get update \
  && apt-get install -y build-essential \
  wget \
  unzip \
  bzip2 \
  software-properties-common \
  python-setuptools

# # Music libraries
# RUN apt-get install -y libasound-dev \
#    portaudio19-dev \
#    libportaudio2 \
#    libportaudiocpp0 \
#    ffmpeg \
#    libav-tools \
#    libavcodec-extra

#####################################################################
# Install Anaconda (python 2.7 version)
#####################################################################

# Change to the soft (aka software directory).
WORKDIR /home/soft

# Now install Anaconda to manage the python environment. This installs numpy, scipy, matplotlib,
# jupyter etc. Type conda list inside the built docker container, to view the python modules already
# installed.
RUN wget https://repo.continuum.io/archive/Anaconda2-4.2.0-Linux-x86_64.sh
RUN bash Anaconda2-4.2.0-Linux-x86_64.sh -b -p /home/soft/anaconda
RUN rm Anaconda2-4.2.0-Linux-x86_64.sh
ENV PATH /home/soft/anaconda/bin:$PATH

#####################################################################
# Update Anaconda (extra data science tools)
#####################################################################

# Python packages from conda. Here libgcc is needed to run XGBoost,
# whilst GCC is needed for neural network based tools.
RUN conda install -y \
    gcc \
    libgcc \
    ephem \
    astropy \
    pip \
    pandas \
    pillow \
    numba \
    mkl \
    theano \
    pygpu \
    seaborn \
    opencv

# Music tools
RUN conda config --append channels conda-forge
RUN conda config --append channels mutirri
RUN conda config --append channels auto



# Some machine learning tools
RUN conda update scikit-learn



#####################################################################
# Finally...
#####################################################################
RUN echo "backend : Agg" > /home/soft/anaconda/lib/python2.7/site-packages/matplotlib/mpl-data/matplotlibrc
#RUN MPLBACKEND=Agg python -c "import matplotlib.pyplot"
# Ensure the OS is updated.
RUN apt-get update

# Define the command that will be exectuted when docker runs the container.
#WORKDIR /home
#ENTRYPOINT /bin/bash