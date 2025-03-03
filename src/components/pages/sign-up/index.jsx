import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { HeadingH3 } from "../../ui/heading-h3";
import { Checkbox } from "../../ui/checkbox";
import { Input } from "../../ui/input";
import { Description } from "../../ui/description";
import { Logo } from "../../shared/logo";

export function SignUp() {
    return (
        <div className="flex flex-col mt-8 lg:mt-0 lg:flex-row text-center items-center justify-center">
            <div className="hidden lg:block lg:w-2/5 bg-[url(/images/model.png)] bg-cover">
                <div className=" bg-black opacity-85 h-screen  text-white text-center px-20 flex flex-col gap-5 items-center justify-center">
                    <HeadingH3>Hello, friend!</HeadingH3>
                    <div className="border-b border-white w-20"></div>
                    <p className="text-white text-xl">
                        Fill up personal information and start shopping with us. If you already have an account. Please click this button
                    </p>
                    <Link to="/login" className="bg-white text-black px-5 py-3 rounded-full w-3/5 hover:bg-gray-300">
                        Sign In
                    </Link>
                </div>  
            </div>
            <div className="lg:w-3/5 w-full px-5 flex flex-col gap-4 lg:justify-center items-center">
                <Logo/>
                <div>
                    <HeadingH3>Create An Account</HeadingH3>
                </div>
                <div className="border-b-2 border-black w-20 flex justify-center mt-2"></div>
                <Description>
                    Fill up personal information or create an account with
                </Description>
                <div className="flex gap-2">
                    <Link to="/">
                        <img src="/images/social/facebook.png" alt="logo facebook" className="w-14 border rounded-full p-2"/>
                    </Link>
                    <Link to="/">
                        <img src="/images/social/google.png" alt="logo facebook" className="w-14 border rounded-full p-2"/>
                    </Link>
                </div>
                
                <div className="lg:w-3/5 w-full flex flex-col gap-5">
                    <Input placeholder="Full name" className="w-full"/>
                    <Input placeholder="Email" className="w-full"/>
                    <Input placeholder="Password" type="password" />
                    <Input placeholder="Re-enter password" type="password" />
                    <div className="flex items-center">
                        <Checkbox />
                        <label className="ml-2">I agree to the terms</label>
                    </div>
                </div>
                <Button>Sign Up</Button>
                <div className="text-sm lg:hidden">
                    <h3>
                        If you already have an account.
                        <Link to="/login" className="font-bold"> LOGIN NOW</Link>
                    </h3>
                </div>
            </div>  
        
    </div>
    )
}