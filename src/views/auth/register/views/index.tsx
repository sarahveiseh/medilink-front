import { ReactComponent as AnimatedSvg } from 'assets/img/signUp.svg'
import { RegisterForm } from '../containers'

const RegisterPage = () => {
  return (
    <div className="w-full flex items-center justify-center pt-[50px]">
      <div className="grid w-2/3 grid-cols-2 bg-white rounded shadow-lg md:w-1/2">
        <RegisterForm />

        <div className="flex flex-col items-center justify-center border-l sm:invisible md:visible ">
          <h1 className="font-bold text-gray-500">
            Become an early access member
          </h1>
          <hr className="w-4/5 h-[2px] bg-gradient-to-l from-blue-500  to-blue-50 rounded my-2" />
          <AnimatedSvg />
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
