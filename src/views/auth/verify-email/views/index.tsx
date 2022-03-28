import { AuthWrapper } from 'components/auth-wrapper'
import { ReactComponent as AnimatedSvg } from 'assets/img/password-reset.svg'
import { useVerifyEmail } from '../hooks'
import { VerifyLinks } from '../containers'

const VerifyEmailPage = () => {
  useVerifyEmail()

  return (
    <AuthWrapper>
      <div className="w-2/3 md:w-1/2 bg-white shadow-lg rounded h-[500px] flex items-center">
        <div className="w-full py-14 px-6 flex flex-col gap-20">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">
              You have successfully verified your email
            </h1>
            <h3 className="text-sm text-gray-500">
              We are so excited to have you with us
            </h3>
          </div>
          <VerifyLinks />
        </div>

        <AnimatedSvg />
      </div>
    </AuthWrapper>
  )
}

export default VerifyEmailPage
