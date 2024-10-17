import { Form, Input, Select, Tabs } from "antd"
import { useEffect, useState } from "react"

const { Option } = Select
const Page3 = () => {
  const [date, setDate] = useState<string>()

  useEffect(() => {
    setDate(new Date().toISOString())
  }, [])

  return (
    <>
      <Tabs onChange={(ack) => {}}>
        <Tabs.TabPane tab="页面3的tab1" key="/tab1">
          <Form>
            <Form.Item label="tab1字段1" name="username1">
              <Input />
            </Form.Item>
            <Form.Item label="tab1字段2" name="gender1">
              <Select allowClear>
                <Option value="male">male2</Option>
                <Option value="female">female2</Option>
                <Option value="other">other2</Option>
              </Select>
            </Form.Item>
          </Form>
        </Tabs.TabPane>
        <Tabs.TabPane tab="页面3的tab2" key="/tab2">
          <Form>
            <Form.Item label="tab2字段1" name="username2">
              <Input />
            </Form.Item>
            <Form.Item label="tab2字段2" name="gender2">
              <Select allowClear>
                <Option value="male">male2</Option>
                <Option value="female">female2</Option>
                <Option value="other">other2</Option>
              </Select>
            </Form.Item>
          </Form>
        </Tabs.TabPane>
      </Tabs>
      <div>页面3时间：{date}</div>
    </>
  )
}

export default Page3
