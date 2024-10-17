import { Layout, Menu, Tabs, TabsProps } from "antd"
import { useMemo, useEffect, FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import KeepAlive from "keepalive-for-react"
import {
  initLayoutTab,
  updateLayoutTab,
  removeLayoutTab,
  TAB_LAYOUT_REDUCER_NAME,
  ITabLayoutState,
  ITab,
} from "../../stores/layoutService"
import { IRootState } from "../../stores"

const { Sider } = Layout

const TabLayout: FC<{
  children: React.ReactNode
  menus?: ITab[]
  cache?: boolean
  cacheKey?: string
}> = ({ children, menus = [], cache, cacheKey }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { activeTab, tabs } = useSelector<IRootState, ITabLayoutState>(
    (state) => state[TAB_LAYOUT_REDUCER_NAME]
  )

  const defaultCacheKey = useMemo(() => {
    return location.pathname + location.search
  }, [location])

  useEffect(() => {
    const currentMenu = menus.find((menu) =>
      location.pathname.startsWith(menu.key)
    )
    if (currentMenu) {
      dispatch(initLayoutTab({ menu: currentMenu, navigate }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onEdit: TabsProps["onEdit"] = (targetKey, action) => {
    if (action === "remove") {
      dispatch(removeLayoutTab({ key: targetKey, navigate }))
    }
  }

  const menuSelectedKeys = useMemo(() => {
    const menuK = menus.find((menu) => activeTab?.startsWith(menu.key))?.key
    return menuK ? [menuK] : []
  }, [activeTab, menus])

  return (
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          style={{ height: "100%", borderRight: 0 }}
          selectedKeys={menuSelectedKeys}
          items={menus}
          onClick={({ key }) => {
            const activeMenu = menus.find((menu) => menu.key === key)
            dispatch(initLayoutTab({ menu: activeMenu, navigate }))
          }}
        />
      </Sider>
      <Layout style={{ padding: "5px" }}>
        <Tabs
          type="editable-card"
          activeKey={activeTab}
          hideAdd
          onEdit={onEdit}
          onChange={(ack) => {
            dispatch(
              updateLayoutTab({
                key: ack,
                navigate,
              })
            )
          }}
        >
          {tabs?.map((tab) => (
            <Tabs.TabPane tab={tab.label} key={tab.key}></Tabs.TabPane>
          ))}
        </Tabs>

        <KeepAlive
          cache={cache}
          activeName={cacheKey || defaultCacheKey}
          max={10}
          strategy={"LRU"}
        >
          {children}
        </KeepAlive>
      </Layout>
    </Layout>
  )
}

export default TabLayout
