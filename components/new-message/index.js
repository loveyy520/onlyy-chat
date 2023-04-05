import { Button, Input, message } from 'antd'
import { CrownOutlined } from '@ant-design/icons'
import styles from './index.module.css'

export function NewMessage({ value, setValue, onSend }) {
  function handleSendClick() {
    if (!value) return message.warning('不可以发送空消息哦!')
    onSend()
  }
  return (
    <div className={styles['new-message']}>
      <Input.TextArea
        value={value}
        autoSize={{ minRows: 1, maxRows: 6 }}
        style={{ width: '100%' }}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        className={styles['messag-button']}
        type="primary"
        shape="round"
        disabled={!value}
        icon={<CrownOutlined />}
        onClick={handleSendClick}
      >
        发送
      </Button>
    </div>
  )
}
