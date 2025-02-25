import { Outlet } from "react-router-dom";
import Header from "../common/header/header";
import { Footer } from "../common/footer";

export function DefaultTemplate() {
    return (
      <>
        <Header/>
        <Outlet/>
        <Footer/>
      </>
    );
  }