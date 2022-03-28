import { useFieldArray, useWatch } from 'react-hook-form'
import { Input } from 'components/input'
import { Button } from 'components/button'
import { ICDelete } from 'icons/delete'
import { ICPlus } from 'icons/plus'
import { useEffect } from 'react'

const KeyValueInput = (props) => {
  const {
    uniqueName,
    isRequired,
    customKey,
    customVal,
    customValidation,
    handleDeleteSubmit,
    control,
    prevList,
  } = props

  const {
    fields: arrayInputFields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: uniqueName,
  })

  useEffect(() => {
    arrayInputFields.forEach((_, idx) => {
      remove(idx)
    })
  }, [])

  return (
    <>
      <div className="flex justify-between flex-wrap w-full mt-3">
        {prevList?.map((item, index) => (
          <div
            className="w-full flex items-start justify-between mb-2"
            key={`${item}-${index}`}
          >
            <div className="mr-2 w-full">
              <Input
                name={`prev.${index}.${item}`}
                label={customKey}
                value={item?.value}
                disabled
              />
            </div>

            <Button
              className="mt-10"
              type="button"
              icon
              onClick={() => {
                handleDeleteSubmit({
                  key: customKey,
                  value: item?.value,
                })
              }}
            >
              <ICDelete className="w-4 h-4 text-red-500" />
            </Button>
          </div>
        ))}
      </div>
      <div className="flex justify-between flex-wrap w-full mt-3">
        {arrayInputFields?.map((item, index) => (
          <div
            className="w-full flex items-start justify-between mb-2"
            key={item.id}
          >
            <div className="mr-2 w-full">
              <Input
                name={`${uniqueName}.${index}.${customVal}`}
                label={customKey}
                required={isRequired}
                validation={customValidation}
                control={control}
              />
            </div>

            <Button
              className="mt-10"
              type="button"
              icon
              onClick={() => {
                remove(index)
              }}
            >
              <ICDelete className="w-4 h-4 text-red-500" />
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-2 flex justify-between items-center flex-row-reverse w-full">
        <Button
          type="button"
          icon
          onClick={() => {
            append({ [customKey]: '' })
          }}
        >
          <ICPlus className="w-4 h-4 text-green-500" />
        </Button>
        {arrayInputFields.length === 0 && (
          <p className="text-lg">{uniqueName}</p>
        )}
      </div>
    </>
  )
}

export default KeyValueInput
