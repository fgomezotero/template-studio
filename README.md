# Accord Project Template Studio in Openshift

A simple Web-based editor for Accord Project templates.

<img src="https://raw.githubusercontent.com/accordproject/template-studio/master/studio.png" width="350">

To execute Accord Template Studio in Redhat Openshift Container Platform it is necessary to use the following image:
```
docker pull fgomezotero/accord-studio:openshift.0.1
```
It is published in https://hub.docker.com and it is important not to forget to add a PATH_SERVER environment variable with the full name of the route you are going to create to access the application.

I hope this helps you!
