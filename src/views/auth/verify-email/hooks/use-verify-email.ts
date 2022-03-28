import { useEffect } from 'react'
import { useHistory } from 'react-router'
import { useService, useSearchParams, useToast } from 'hooks'
import { verifyEmail } from 'services/auth.service'

export const useVerifyEmail = () => {
  const { usePost } = useService()
  const { push } = useHistory()
  const { token } = useSearchParams()
  const { success, error } = useToast()

  const { mutate } = usePost({
    service: verifyEmail,
    onSuccess: () => {
      success('Account created successfully')
      push('/auth/login')
    },
    onError: (err) => {
      if (err.response.status === 400) error(err.response.data.message)
      else error('Oops! something went wrong. Please try again shortly.')
    },
  })

  useEffect(() => {
    if (!token) push('/auth/register')
    mutate({ payload: { token } })
  }, [token, mutate, push])
}
