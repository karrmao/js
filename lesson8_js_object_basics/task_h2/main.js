const user = {
  name: 'Tom',
  age: 17,
};

/* присвой объекту свойство hobby со значением 'football' с помощью точки */
user.hobby = 'football';
//console.log(user);

const anotherKey = 'married';
/* название свойства хранится в переменной anotherKey. Присвой объекту такое свойство со значением false */
user[anotherKey] = false;
//console.log(user);
/* присвой объекту свойство 'favorite music' со значением 'rock' */
user['favorite music'] = 'rock';
//console.log(user);
/* присвой объекту свойство 'address', которое будет пустым объкетом */
user['address'] = {};
//console.log(user);
/* присвой объекту в 'address' свойство 'country', со значением 'Ukraine' */
user['address'].country = 'Ukraine';
//console.log(user);
/* присвой объекту в 'address' свойство 'building', со значением 17 */
user.address.building = 17;
//console.log(user);

/* выведи в консоль итоговый объект user */
console.log(user);
