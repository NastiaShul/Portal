import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../layout/appHeader/AppHeader";
import { PhotosPage, ToDoListPage, MainPage, ToDoPage } from "../pages"

const App = () => {
   return (
      <Router>
         <div className="app">
            <AppHeader />
            <main>
               <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/todos" element={<ToDoListPage />} />
                  <Route path="/todos/:todoId" element={<ToDoPage />} />
                  <Route path="/photos" element={<PhotosPage />} />
               </Routes>
            </main>
         </div>
      </Router>
   )
}

export default App;