exports.up = function(knex, Promise) {
  return knex.schema.createTable('student', function(table) {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable();
    table.string('photo_url');
    table.string('password');
    table.string('username');
    table.boolean('is_staff');
    table.integer('staff_id').references('id').inTable('staff');
    table.string('cohorts_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('student');
};
