export const getInitials = (name, delimeter = ' ') => {

  const array = name.trim().split(delimeter);
  let str = '';

  for (let i = 0; i < array.length; i += 1) {
    // Old
    // str += array[i][0].toUpperCase();
    // New
    str += array[i][0];
    if (i === 2) break;
  }
  return str;
};
