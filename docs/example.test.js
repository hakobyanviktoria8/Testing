// test('object assignment', () => {
//     const data = {one: 1};
//     data['two'] = 2;
//     expect(data).toEqual({one: 1, two: 2});
//   });
//   test("testing", ()=> {
//     // number
//     expect(2+4).toBe(6)
//     expect(2+4).not.toBe(16)
//     expect(2+2).toBeGreaterThan(3);
//     expect(2+2).toBeLessThan(5);
//     expect(null).toBeNull()
//     // string
//     expect("hi").toEqual('hi')
//     expect('team').not.toMatch(/I/);
//     expect('Christoph').toMatch(/stop/);
//   })
//   test('adding positive numbers is not zero', () => {
//     for (let a = 1; a < 10; a++) {
//       for (let b = 1; b < 10; b++) {
//         expect(a + b).not.toBe(0);
//       }
//     }
//   });
//   test('null', () => {
//     const n = null;
//     expect(n).toBeNull();
//     expect(n).toBeDefined();
//     expect(n).not.toBeUndefined();
//     expect(n).not.toBeTruthy();
//     expect(n).toBeFalsy();
//   });

// //   array
//   const shoppingList = [
//     'diapers',
//     'kleenex',
//     'trash bags',
//     'paper towels',
//     'milk',
//   ];
  
//   test('the shopping list has milk on it', () => {
//     expect(shoppingList).toContain('milk');
//     expect(shoppingList).toHaveLength(5)
//     expect([1, 2, 3]).toHaveLength(3);
//     expect(new Set(shoppingList)).toContain('milk');
//   });

// promise

const fetchData = () => {
    return new Promise(resolve => {
        resolve('peanut butter')
    })
}
// console.log(fetchData());
test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});

test('the fetch fails with an error', async () => {
    // expect.assertions(1);
    try {
      await fetchData();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
  });
  
//   didn't WORK
//   test('the fetch fails with an error', async () => {
//     await expect(fetchData()).rejects.toMatch('error');
//   });
// test('the fetch fails with an error', () => {
//     expect.assertions(1);
//     return fetchData().catch(e => expect(e).toMatch('error'));
//   });
