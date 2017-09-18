exports.seed = function(knex, Promise) {
  // role:
  //  1: staff
  //  2: student
  //  3: mentor

  // Deletes ALL existing entries
  return knex('person').del()
    .then(function() {
      // Inserts seed entries
      return knex('person').insert([{
          "first_name": "Maria",
          "last_name": "Montoya",
          "email": "M@M.com",
          "photo_url": null,
          "password": "password1",
          "username": "username1",
          "role": "1"
        },
        {
          "first_name": "John",
          "last_name": "Armbuster",
          "email": "J@A.com",
          "photo_url": null,
          "password": "password2",
          "username": "username2",
          "role": "1"
        },
        {
          "first_name": "Stephen",
          "last_name": "Eversole",
          "email": "S@E.com",
          "photo_url": "http://i.imgur.com/GV2dqxo.jpg",
          "password": "password1",
          "username": "username1",
          "role": "2"
        },
        {
          "first_name": "Emit",
          "last_name": "Dutcher",
          "email": "E@D.com",
          "photo_url": "http://i.imgur.com/vOCGn7V.png",
          "password": "password2",
          "username": "username2",
          "role": "2"
        },
        {
          "first_name": "David",
          "last_name": "Kruse",
          "email": "D@K.com",
          "photo_url": "http://i.imgur.com/ieQ0ZICg.jpg",
          "password": "password3",
          "username": "username3",
          "role": "2"
        },
        {
          "first_name": "Shu Sia",
          "last_name": "Lukito",
          "email": "S@D.com",
          "photo_url": "http://i.imgur.com/fuD68nb.png",
          "password": "password4",
          "username": "username4",
          "role": "2"
        }
      ]);
    });
};
