import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  return (
    <>
      <RegisterMutation>
        {
              (register, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  register({ variables }).then(({ data }) => {
                    // console.log(response)
                    const { signup } = data
                    activateAuth(signup)
                  })
                }
                const errorMsg = error && 'User already exists'
                return <UserForm disabled={loading} error={errorMsg} title='Registrarse' onSubmit={onSubmit} />
              }
            }
      </RegisterMutation>
      <LoginMutation>
        {
                (login, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    login({ variables }).then(({ data }) => {
                      // console.log(response)
                      const { login } = data
                      activateAuth(login)
                    }
                    )
                  }
                  const errorMsg = error && 'Password incorrect'
                  return <UserForm disabled={loading} error={errorMsg} title='Iniciar Sesion' onSubmit={onSubmit} />
                }
              }
      </LoginMutation>

    </>
  )
}
