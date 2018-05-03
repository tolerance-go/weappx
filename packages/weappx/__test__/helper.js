export const delay = timeout => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
};

export const connector = {
  connect: () => {},
  setStore: () => {},
};
