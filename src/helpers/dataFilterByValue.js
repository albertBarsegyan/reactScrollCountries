/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
export default function dataFilterByValue(dataArray, value, filterBy) {
  return value.length > 0
    ? dataArray.filter((countryObject) => {
        const name = countryObject.name.trim().toLowerCase();
        const { telephoneCode } = countryObject;
        if (filterBy === 'name') {
          if (name.startsWith(value.toLowerCase())) {
            return true;
          }
          return false;
        }
        if (filterBy === 'telephoneCode') {
          if (telephoneCode.startsWith(value.trim())) {
            return true;
          }
          return false;
        }
      })
    : [];
}
