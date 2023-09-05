const isProduction = process.env.NODE_ENV === 'production';

const config = {
  apiURL: isProduction ? 'https://apitest-n6l3.onrender.com' : 'http://localhost:3000',
};

export default config;
