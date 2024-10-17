import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const PageDetail = () => {
  const encryptParams = useParams()
  const param = encryptParams["*"]
    ? JSON.parse(atob(encryptParams["*"]))
    : undefined
  const [date, setDate] = useState<string>()

  useEffect(() => {
    setDate(new Date().toISOString())
  }, [])

  return (
    <div>
      <h3>用户详情</h3>
      <div>用户编码：{param?.userId}</div>
      <div>页面时间：{date}</div>
    </div>
  )
}

export default PageDetail
