export const sliceArrayByLimit = (totalPage, limit) => {
  const totalPageArray = Array(totalPage)
    .fill()
    .map((_, i) => i);

  return Array(Math.ceil(totalPage / limit))
    .fill()
    .map(() => totalPageArray.splice(0, limit));
};
