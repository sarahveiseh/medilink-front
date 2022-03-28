import { Button } from 'components/button'
import { FC } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  goBackLink: string
}

export const Prompt: FC<Props> = ({ children, goBackLink }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 font-medium bg-blue-500 rounded bg-opacity-20">
      <p>{children}</p>
      <Link to={goBackLink}>
        <Button className="text-white bg-blue-500 w-36">Go Back</Button>
      </Link>
    </div>
  )
}
