exports.up = function(knex, Promise) {
  return knex.schema.createTable('person', function(table) {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable();
    table.string('photo_url');
    table.string('password');
    table.string('username');
    table.string('role');
  });
};


exports.down = function(knex, Promise) {
  return knex.schema.dropTable('staff');
};
