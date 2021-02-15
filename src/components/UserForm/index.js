import React, { Fragment } from 'react'
import { useInputValue } from '../../hooks/useInputValues'
import { Form, Input, Buttom, Title, Error } from './style'
export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const handlSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }
  return (
    <>

      <Form disabled={disabled} onSubmit={handlSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='Email' type='email' {...email} required />
        <Input disabled={disabled} placeholder='Password' type='password' value={password.value} {...password} required />
        <Buttom disabled={disabled}>{title}</Buttom>
      </Form>
      {error && <Error>{error}</Error>}
    </>

  )
}
