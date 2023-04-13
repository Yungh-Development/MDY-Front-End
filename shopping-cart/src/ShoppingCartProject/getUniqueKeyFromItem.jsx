const getUniqueKeyFromItem = (item) => `${item.id}-${item.size}-${item.color}`;

export default getUniqueKeyFromItem;
