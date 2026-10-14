/** @type {import('next').NextConfig} */
const nextConfig = {
  // The old single résumé URL may already be shared in applications; send it to the AI/ML CV.
  async redirects() {
    return [
      {
        source: "/RaviYadav_Resume.pdf",
        destination: "/RaviYadav_AIML_Resume.pdf",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/RaviYadav_:kind(SDE|AIML)_Resume.pdf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
 