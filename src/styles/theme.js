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
  deviceSize: {
    max: {
      mobile: `(max-width : ${size.mobile})`,
      desktop: `(max-width : ${size.desktop})`,
    },
    min: {
      mobile: `(min-width : ${size.mobile})`,
      desktop: `(min-width : ${size.desktop})`,
    },
  },
}