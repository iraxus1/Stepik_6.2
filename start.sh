cd client
docker build . -f Dockerfile -t client
cd ../server
docker build . -f Dockerfile -t server
cd ..
docker run -d -p 3000:3000 --name client client
docker run -d -p 9000:9000 --name server server