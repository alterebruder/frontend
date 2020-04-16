sudo docker build -t altere_bruder_frontend ./
sudo docker images
sudo docker network create altere_bruder_network || echo 'Network already exists!'
sudo docker stop altere-bruder.frontend || echo 'no container found to stop!'
sudo docker rm altere-bruder.frontend || echo 'no container found to rm!'
sudo docker run -p 80:80 --network altere_bruder_network -d --name altere-bruder.frontend altere_bruder_frontend

