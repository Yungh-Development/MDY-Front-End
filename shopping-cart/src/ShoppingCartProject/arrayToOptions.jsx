const arrayToOptions = (items) =>
  items.map((item) => ({
    label: item,
    value: item,
  }));

export default arrayToOptions;
