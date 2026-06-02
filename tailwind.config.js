module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      typography(theme) {
        return {
          invert: {
            css: {
              '--tw-prose-body': theme('colors.gray.300'),
              '--tw-prose-headings': theme('colors.white'),
              '--tw-prose-lead': theme('colors.gray.300'),
              '--tw-prose-links': theme('colors.cyan.300'),
              '--tw-prose-bold': theme('colors.white'),
              '--tw-prose-counters': theme('colors.gray.400'),
              '--tw-prose-bullets': theme('colors.cyan.300'),
              '--tw-prose-hr': 'rgba(255, 255, 255, 0.12)',
              '--tw-prose-quotes': theme('colors.gray.100'),
              '--tw-prose-quote-borders': theme('colors.cyan.300'),
              '--tw-prose-captions': theme('colors.gray.400'),
              '--tw-prose-code': theme('colors.gray.100'),
              '--tw-prose-pre-code': theme('colors.gray.100'),
              '--tw-prose-pre-bg': theme('colors.gray.900'),
              '--tw-prose-th-borders': theme('colors.gray.700'),
              '--tw-prose-td-borders': theme('colors.gray.800'),
            },
          },
        };
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
