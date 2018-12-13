
echo "Creating Docker Image"
docker build -t 'python' - < Dockerfile
docker build -t 'javascript' - < DockerfileReactJS
docker pull oleg-rdk/puppeteer-jest
echo "Retrieving Installed Docker Images"
docker images
