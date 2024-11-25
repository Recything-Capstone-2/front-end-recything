import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

// Can remove this later
function Test(){

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-violet-400">
      Hello world!
      </h1>
    </div>
  )
}