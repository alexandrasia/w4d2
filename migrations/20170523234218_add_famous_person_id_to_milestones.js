
exports.up = function(knex) {
  return knex.schema.table("milestones",(table) => {
    table.integer('famous_person_id').unsigned();
    table.foreign('famous_person_id').references('famous_people.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('famous_people_id', (table) => {
    table.dropColumn('famous_person_id');
  });
};
