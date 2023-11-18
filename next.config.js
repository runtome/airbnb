/** @type {import('next').NextConfig} */
const nextConfig = {

    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                pathname: '**',
              },
              {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '**',
              },
              {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
              },
            // "avatars.githubusercontent.com",
            // "lh3.googleusercontent.com",
            // "res.cloudinary.com"
        ]
    }
}

module.exports = nextConfig
