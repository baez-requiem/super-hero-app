import { Routes, Route } from "react-router-dom"

import { HomePage, ListsPage } from "./pages"

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/my-lists" element={<ListsPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}

export default App
