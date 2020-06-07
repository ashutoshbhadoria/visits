# visits

A node app to demonstrate using multiple local containers with docker-compose.

The application uses two local containers

- `node-app`: To serve the clients (web-browsers) the number of time the site is visited.
- `redis-server`: An in-memory data structure store to store the value of number of visits to the site.

After navigating to the directory where the `docker-compose.yml` is stored use the following docker commands,

1. **Building and Running the containers**

```txt
ashutoshbhadoria@ashutosh-Lenovo-Legion-Y540:~/Documents/docker/visits$ docker-compose up --build
```

Output

```txt
Creating network "visits_default" with the default driver
Building node-app
Step 1/6 : FROM node:alpine
 ---> 3bf5a7d41d77
Step 2/6 : WORKDIR /usr/app
 ---> Using cache
 ---> 544e91f15488
Step 3/6 : COPY ./package.json ./
 ---> Using cache
 ---> c94f54a58c03
Step 4/6 : RUN npm install
 ---> Using cache
 ---> 135bd49c3c75
Step 5/6 : COPY ./ ./
 ---> db9b862c0f3a
Step 6/6 : CMD [ "npm", "start" ]
 ---> Running in 4adb70b8bc6d
Removing intermediate container 4adb70b8bc6d
 ---> b340b64018f0
Successfully built b340b64018f0
Successfully tagged visits_node-app:latest
Creating visits_node-app_1     ... done
Creating visits_redis-server_1 ... done
Attaching to visits_node-app_1, visits_redis-server_1
node-app_1      | 
node-app_1      | > @ start /usr/app
node-app_1      | > node src/app.js
node-app_1      | 
redis-server_1  | 1:C 07 Jun 2020 09:10:40.506 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis-server_1  | 1:C 07 Jun 2020 09:10:40.506 # Redis version=6.0.4, bits=64, commit=00000000, modified=0, pid=1, just started
redis-server_1  | 1:C 07 Jun 2020 09:10:40.506 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
node-app_1      | Listening on port 8001
redis-server_1  | 1:M 07 Jun 2020 09:10:40.506 * Increased maximum number of open files to 10032 (it was originally set to 1024).
redis-server_1  | 1:M 07 Jun 2020 09:10:40.507 * Running mode=standalone, port=6379.
redis-server_1  | 1:M 07 Jun 2020 09:10:40.507 # Server initialized
redis-server_1  | 1:M 07 Jun 2020 09:10:40.507 # WARNING overcommit_memory is set to 0! Background save may fail under low memory condition. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.
redis-server_1  | 1:M 07 Jun 2020 09:10:40.507 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
redis-server_1  | 1:M 07 Jun 2020 09:10:40.507 * Ready to accept connections
```

2. **Running the containers without building**

```txt
ashutoshbhadoria@ashutosh-Lenovo-Legion-Y540:~/Documents/docker/visits$ docker-compose up
```

3. **Container status**

```txt
ashutoshbhadoria@ashutosh-Lenovo-Legion-Y540:~/Documents/docker/visits$ docker-compose ps
```

Output

```txt
        Name                       Command               State           Ports         
---------------------------------------------------------------------------------------
visits_node-app_1       docker-entrypoint.sh npm start   Up      0.0.0.0:8001->8001/tcp
visits_redis-server_1   docker-entrypoint.sh redis ...   Up      6379/tcp 
```

4. **Stopping the containers**

```txt
ashutoshbhadoria@ashutosh-Lenovo-Legion-Y540:~/Documents/udemy/docker/visits$ docker-compose down
```

Output

```txt
Stopping visits_node-app_1     ... done
Stopping visits_redis-server_1 ... done
Removing visits_node-app_1     ... done
Removing visits_redis-server_1 ... done
Removing network visits_default
```
