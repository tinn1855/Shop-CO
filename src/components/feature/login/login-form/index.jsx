import { LoginWithEmail } from "@/src/components/molecules/login-with-email";
import { LoginWithSocial } from "@/src/components/molecules/login-with-social";
import { Logo } from "@/src/components/shared/logo";
import { HeadingH3 } from "@/src/components/ui/heading-h3";

import { Link } from "react-router-dom";

export function LoginForm() {
    
    return (
        <div className="lg:w-3/5 w-full px-5 flex flex-col gap-4 lg:justify-center items-center">
            <Logo/>
            <div>
                <HeadingH3>Sign Into Account</HeadingH3>
            </div>
            <div className="border-b-2 border-black w-20 flex justify-center mt-2"></div>
            <LoginWithSocial/>
            <LoginWithEmail/>
            
            {/* responsive */}
            <div className="text-sm lg:hidden">
                <h3>
                    If you don't have an account.
                    <Link to="/signup" className="font-bold"> SIGN UP NOW</Link>
                </h3>
            </div>
        </div>  
    )
}