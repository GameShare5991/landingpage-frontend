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
