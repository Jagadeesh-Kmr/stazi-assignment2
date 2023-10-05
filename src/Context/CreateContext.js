import React from 'react'

const Context = React.createContext({
  showImg: true,
  toggleImg: () => {},
  nwBtnColor: true,
  toggleNwBtn: () => {},
  mmBtnColor: true,
  toggleMmBtn: () => {},
  PrBtnColor: true,
  togglePrBtn: () => {},
})

export default Context
