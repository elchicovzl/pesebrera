/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "res.cloudinary.com",
      "https://source.unsplash.com/random/480x360",
      "collegefootballplayoff.com"
    ],
  },
};

module.exports = nextConfig;
