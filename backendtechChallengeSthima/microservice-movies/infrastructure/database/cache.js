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

const InsertCache = async (key, value) => {
  for (const dados of value) {
    return redis_client.set(key, JSON.stringify(dados));
  }
};

const getData = async (key) => {
  console.log("key:", key.toString());
  redis_client.get(key, function (err, reply) {
    err && console.log("Ocorreu erro: ", err);
    return JSON.parse(reply);
  });
};

module.exports = {
  InsertCache,
  getData,
};
