import { Button } from 'components/button'
import { useUi } from 'hooks/use-ui'

export const ConfirmDelete = (props) => {
  const { toggleDialog } = useUi()
  const { title, subtitle, onConfirm, loading } = props
  return (
    <div className="flex flex-col items-center space-y-8 w-full mt-12 ">
      <p className="text-lg font-medium">{title}</p>
      <p className="text-sm">{subtitle}</p>
      <div className="flex w-full justify-around">
        <Button
          className="pt-2 pb-2 pl-8 pr-8 mb-8 bg-gray-100"
          onClick={() => toggleDialog({ open: false, data: null, type: null })}
        >
          Cancel
        </Button>
        <Button
          className="pt-2 pb-2 pl-8 pr-8 bg-red-400 text-white mb-8"
          onClick={onConfirm}
          loading={loading}
        >
          Confirm
        </Button>
      </div>
    </div>
  )
}
