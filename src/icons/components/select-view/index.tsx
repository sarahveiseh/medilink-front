
export const SelectView = (props: any) => {
    const handleChange = (e) => {
        props.setValue(e.target.value)
    }
    return (
        <select
            disabled={props.disabled}
            value={props.value}
            onChange={handleChange}
            className={` w-full  rounded focus:outline-none antialiased  px-3 h-[44px] shadow text-gray-500 bg-gray-50 ${props.className}`}>
            {props.options?.map((option, index) => (
                <option className='text-gray-500' value={option.value} key={index}>
                    {option.title}
                </option>
            ))}
        </select>)
}