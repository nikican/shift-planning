export const groupArrayDataByProperty = (array, groupingPropery) => {
  let groupedData = {};

  array.map(data => {
    let value = data[groupingPropery];
    let group = groupedData[value];

    group ?
      group.push(data) :
      groupedData[value] = [data];
  });

  return groupedData;
};
