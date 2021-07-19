export default function dataFilterByValue(dataArray, value) {
  return value.length > 0
    ? dataArray.filter((countryObject) => {
        const name = countryObject.name.toLowerCase();

        if (name.startsWith(value.toLowerCase())) {
          return true;
        }
        return false;
      })
    : [];
}
