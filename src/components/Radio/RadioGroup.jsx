import { Radio } from "@/components";

const RadioGroup = ({
    defaultChecked,
    options= [],
    name='',
    direction='column',
    optionType='default',
    children,
    ...rest
}) => {

    return (
        <div className={`radio__group radio__option-${optionType}`}>
            {
                options.length > 0 ? (
                    options.map((option) => (
                        <Radio key={option.value} {...option} value={option.value} name={name} defaultChecked={option.value === defaultChecked} />
                    ))
                ) : (
                    children
                )
            }
        </div>
    )
}

export default RadioGroup;