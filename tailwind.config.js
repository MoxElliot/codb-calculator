// @type {import('tailwindcss').Config}

module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,vue,ts}',
    './src/components/**/*.{html,js,vue,ts}',
    './src/components/FixedCostComponents/**/*.{html,js,vue,ts}'
  ],
  theme: {
    extend: {   //extends the default themes
    width: {
      '75':'75px',
      '204': '204px',
      '228':'228px',
    },
    height: {
      '24':'24px',
      '48':'48px'
    },
    padding: {
      'btn':'12px,44px,12px,44px'
    }
      
  },
  colors: {
    'test': '#E8F5F3',
    'white':'#FFFFFF',  //main background, text on green
    'lt-blue': '#80bff61a', //message backgrond
    'blue' : '#80bff6',  //text
    'lt-grey':'#A4ABAA',  //placeholder text, border 
    'grey':'#F3F3F3', //border
    'greeny-grey':'#485654', //main text, boarder
    'aqua':'#7CC1B5', //text, button, step icons
    'lt-aqua':'#E8F5F3', //active step icon background,
    'lt-blue': '#80bff680', //border
    'red':'#eb5c5a',

  },
  fontFamily: {
    'sans': ['Avenir', 'sans-serif'],
    'serif':['Cormorant','serif'],
  },
  fontSize: {
    'btn': ['16px', {
      lineHeight: '16px',
      fontWeight: '500',
    }],
    'heading':['48px', {
      lineHeight: '56px',
      letterSpacing: '-0.02em',
      fontWeight: '400',
    }],
    'body':['16px', {
      lineHeight: '26px',
      letterSpacing: '0em',
      fontWeight: '400',
    }],
    'caption':['14px', {
      lineHeight: '24px',
      letterSpacing: '0em',
      fontWeight: '400',
    }],
    'caption-bold':['14px', {
      lineHeight: '24px',
      letterSpacing: '0em',
      fontWeight: '900',
    }],
    'caption-2':['12px', {
      lineHeight: '20px',
      letterSpacing: '0em',
      fontWeight: '400',
    }],
    'menu':['16px', {
      lineHeight: '42px',
      letterSpacing: '0em',
      fontWeight: '400',
    }],
  }
  ,
  borderRadius: {
    'main': '36px'
  },
  },
  plugins: [],
}

//styleName: Headline 1 Cormorant;
//styleName: Body 3;
//styleName: Caption 1;
//styleName: Caption 1 (Bold);
//styleName: Caption 2;



