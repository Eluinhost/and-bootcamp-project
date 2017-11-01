import { fetchUsers } from './api';

const fakeFetch = (value) => {
  global.fetch = jest.fn().mockImplementation(() => new Promise((resolve, reject) => resolve({
    json: () => value,
  })));
};


test('Get users should convert dob to moment', async () => {
  fakeFetch([
    { dob: '1923-01-01T00:00:00.000Z' },
    { dob: '1989-12-11T00:00:00.000Z' },
    { dob: '1932-04-23T00:00:00.000Z' },
  ]);

  const users = await fetchUsers();

  expect(users[0].dob.isValid);
  expect(users[1].dob.isValid);
  expect(users[2].dob.isValid);
});
