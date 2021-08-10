// Working With Arrays - Challenge17

/* 1. Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters) */

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // 2. Create an array with both Julia's (corrected) and Kate's data
  console.log(dogsJuliaCorrected);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  // For
  // now, they are just interested in knowing whether a dog is an adult or a puppy.
  // A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
  // old.

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// 3. For each remaining dog, log to the console whether it's an adult ("Dog
// 🐶 number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// ")

// 4. Run the function for both test datasets
