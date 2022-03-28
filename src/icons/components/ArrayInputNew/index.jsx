import { Button } from 'components/button'
import { Input } from 'components/input'
import { ICDelete } from 'icons/delete'
import { ICPlusCircle } from 'icons/plus-circle'
import PropTypes from 'prop-types'
import { useFieldArray } from 'react-hook-form'

const ArrayInput = (props) => {
  const {
    fields: arrayInputFields,
    append,
    remove,
  } = useFieldArray({
    control: props.control,
    name: props.uniqueName,
  })

  const {
    uniqueName,
    hideName,
    isRequired,
    customKey,
    customVal,
    customValidation = () => {},
  } = props

  return (
    <>
      <div className="flex justify-between flex-wrap w-full mt-3">
        {arrayInputFields.map((item, index) => (
          <div
            className="w-full flex items-start justify-between mb-2"
            key={item.id}
          >
            {index % 2 === 0 && (
              <>
                <div className="mr-2 w-1/2">
                  <Input
                    {...props}
                    name={`${uniqueName}.${index}`}
                    label={customKey}
                    required={isRequired}
                    validation={customValidation}
                  />
                </div>
                <div className="mr-2 w-1/2">
                  <Input
                    {...props}
                    name={`${uniqueName}.${index + 1}`}
                    label={customVal}
                    required={isRequired}
                    validation={customValidation}
                  />
                </div>

                <Button
                  className="mt-10"
                  type="button"
                  icon
                  onClick={() => remove([index, index - 1])}
                >
                  <ICDelete className="w-6 h-6 text-red-500" />
                </Button>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start w-full">
        {arrayInputFields.length === 0 && !hideName && (
          <p className="text-lg mb-6">{uniqueName}</p>
        )}
        <Button type="button" icon onClick={() => append(['', ''])}>
          <ICPlusCircle className="w-6 h-6 text-blue mb-4" />
        </Button>
      </div>
    </>
  )
}

ArrayInput.propTypes = {
  uniqueName: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  customKey: PropTypes.string.isRequired,
  customVal: PropTypes.string.isRequired,
  customValidation: PropTypes.func,
}
export default ArrayInput
