const express = require('express');
const redis = require('redis');

const app = express();
const redisClient = redis.createClient({
  host: 'redis-server',
  port: 6379
});

redisClient.set('visits', 0);

app.listen(8001, () => {
  console.log('Listening on port 8001');
});

app.get('/', (request, response) => {
  redisClient.get('visits', (err, visits) => {
    response.send('Number of visits: ' + visits);
    redisClient.set('visits', parseInt(visits) + 1);
  });
});