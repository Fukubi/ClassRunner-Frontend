import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Classes } from "./pages/Classes";
import { About } from "./pages/About";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/classes" element={<Classes />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
