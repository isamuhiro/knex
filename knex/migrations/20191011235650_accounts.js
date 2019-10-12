
exports.up = function(knex) {
    return knex.schema.createTable('accounts', table => {
        table.increments('id')
        table.string('name')
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
}

exports.down = function(knex) {
  
};
