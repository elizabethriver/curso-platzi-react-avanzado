import React from 'react'
import { Buttom } from './style'

export const SubmitButtom = ({ children, disabled, onClick }) => {
  return (
    <Buttom disabled={disabled} onClick={onClick}>
      {children}
    </Buttom>
  )
}
