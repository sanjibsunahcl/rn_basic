import {api} from '../src/screen/api';

test('api test function', async () => {
  // global.fetch = jest.fn().mockImplementation(() => {
  //   var p = new Promise((resolve, reject) => {
  //     resolve({
  //       json: function () {
  //         return {
  //           title: 'quis ut nam facilis et officia quis',
  //           id: 2,
  //           userId: 1,
  //         };
  //       },
  //     });
  //   });
  //   return p;
  // });

  global.fetch = jest.fn(
    () =>
      new Promise(resolve => {
        resolve({
          status: 201,
          json: function () {
            return {
              title: 'quis ut nam facilis et officia quis',
              id: 2,
              userId: 1,
            };
          },
        });
      }),
  );
  ///todos/1
  const response = await api('/todos/2');
  console.log('response json' + JSON.stringify(response));
  expect(response.id).toBe(2);
  expect(response.userId).toBe(1);
});
