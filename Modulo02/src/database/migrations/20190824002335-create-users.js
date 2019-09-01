module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
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
      email: {
        type: Sequelize.STRING,
        allowNULL: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNULL: false,
      },
      provider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    return queryInterface.dropTable('users');
  },
};
