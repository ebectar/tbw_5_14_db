// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/tbw_5_14'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
