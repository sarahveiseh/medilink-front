import { LoadingBounce } from 'components/loading'

const Skeleton = () => {
  return (
    <div className="fixed inset-0 w-full h-full flex justify-center items-center pt-50">
      <LoadingBounce size="large" />
    </div>
  )
}
export { Skeleton }
