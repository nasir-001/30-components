module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'layout2firstcard': '#e4e6f6',
        'layout2secondcard': '#f6e4f5',
        'layout2thirdcard': '#fae5e5',
        'layout2firstborder': '#d9dbf3',
        'layout2secondborder': '#f3d9ed',
        'layout2thirdborder': '#f7dede',
        'layout4cardbackground': '#f7f8fb',
        'layout4cardborder': '#ebeef5',
        'layout5backgroundcolor': '#2a344a',
        'layout5cardcolor': '#232c3e',
        'layout5cancelcolor': '#2a344a',
        'layout5focuscolor': '#283348',
        'layout6backcardcolor': '#6d6de6',
        'layout7backgroundColor': '#e9ebf9',
        'layout7firstCircle': '#f9e9e9',
        'layout7firstText': '#9e6363',
        'layout7secondCircle': '#e9ebf9',
        'layout7secondText': '#655997',
        'layout7thirdCircle': '#e9f9ee',
        'layout7thirdText': '#599787',
        'layout7fourthCircle': '#e9f3f9',
        'layout7fourthText': '#5d659a',
        'layout7linkTextColor': '#816dee',
        'layout8backgroundColor': '#151e33',
        'layout8secondbackgroundColor': '#1b263f',
        'layout8backgroundCardColor': '#1f2d4c',
        'layout8textColor': '#c7768f',
        'layout8inputBorderColor': '#33456b',
        'layout8buttonColor': '#e3627f',
        'layout8smallCardColor': '#202e4e',
        'layout9backgroundColor': '#dadde1',
        'layout9cardBorderColor': '#f2f2f2',
        'layout10backgroundColor': '#023d52',
        'layout10secondColor': '#d9a176',
        'layout10shadowColor': '#f9ddc7',
        'layout11backgroundColor': '#1b1d36',
        'layout11cardColor': '#232546',
        'layout11IconColor': '#2f315c',
        'layout11InputColor': '#1b1d36',
        'layout11TextColor': '#5b60bf',
        'layout11SmallCardColor': '#ea4c89',
        'layout12InvitebackgroundColor': '#dcdff5',
        'layout12ButtonsColor': '#9181ff',
        'layout14backgroundColor': '#ecefff',
        'layout14buttonColor': '#2563eb',
        'layout15backgroundColor': '#e2e9f7',
        'layout15textAndButtonColor': '#111136',
        'layout15badgeColor': '#f5f8ff',
        'layout15arrorCircleColor': '#595973',
        'layout15listHoverColor': '#f0f3fa',
        'layout16backgroundColor': '#f2f6ff',
        'layout16gradientDownColor': '#936be4',
        'layout16gradientUpColor': '#5ea1ff',
        'layout17backgroundColor': '#f4f2fd',
        'layout17secondCardColor': '#202842',
        'layout17textColor': '#828795',
        'layout18backgroundColor': '#edeff4',
        'layout18firstCardDownColor': '#f1feec',
        'layout18firstCardUpColor': '#fff1f1',
        'layout18secondCardDownColor': '#ecfefe',
        'layout18secondCardUpColor': '#fef1fe',
        'layout18thirdCardDownColor': '#ffebeb',
        'layout18thirdCardUpColor': '#f2f7ff',
        'layout19backgroundColor': '#edeef5',
        'layout19buttonRightColor': '#feedf9',
        'layout19buttonLeftColor': '#e6e8fe',
        'layout20backgroundColor': '#fdbaff',
        'layout20smallBoxesColor': '#2b2862',
        'layout20bigBoxesColor': '#f9f6f7',
        'layout20textColor': '#606dfe',
        'layout20secondTextColor': '#474477',
        'layout21backgroundColor': '#dcdee9',
        'layout21buttonAndTextColor': '#150b30',
        'layout22backgroundColor': '#4d46a6',
        'layout22standardTabColor': '#46a69a',
        'layout22smallCircleColor': '#e0dff6',
        'layout23backgroundColor': '#2a2a3b',
        'layout23cardBackgroundColor': '#2e2e41',
        'layout23textColor': '#eb9365',
        'layout23buttonColor': '#f09666',
        'component24backgroundColor': '#eef2ff',
        'layout25backgroundColor': '#e6eaf4',
        'layout26backgroundColor': '#f7f3fc',
        'layout26gradientBottomColor': '#6d58ce',
        'layout26gradientTopColor': '#b990e8',
        'layout26markCircleColor': '#c1a4eb',
        'layout27bcakgroundColor': '#27264b',
        'layout27cardColor': '#f8fafe',
        'layout27firstTopCard': '#f8fafe',
        'layout27textColor': '#433f63',
        'layout27secondBottomColor': '#b271fd',
        'layout27secondTopColor': '#c2d3fe',
        'layout27thirdBottomColor': '#ffcb6d',
        'layout27thirdTopColor': '#ffb0c4',
        'layou28gradientBottomColor': '#b0baea',
        'layout28gradientTopColor': '#e2d3f5',
        'layou28smallCircleColor': '#f1f1fb',
        'layou28buttonColor': '#ba54ef',
        'layout28facebookButtonColor': '#657ef0',
        'layout28twitterButtonColor': '#65b2f0',
        'layout29backgroundColor': '#eaecf9',
        'layout29firstCardColor': '#544bab',
        'layout29secondCardColor': '#eaecf9',
        'layout29buttonColor': '#37335d',
        'layout29textColor': '#332f59',
        'layout30backgroundColor': '#17103b',
        'layout30cardColor': '#d4e8e6',
        'layout30smallCardColor': '#dcebe6',
        'layout30buttonColor': '#ffa593',
      },
      // eslint-disable-next-line no-unused-vars
      backgroundImage: theme => ({
        'soil-background': "url('/img/pexels-mitchell-luo-3707669.jpg')"
      }),
      spacing: {
        18: '4.5rem',
        88: '22rem',
        100: '25rem',
        108: '27rem',
        114: '29rem',
        124: '32rem',
        130: '34rem',
        144: '36rem',
        154: '38rem',
        164: '40rem',
        170: '42rem',
        180: '45rem'
      },
      width: {
        '2/7': '28.333333%',
        '4/7': '60%',
        '3/7': '40%',
        '3/8': '35%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
