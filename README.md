# RPI-Image-Uploader

This project is part of a larger project, Spy-On-Fido, which streams media from a remote location to a NodeJS server. Check out that repo [here](https://github.com/DominicSerranoC14/Backend-Capstone) for that part of the project.

The RPI-Image-Uploader is an Express server running on a Raspberry Pi. The Raspberry Pi is connected to the Raspberry Pi Camera Module, which can be triggered from a user facing AngularJS interface.

When the capture image or record video command is received from the user interface, the Raspberry Pi captures the requested media and streams the locally written image or video file to the main NodeJS server which encodes the received media, and then saves the image / video reference in a database to display to users.


### Hardware used

  - [Raspberry Pi 2B](https://www.raspberrypi.org/products/raspberry-pi-2-model-b/), credit card sized micro computer
  - [Raspberry Pi Camera Module V1, 5-megapixels](https://www.raspberrypi.org/documentation/hardware/camera/README.md)


### Technologies used
  - NodeJS v6.7.0
  - Express v4.14
  - Request NPM module 2.76.0



###### Picture take with Camera Module, hosted on AWS S3 hosting service
![alt](https://s3.us-east-2.amazonaws.com/spyonfido/image111.jpg)  
