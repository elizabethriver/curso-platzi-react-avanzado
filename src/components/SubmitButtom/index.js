import React from 'react'
import { Buttom } from './style'
import PropTypes from 'prop-types'

export const SubmitButtom = ({ children, disabled, onClick }) => {
  return (
    <Buttom disabled={disabled} onClick={onClick}>
      {children}
    </Buttom>
  )
}

SubmitButtom.prototype = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}
