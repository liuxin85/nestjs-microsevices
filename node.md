
npm install @nestjs/microservices

docker run --name redis -p 6379:6379 -d redis

docker ps

docker exec -it redis redis-cli

### In bash 127.0.0.1:6370>

127.0.0.1:6370> PING

SET mykey "hello redis"

GET mykey