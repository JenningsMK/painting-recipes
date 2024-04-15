const paintsAPI = import('../data/paints.json')
  .then((module) => module.default)
  .catch((error) => {
    throw Error(error);
  });

export { paintsAPI };
