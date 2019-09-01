module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'modulo03',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
