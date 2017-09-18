
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('student_todo').del()
    .then(function () {
      // Inserts seed entries
      return knex('student_todo').insert([
        {"student_id": 1, "todo_id": 1, "date_due": new Date(), grade: 3, is_complete: true},
        {"student_id": 1, "todo_id": 2, "date_due": "Mon Jul 17 2017", grade: 0, is_complete: false},
        {"student_id": 1, "todo_id": 3, "date_due": "Mon Jul 17 2017", grade: 0, is_complete: false},
        {"student_id": 2, "todo_id": 3, "date_due": "Mon Jul 17 2017", grade: 0, is_complete: false},
        {"student_id": 3, "todo_id": 2, "date_due": new Date(), grade: 0, is_complete: false},
        {"student_id": 4, "todo_id": 1, "date_due": new Date(), grade: 0, is_complete: false}
      ]);
    });
};
