
echo "Creating Docker Image"
docker build -t 'python' - < Dockerfile
docker build -t 'javascript' - < DockerfileReactJS
docker pull davidjeddy/docker_puppeteer_jest
echo "Retrieving Installed Docker Images"
docker images
