
import { LoginSidebar } from "../../feature/login/login-sidebar";
import { LoginForm } from "../../feature/login/login-form";

export function Login() {
    return(
        <div className="flex flex-col mt-8 lg:mt-0 lg:flex-row text-center items-center justify-center">
            <LoginForm/>
            <LoginSidebar/>
        </div>
    )
}