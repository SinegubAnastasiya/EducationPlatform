function buildResponse(res, status, body) {
  res.status(status).send(body);
}

export { buildResponse };
