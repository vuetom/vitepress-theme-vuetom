module.exports = {
  content: [
    './blog/**/*.vue',
    './doc/**/*.vue'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        cbg: 'var(--vp-c-bg)',
        cbgs: 'var(--vp-c-bg-soft)',
        cbgm: 'var(--vp-c-bg-mute)',
        cbga: 'var(--vp-c-bg-alt)',
        brand: 'var(--vp-c-brand)',
        'brand-l': 'var(--vp-c-brand-lighter)',
        'brand-d': 'var(--vp-c-brand-dark)'
      },
      borderRadius: {
        vt: 'var(--vt-radius)'
      },
      boxShadow: {
        vt: 'var(--vt-shadow)'
      },
      minHeight: {
        eight: '80vh'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      },
      animation: {
        wiggle: 'wiggle 0.2s ease-in-out infinite'
      }
    }
  },
  variants: {
    extend: {
      animation: ['hover', 'focus']
    }
  },
  plugins: []
}
