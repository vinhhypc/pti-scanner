/** @type {import('next').NextConfig} */
const processEnv = process.env.ENV;
let env = {
  REACT_APP_API_URL: {
    dev: 'https://dsb-careby-uat.vndirect.com.vn/sale-api',
    uat: 'https://dsb-careby-uat.vndirect.com.vn/sale-api',
    // production: 'http://10.1.1.38:8080'
  }
};

const listEnv = Object.keys(env).reduce((x, y) => {
  x[y] = env[y][processEnv || 'dev'];
  return x;
}, {});

const proxy = [
  {
    basePath: false,
    source: '/ppr-assurance-api/:path*',
    destination: `${listEnv.REACT_APP_API_URL}/:path*`
  }
];

const nextConfig = {
  ...listEnv,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true
  },


  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx']
    };
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    });
    return config;
  },

  async rewrites() {
    return proxy;
  }
};
module.exports = nextConfig
