import { useRoutes } from "react-router-dom"
import Layout from "./pages/Layout"
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"
import Page3 from "./pages/Page3"
import PageDetail from "./pages/PageDetail"
import "./App.css"

function App() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/page1", element: <Page1 /> },
        { path: "/page2", element: <Page2 /> },
        { path: "/page3", element: <Page3 /> },
        { path: "/page1/*", element: <PageDetail /> },
      ],
    },
  ])
}

export default App
