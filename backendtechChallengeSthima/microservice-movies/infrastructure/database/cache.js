const redis = require("redis");
const redis_config = require("../config/redis_config");
const redis_client = redis.createClient({
  host: redis_config.host,
  port: redis_config.port,
  password: redis_config.password,
});

redis_client.on("error", (err) => {
  console.log("Error do Cache", err);
});

redis_client.on("connect", function () {
  console.log("Connected!");
});
async function saveWithTimeToLive(key, value, ttlSecond = 60) {
  //return await setAsyncEx(key, ttlSecond, JSON.stringify(value));
}

async function getData(key) {
  console.log("key:", key.toString());
  redis_client.get(key, function (err, reply) {
    err && console.log("Ocorreu erro: ", err);
    return JSON.parse(reply);
  });
}

module.exports = {
  saveWithTimeToLive,
  getData,
};
