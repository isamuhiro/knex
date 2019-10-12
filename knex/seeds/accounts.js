
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(function () {
      return knex('accounts').insert([
        {"name": 'puto'},
        {"name": 'gay'},
        {"name": 'cuck'},
        {"name": 'corno'},
      ]);
    });
};
