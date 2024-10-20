import { Dropdown, Form, Input, Menu, Select, Table, Tabs } from "antd"
import { DownOutlined } from "@ant-design/icons"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { initLayoutTab } from "../stores/layoutService"

const dropdownMenuData = [
  { label: "选项一", key: "option1" },
  { label: "选项二", key: "option2" },
]
const { Option } = Select
const Page1 = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [menu, setMenu] = useState<{
    label: string
    key: string
  }>()

  const handleDetailLink = (val: string) => {
    const encParams = btoa(JSON.stringify({ userId: val }))
    // 当前tab里跳转
    // navigate(`/page1/${encParams}`, { replace: true })
    dispatch(
      initLayoutTab({
        menu: { label: "页面1详情", key: `/page1/${encParams}` },
        navigate,
      })
    )
  }
  return (
    <Tabs>
      <Tabs.TabPane tab="页面1的tab1" key="/tab1">
        <Dropdown
          trigger={["click"]}
          overlay={
            <Menu
              onClick={(info) => {
                setMenu(dropdownMenuData.find((m) => m.key === info.key))
              }}
            >
              {dropdownMenuData.map((menu) => (
                <Menu.Item key={menu.key}>{menu.label}</Menu.Item>
              ))}
            </Menu>
          }
        >
          <span style={{ cursor: "pointer" }}>
            {menu?.label || "点击选择"} <DownOutlined />
          </span>
        </Dropdown>
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

        <Table
          rowKey="userId"
          columns={[
            {
              dataIndex: "userId",
              title: "用户编码",
              render: (val) => (
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => handleDetailLink(val)}
                >
                  {val}
                </span>
              ),
            },
            { dataIndex: "userName", title: "姓名" },
          ]}
          dataSource={[
            { userId: "123", userName: "甲xx" },
            { userId: "456", userName: "乙xx" },
          ]}
        />
      </Tabs.TabPane>
      <Tabs.TabPane tab="页面1的tab2" key="/tab2">
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

        <Table
          rowKey="userId"
          columns={[
            {
              dataIndex: "userId",
              title: "用户编码",
              render: (val) => (
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => handleDetailLink(val)}
                >
                  {val}
                </span>
              ),
            },
            { dataIndex: "userName", title: "姓名" },
          ]}
          dataSource={[{ userId: "789", userName: "丙xx" }]}
        />
      </Tabs.TabPane>
    </Tabs>
  )
}

export default Page1
