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
      gridTemplateRows: {
        mainLayout: 'minmax(75px, 15%) minmax(200px, 1fr) minmax(75px, 200px)',
        // smallLayout: '75px minmax(200px, 1fr) 75px'
      },
      width: {
        75: '75px',
        204: '204px',
        228: '228px',
        '1/10': '10%',
        '15/100': '15%',
        '2/10': '20%',
        '25/100': '25%',
        '3/10': '30%',
        '35/100': '35%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        100: '100%'
      },
      height: {
        24: '24px',
        48: '48px',
        '1/10': '10%',
        '15/100': '15%',
        '2/10': '20%',
        '25/100': '25%',
        '3/10': '30%',
        '35/100': '35%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        100: '100%'
      },
      padding: {
        btn: '12px,44px,12px,44px'
      },
      screens: {
        xl: { max: '1440' }
      },
      borderRadius: {
        main: '36px'
      },
      backgroundImage: {
        homeBackground: "url('./src/images/home_background.svg')",
        homeBackgroundTL: "url('./src/images/home_background_tl.svg')",
        homeBackgroundTR: "url('./src/images/home_background_tr.svg')",
        homeBackgroundBL: "url('./src/images/home_background_bl.svg')",
        homeBackgroundBR: "url('./src/images/home_background_br.svg')",
        homeWavingHand: "url('./src/images/waving_hand.svg')",
        homeInfoQuestionMark: "url('./src/images/info-question-mark.svg')",
        costDelete: "url('./src/images/delete-cost.svg')",
        fixedCostCalendar: "url('./src/images/fixed-cost-calandar.svg')",
        nextButtonArrow: "url('./src/images/btn-arrow-right.svg')",
        backButtonArrow: "url('./src/images/btn-arrow-left.svg')"
      },
      backgroundPosition: {
        infoQuesionMark: '4% 40%',
        buttonArrow: '85%, 50%'
      },
      backgroundSize: {
        '4%': '4%',
        '7%': '7%',
        '15%': '15%',
        '20%': '20%',
        '25%': '25%'
      },
      spacing: {
        '2%': '2%',
        '4%': '4%', //home background image bottom right
        '7%': '7%', //home background image right & left
        '9%': '9%', //home background image bottom left
        '14%': '14%',
        '18%': '18%',
        '21%': '21%'
      },
      flexBasis: {
        '1/16': '6.25%',
        '3/16': '18.75%',
        '6/16': '37.5%',
        '1/22': '4.54%',
        '3/22': '13.63%',
        '6/22': '27.27%',
        '7/8' : '87.5%',
      }
    },
    colors: {
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
        300: '#485654', //main text, boarder  "Greeney-Grey"
        400: '#E4E6E6' //input borders
      },
      aqua: {
        100: '#E8F5F3', //active step icon background,
        200: '#7CC1B5' //text, button, step icons
      },
      red: {
        100: '#eb5c5a'
      },
      transparent: {
        100: '#00000099'
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
      placeholder: [
        //headline3 in placeholders in fields
        '32px',
        {
          lineHeight: '40px',
          letterSpacing: '-0.01em',
          fontWeight: '300'
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
      heading2: [
        // Home Page "Hey There"
        '60px',
        {
          lineHeight: '72px',
          letterSpacing: '-0.02em',
          fontWeight: '400'
        }
      ],
      heading2_xs: [
        // Home Page "Hey There"
        '40px',
        {
          lineHeight: '60px',
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
      body_xs: [
        '15px',
        {
          lineHeight: '20px',
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
      body2_xs: [
        '16px',
        {
          lineHeight: '28px',
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
