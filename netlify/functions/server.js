const path = require("path");
const { createRequestHandler } = require("@react-router/serve");

const BUILD_DIR = path.resolve(__dirname, "../../build/server");

const handler = createRequestHandler({
  build: require(BUILD_DIR),
  mode: "production",
});

exports.handler = async (event, context) => {
  const req = {
    method: event.httpMethod,
    headers: event.headers,
    url: event.rawUrl || event.path,
    body: event.body,
  };

  const res = {
    statusCode: 200,
    headers: {},
    body: "",
    setHeader(key, value) {
      this.headers[key] = value;
    },
    end(content) {
      this.body = content;
    },
  };

  await handler(req, res);

  return {
    statusCode: res.statusCode,
    headers: res.headers,
    body: res.body,
  };
};
