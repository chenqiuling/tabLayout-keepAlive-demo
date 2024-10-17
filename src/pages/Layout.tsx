import { useOutlet } from "react-router-dom"
import TabLayout from "../components/tabLayout/TabLayout"

const menus = [
  { label: "页面1", key: "/page1" },
  { label: "页面2", key: "/page2" },
  { label: "页面3", key: "/page3" },
]
const LayoutWrap = () => {
  const outlet = useOutlet()

  return (
    <TabLayout cache={true} menus={menus}>
      {outlet}
    </TabLayout>
  )
}

export default LayoutWrap
