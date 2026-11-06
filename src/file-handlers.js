let handlers = {};

export const setFileHandlers = (next) => {
  handlers = { ...handlers, ...next };
};

export const getFileHandlers = () => handlers;
