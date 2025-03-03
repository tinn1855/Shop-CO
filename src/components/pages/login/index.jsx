import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";
import { HeadingH3 } from "../../ui/heading-h3";
import { Input } from "../../ui/input";
import { Logo } from "../../shared/logo";
import { Description } from "../../ui/description";

export function Login() {
    return(
        <div className="flex flex-col mt-8 lg:mt-0 lg:flex-row text-center items-center justify-center">
            <div className="lg:w-3/5 w-full px-5 flex flex-col gap-4 lg:justify-center items-center">
                <Logo/>
                <div>
                    <HeadingH3>Sign Into Account</HeadingH3>
                </div>
                <div className="border-b-2 border-black w-20 flex justify-center mt-2"></div>
                <div className="flex gap-2">
                    <Link to="/">
                        <img src="/images/social/facebook.png" alt="logo facebook" className="w-14 border rounded-full p-2"/>
                    </Link>
                    <Link to="/">
                        <img src="/images/social/google.png" alt="logo facebook" className="w-14 border rounded-full p-2"/>
                    </Link>
                </div>
                <Description>
                    or use your email account
                </Description>
                <div className="lg:w-2/5 w-full flex flex-col gap-5">
                   <Input placeholder="Email" className="w-full"/>
                   <Input placeholder="Password" type="password" />
                   <div className="flex justify-between">
                        <div>
                            <Checkbox />
                            <label className="ml-2 text-sm">Remember me</label>
                        </div>
                        <Link to="/" className="font-medium text-sm">Forgot Password?</Link>
                    </div>
                </div>
                <Button>Sign In</Button>
            </div>  
            <div className="hidden lg:block lg:w-2/5 bg-[url(/images/model.png)] bg-cover">
                <div className=" bg-black opacity-85 h-screen  text-white text-center px-20 flex flex-col gap-5 items-center justify-center">
                    <HeadingH3>Welcome Back!</HeadingH3>
                    <div className="border-b border-white w-20"></div>
                    <p className="text-white text-xl">
                        Fill up personal information and start shopping with us. If you don't have an account. Please click this button
                    </p>
                    <Button className="bg-white text-black hover:bg-gray-300">
                        SIGN UP
                    </Button>
                </div>  
            </div>
        </div>
    )
}