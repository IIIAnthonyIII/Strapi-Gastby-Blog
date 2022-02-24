module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '65f34dda4cc555d360f89719568a1bd1'),
  },
});
