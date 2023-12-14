import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Favorites from "./components/Favorites";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/books/:id" element={<BookDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
