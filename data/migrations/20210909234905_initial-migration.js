
exports.up = async function(knex) {
  await knex.schema
    .createTable('projects', tbl => {

    })
    .createTable('resources', tbl => {
        
    })
    .createTable('tasks', tbl => {
        
    })
    .createTable('project_resources', tbl => {
        
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
