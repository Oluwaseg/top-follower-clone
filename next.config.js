// fix to this lint error is
// import createNextIntlPlugin from 'next-intl/plugin'; but it will be added after refactoring the code

const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = withNextIntl(nextConfig);
