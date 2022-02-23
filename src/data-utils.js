export function generateColumns(arr) {
  const keys = Object.keys(arr[0]);
  
  const columns = keys.map(key => {
    return {
      key: key,
      name: key.split('_')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ')
    };
  })
  ;
  
  return columns;}

export function totalOfEachGender(arr) {
  const hashMap = arr.reduce((accumulator, person) => {
    if (accumulator[person.gender]) {
      accumulator[person.gender]++;
    } else {
      accumulator[person.gender] = 1;
    }
    return accumulator;

  }, {});
  const refactorObject = Object.entries(hashMap);
  const mapObject = refactorObject.map(object => {
    const genderObj = {
      x: object[0],
      y: object[1]
    };
    return genderObj;
  });
  return mapObject;
}
export function totalOfCarMake(arr) {
  const hashMap = arr.reduce((accumulator, person) => {
    if (accumulator[person.car_make]) {
      accumulator[person.car_make]++;
    } else {
      accumulator[person.car_make] = 1;
    }
    return accumulator;

  }, {});
  const refactorObject = Object.entries(hashMap);
  const mapObject = refactorObject.map(object => {
    const carObj = {
      x: object[0],
      y: object[1]
    };
    return carObj;
  });
  return mapObject;
}