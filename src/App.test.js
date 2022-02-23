// import { render, screen } from '@testing-library/react';
// import App from './App';
import { totalOfEachGender } from './data-utils';

test('totalOfEachGender should create ', () => {
  const expected = [
    { x: 'Male', y: 2 },
    { x: 'Female', y: 1 },
    { x: 'Genderfluid', y: 2 },
    { x: 'Bigender', y: 2 },
    { x: 'Non-binary', y: 1 },
  ];
  
  const actual = totalOfEachGender([
    { gender: 'Male' },
    { gender: 'Male' },
    { gender: 'Female' },
    { gender: 'Genderfluid' },
    { gender: 'Bigender' },
    { gender: 'Bigender' },
    { gender: 'Genderfluid' },
    { gender: 'Non-binary' },
  ]);
  
  expect(actual).toEqual(expected);
});
