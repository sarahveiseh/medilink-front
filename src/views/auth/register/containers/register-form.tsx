import { Button } from 'components/button'
import { Checkbox } from 'components/check-box'
import { Input } from 'components/input'
import { Link } from 'react-router-dom'
import { useRegister } from '../hooks'
import { FaEnvelopeOpenText } from 'react-icons/fa'
import { TermsModal } from '.'
import { useState } from 'react'

export const RegisterForm = () => {
  const { onSubmit, isSubmitting, form, showMessage } = useRegister()
  const [shoModal, setShowModal] = useState(false)
  return (
    <>
      <div className="w-full py-14 px-6 flex flex-col items-center space-y-4 bg-gray-50 rounded">
        {showMessage && (
          <div className=" bg-gradient-to-t from-green-300 via-green-500 to-green-400 text-white p-2 -mt-10 shadow-sm rounded-sm flex justify-center text-base ">
            {showMessage}
          </div>
        )}
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" w-full grid grid-cols-1 gap-y-4 mb-4"
        >
          <Input
            label="Email"
            name="username"
            type="email"
            required
            email
            control={form.control}
          />
          <Input
            label="Organization"
            name="organization"
            required
            control={form.control}
          />
          <Input
            tooltip="Password must have at least one digit, a capital letter and one of: !@#$%^&*"
            label="Password"
            name="password"
            type="password"
            min={3}
            max={20}
            password
            required
            control={form.control}
          />
          <Checkbox
            label="I would like to receive updates via email."
            name="receiveUpdates"
            control={form.control}
          />
          <Button
            type="submit"
            loading={isSubmitting}
            className="w-full bg-blue-500 text-white mt-3"
          >
            Create Account
          </Button>
        </form>
        <div className="text-sm w-full">
          By signing up for Utopiops, you agree to our
          <Button
            type="button"
            icon
            className="flex items-center hover:underline cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            terms of service <FaEnvelopeOpenText className="ml-1" />
          </Button>
        </div>

        <Link to="/auth/login">
          <span className="text-blue-600 hover:underline">Back to login</span>
        </Link>
        {shoModal && <TermsModal setShowModal={setShowModal} />}
      </div>
    </>
  )
}
