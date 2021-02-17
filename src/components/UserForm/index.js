import React, { Fragment } from 'react'
import { useInputValue } from '../../hooks/useInputValues'
import { Form, Input, Title, Error } from './style'
import { SubmitButtom } from '../SubmitButtom'

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
        <SubmitButtom disabled={disabled}>{title}</SubmitButtom>
      </Form>
      {error && <Error>{error}</Error>}
    </>

  )
}
