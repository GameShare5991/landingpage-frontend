localhost:3009
```
dockerbuild -t landingpage .

docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3009:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    landingpage


```

# build docker
npm run build
docker build . -t jackjackzhou/landingpage-frontend

# push image:
docker push jackjackzhou/landingpage-frontend

# kubectl create&run
minikube start
kubectl create -f landingpage-frontend-deployment.yaml
minikube tunnel
minikube dashboard

# clean up
kubectl delete -f landingpage-frontend-deployment.yaml