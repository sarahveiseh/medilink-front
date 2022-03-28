import { useSearchParams, useService, useToast } from 'hooks'
import { register } from 'services/auth.service'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export const useRegister = () => {
  const { usePost } = useService()
  const { error } = useToast()
  const { claim } = useSearchParams()
  const form = useForm({ defaultValues: { receiveUpdates: false } })
  const [showMessage, setShowMessage] = useState<null | string>(null)
  const { mutate, isLoading } = usePost({
    service: register,
    onSuccess: () => {
      setShowMessage('Please sign in to your email to verify your account')
    },
    onError: (err) => {
      if (err.response.status === 400) error('Account already exists')
      else if (err.response.status === 422) error(err.message)
      else error('Oops! something went wrong. Please try again shortly.')
    },
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = ({ termsAndPolicy, ...payload }: FormValues) => {
    mutate({ payload: { ...payload, claim } })
  }

  return {
    showMessage,
    onSubmit,
    isSubmitting: isLoading,
    form,
  }
}

type FormValues = {
  username: string
  organization: string
  password: string
  receiveUpdates: boolean
  termsAndPolicy: boolean
}
