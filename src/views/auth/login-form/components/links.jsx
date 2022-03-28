import { Link } from 'react-router-dom'

export const LoginLinks = () => {
  return (
    <div className='text-sm flex flex-col gap-4 text-center pt-2'>
      <Link to={'/auth/register'}>
        <span className="text-blue-600 hover:underline">Don't have an account? Sign Up</span>
      </Link>
      <Link to={'/auth/forgot_password'}>
        <span className="text-blue-600 hover:underline">Forgot password?</span>
      </Link>
    </div>
  )
}
