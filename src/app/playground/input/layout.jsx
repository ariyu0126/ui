import Typography from '@/components/Typography/Index'

const InputLayout = ({children}) => {
    return (
        <div>
            <Typography.Title>Input</Typography.Title>
            {children}
        </div>
    )
}

export default InputLayout;