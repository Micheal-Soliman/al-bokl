/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    rules: {
      'react/no-unescaped-entities': 'off',
      'react/jsx-key': 'off',
      '@next/next/no-img-element': 'warn',
      'jsx-a11y/alt-text': 'warn'
    }
  }
};

export default nextConfig;
