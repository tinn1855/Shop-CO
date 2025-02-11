import { Outlet } from "react-router-dom";
import Header from "../common/header/header";
import { Footer } from "../common/footer";

export function DefaultTemplate() {
    return (
      <>
        <Header />
  
        {/* This element will render either <DashboardMessages> when the URL is
            "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
        */}
        <Outlet />

        <Footer/>
      </>
    );
  }