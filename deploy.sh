#build images
docker build -t bartek26/multi-client:latest -t bartek26/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t bartek26/multi-server:latest -t bartek26/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t bartek26/multi-worker:latest -t bartek26/multi-worker:$SHA -f ./worker/Dockerfile ./worker

# push images to docker hub
docker push bartek26/multi-client:latest
docker push bartek26/multi-server:latest
docker push bartek26/multi-worker:latest

docker push bartek26/multi-client:$SHA
docker push bartek26/multi-server:$SHA
docker push bartek26/multi-worker:$SHA

# apply config files
kubectl apply -f k8s

# set latest images using imperative commands (object type/name of deployment, container_name use image_name)
kubectl set image deployments/server-deployment server=bartek26/multi-server:$SHA
kubectl set image deployments/client-deployment client=bartek26/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=bartek26/multi-worker:$SHA
