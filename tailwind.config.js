// @type {import('tailwindcss').Config}

module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,vue,ts}',
    './src/components/**/*.{html,js,vue,ts}',
    './src/components/FixedCostComponents/**/*.{html,js,vue,ts}'
  ],
  theme: {
    extend: {
      //extends the default themes
      width: {
        75: '75px',
        204: '204px',
        228: '228px',
        '5/10':'50%',
      },
      height: {
        24: '24px',
        48: '48px',
        '1/10': '10%',
        '2/10': '20%',
        '25/100':'25%',
        '3/10':'30%',
        '35/100':'35%',
        '5/10':'50%',
        '6/10': '60%',
      },
      padding: {
        btn: '12px,44px,12px,44px'
      },
      screens: {
        'xl': {'max': '1440'}
      },
      borderRadius: {
        main: '36px'
      }
    },
    colors: {
      ///create object notation for multiple colors
      primary: {
        white: '#FFFFFF' //main background, text on green
      },
      blue: {
        100: '#80bff71a', //home message backgrond
        200: '#80bff780', //home message border
        300: '#80bff7' //text
      },
      grey: {
        100: '#A4ABAA', //placeholder text, border
        200: '#F3F3F3', //border
        300: '#485654' //main text, boarder  "Greeney-Grey"
      },
      aqua: {
        100: '#E8F5F3', //active step icon background,
        200: '#7CC1B5' //text, button, step icons
      },
      red: {
        100: '#eb5c5a'
      }
    },
    fontFamily: {
      sans: ['Avenir', 'sans-serif'],
      serif: ['Cormorant', 'serif']
    },
    fontSize: {
      btn: [
        '16px',
        {
          lineHeight: '16px',
          fontWeight: '500'
        }
      ],
      heading: [
        '48px',
        {
          lineHeight: '56px',
          letterSpacing: '-0.02em',
          fontWeight: '400'
        }
      ],
      heading2: [   // Home Page "Hey There"
        '60px',
        {
          lineHeight: '72px',
          letterSpacing: '-0.02em',
          fontWeight: '400'
        }
      ],
      body: [
        '16px',
        {
          lineHeight: '26px',
          letterSpacing: '0em',
          fontWeight: '400'
        }
      ],
      body2: [
        '20px',
        {
          lineHeight: '32px',
          letterSpacing: '-0.02em',
          fontWeight: '400'
        }
      ],
      caption: [
        '14px',
        {
          lineHeight: '24px',
          letterSpacing: '0em',
          fontWeight: '400'
        }
      ],
      'caption-bold': [
        '14px',
        {
          lineHeight: '24px',
          letterSpacing: '0em',
          fontWeight: '900'
        }
      ],
      'caption-2': [
        '12px',
        {
          lineHeight: '20px',
          letterSpacing: '0em',
          fontWeight: '400'
        }
      ],
      menu: [
        '16px',
        {
          lineHeight: '42px',
          letterSpacing: '0em',
          fontWeight: '400'
        }
      ]
    }
  },
  plugins: []
}

//styleName: Headline 1 Cormorant;
//styleName: Body 3;
//styleName: Caption 1;
//styleName: Caption 1 (Bold);
//styleName: Caption 2;
