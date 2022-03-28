import { Link } from 'react-router-dom'

export const VerifyLinks = () => {
  return (
    <div className="flex justify-between">
      <Link to="/auth/register">
        <span className="text-blue-600">Sign Up</span>
      </Link>
      <Link to="/auth/login">
        <span className="text-blue-600">Sign In</span>
      </Link>
    </div>
  )
}
