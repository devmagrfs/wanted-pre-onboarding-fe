const size = {
  mobile: '576px',
  desktop: '3600px',
};

export const theme = {
  color: {
    primary: 'black',
    disabled: 'gray',
    abled: 'skyblue',
    border: 'red',
  },
  cursor: {
    pointer: 'pointer',
    default: 'default',
  },
  visibility: {
    visible: 'visible',
    noneVisible: 'none',
  },
  deviceSize: {
    max: {
      mobile: `screen and (max-width : ${size.mobile})`,
      desktop: `screen and (max-width : ${size.desktop})`,
    },
    min: {
      mobile: `screen and (min-width : ${size.mobile})`,
      desktop: `screen and (min-width : ${size.desktop})`,
    },
  },
}