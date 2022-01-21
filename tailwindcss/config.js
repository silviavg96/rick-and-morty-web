const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            backgroundImage: {
                'header-image': "url('/images/header-image.jpeg')",
            },
            height: {
              65: '18.75rem',
            },
            minHeight: {
                ...defaultTheme.spacing,
                42: '11.4rem',
            },
            minWidth: {
                32: '8rem',
            },
            maxHeight: {
                ...defaultTheme.spacing,
                65: '18.75rem',
            },
            fontSize: {
                xxs: '0.690rem',
            },
        },
    },
    variants: {},
    plugins: [
		require('@tailwindcss/custom-forms')
	],
}
