/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images:{
        domains:[
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
            "res.cloudinary.com"
        ]
        // remotePatterns:[
        //     {
        //         protocol: 'https',
        //         hostname: 'avatars.githubusercontent.com',
        //         pathname: '**',
        //       },
        //       {
        //         protocol: 'https',
        //         hostname: 'lh3.googleusercontent.com',
        //         pathname: '**',
        //       },
        //       {
        //         protocol: 'https',
        //         hostname: 'res.cloudinary.com',
        //         pathname: '**',
        //       },
        //     // "avatars.githubusercontent.com",
        //     // "lh3.googleusercontent.com",
        //     // "res.cloudinary.com"
        // ]
    }
}

module.exports = nextConfig
