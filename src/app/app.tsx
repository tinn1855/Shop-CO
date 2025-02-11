import { Routes, Route } from "react-router-dom";
import {DefaultTemplate} from "../components/templates/default";
import {CategoryTemplate} from "../components/templates/category";
import {PageHome} from "../components/pages/home";
import {PageCategory} from "../components/pages/category";


export function App() {
  return (
    <Routes>
        <Route path="/" element={<DefaultTemplate />}>
          <Route
            index
            element={<PageHome />}
          />
          <Route
            path="category"
            element={<CategoryTemplate />}
          >
            <Route index element={<>Not found</>} />
            <Route
              path=":id"
              element={<PageCategory />}
            >
          </Route>

          </Route>
          <Route path="*" element={<>Not found</>} />
        </Route>

       
       
    </Routes>
  );
}

export default App;
