sudo docker build -t altere_bruder_frontend ./
sudo docker images
sudo docker stop altere_bruder_frontend || echo 'no container found to stop!'
sudo docker rm altere_bruder_frontend || echo 'no container found to rm!'
sudo docker run -p 80:80 -d --name altere_bruder_frontend altere_bruder_frontend

