import Typography from '@/components/Typography'
import InputTextPlayground from './inputText/page';
import InputRadioPlayground from './inputRadio/page';

const InputPlayground = () => {
    return (
        <div className="playground">
            <Typography.Title level="2">input - text</Typography.Title>
            <InputTextPlayground />

            {/* <h2>input - radio</h2>
            <InputRadioPlayground /> */}
        </div>
    )
}

export default InputPlayground;