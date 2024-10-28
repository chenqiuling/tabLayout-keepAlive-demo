import { useOutlet } from "react-router-dom"
import TabLayout from "../components/tabLayout/TabLayout"

const menus = [
  { label: "缓存页面1", key: "/page1" },
  { label: "缓存页面2", key: "/page2" },
  { label: "不缓存页面3", key: "/page3" },
]
const LayoutWrap = () => {
  const outlet = useOutlet()

  return (
    <TabLayout cache={true} menus={menus} excludeKeys={["/page3"]}>
      {outlet}
    </TabLayout>
  )
}

export default LayoutWrap
