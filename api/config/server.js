module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1500),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6f1bef4b994b0d099f2bb922054326ff'),
    },
  },
});
