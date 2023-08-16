import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import ToDoListPage from "./pages/ToDoListPage";
import PhotosPage from "./pages/PhotosPage";
import MainPage from "./pages/MainPage";
import TaskPage from "./pages/TaskPage";
import NotFoundPage from "./pages/NotFoundPage";

import { Provider } from "./context/tasks";

function App() {
   return (
      <Router>
         <Header />
         <main>
            <Routes>
               <Route path="/" element={<MainPage />} />
               <Route path="/todos" element={
                  <Provider>
                     <ToDoListPage />
                  </Provider>
               } />
               <Route path="/todos/:taskId" element={
                  <Provider>
                     <TaskPage />
                  </Provider>
               } />
               <Route path="/photos" element={<PhotosPage />} />
               <Route path="*" element={<NotFoundPage />} />
            </Routes>
         </main>
      </Router>
   );
}

export default App;
