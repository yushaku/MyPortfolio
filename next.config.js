/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'halcyon-theme.netlify.app',
      'cdn-icons-png.flaticon.com',
      'res.cloudinary.com',
      'raw.githubusercontent.com',
      'w7.pngwing.com',
    ],
  },
  env: {
    PUBLIC_API_KEY: process.env.PUBLIC_API_KEY || '',
    YOUR_SERVICE_ID: process.env.YOUR_SERVICE_ID || '',
    YOUR_TEMPLATE_ID: process.env.YOUR_TEMPLATE_ID || '',
  },
}
