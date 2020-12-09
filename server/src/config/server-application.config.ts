const config = {
  host: process.env.APP_HOST || 'localhost',
  port: parseInt(process.env.APP_PORT, 10) || 5001,
};

export default config;
