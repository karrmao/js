 const rooms = {
   room1: [
     { name: 'Borus' },
     { name: 'Artem' },
     { name: 'Taras' },
     { name: 'Oleg' },
   ],

   room2: [{ name: 'Vasul' }],

   room3: [{ name: 'Olga' }, { name: 'Bob' }, { name: 'Jack' }],

   room4: [{ name: 'Ira' }, { name: 'Nikosh' }, { name: 'Jack' }],
 };

 const getPeople = (obj) => {
   return Object.values(obj)
     .flat()
     .map((el) => el.name);
 };

 console.log(getPeople(rooms));
=>['Borus', 'Artem', 'Taras', 'Oleg', ... 'Ira', 'Nikosh', 'Jack']