const some = obj => {
  for (let k in obj) {
    if (!obj.hasOwnProperty(k)) continue;
    if (obj[k]) return true;
  }
  return false;
};

export default some;
