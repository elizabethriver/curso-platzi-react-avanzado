import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButtom } from '../components/SubmitButtom'

export default () => {
  const { removeAuth } = useContext(Context)
  // console.log('Cerro sesion')
  return (
    <>
      <h1>User</h1>
      <SubmitButtom onClick={removeAuth}>Cerrar Sesion</SubmitButtom>
    </>
  )
}
