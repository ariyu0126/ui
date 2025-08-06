import { SourceCodeViewer, Checkbox, Typography } from '@/components';

const InputCheckBoxPlayground = () => {
  return (
    <div className="playground">
      <Typography.Title>Checkbox</Typography.Title>
      <Typography.Title level={2}>1. Checkbox</Typography.Title>
      <div className="playground__inner">
        <Typography.Title level={3}>1-1. Checkbox 속성</Typography.Title>
        <ul>
          <li>
            <Typography.Text>- size: sm, md, lg</Typography.Text>
            <Checkbox size="sm" checked={true} label="체크박스" />
            <Checkbox size="md" checked={true} label="체크박스" />
            <Checkbox size="lg" checked={true} label="체크박스" />
          </li>
          <li>
            <Typography.Text>- checked: true, false</Typography.Text>
            <Checkbox checked={true} label="체크박스" />
            <Checkbox checked={false} label="체크박스" />
          </li>
          <li>
            <Typography.Text>- disabled: true, false</Typography.Text>
            <Checkbox disabled={true} label="체크박스" />
            <Checkbox disabled={false} label="체크박스" />
          </li>
        </ul>
      </div>


      <Typography.Title level={2}>2. Checkbox Group</Typography.Title>
      <div className="playground__inner">
        <Typography.Title level={3}>1-1. Checkbox Group 속성</Typography.Title>
      </div>
    </div>
  )
}

export default InputCheckBoxPlayground;