module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('files', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNULL: false,
      },
      path: {
        type: Sequelize.STRING,
        allowNULL: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNULL: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNULL: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNULL: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('files');
  },
};
