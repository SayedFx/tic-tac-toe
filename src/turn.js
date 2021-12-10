const turn = (() => {
  let index = 0;
  const next = () => {
    index = index === 0 ? 1 : 0;
    return index;
  };
  return { next };
})();

export default turn;
