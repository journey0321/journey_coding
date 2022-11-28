const data = [
    {
      gender: 'male',
      age: 24,
    },
    {
      gender: 'male',
      age: 25,
    },
    {
      gender: 'female',
      age: 27,
    },
    {
      gender: 'female',
      age: 22,
    },
    {
      gender: 'male',
      age: 29,
    },
  ];


function getAverageAgeOfMaleAtOnce(data) {
    const onlyMale = data.filter(function(d){
        return d.gender === 'male'
    });

    const numOfMales = onlyMales.length;

    const onlyMaleAges = onlyMale.map(function (d){
        return d.age;
    });

    const sumOfAges = onlyMaleAges.reduce(function(acc, cur){
        return acc + cur;
    }, 0);

    return sumOfAges / numOfMales;
}