import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";
import { HeadingH3 } from "../../ui/heading-h3";
import { Input } from "../../ui/input";
import { Logo } from "../../shared/logo";
import { Description } from "../../ui/description";
import { Dot } from "lucide-react";
import { useQueryUsers } from "@/src/hooks/queries/use-query-users";
import { useState } from "react";

export function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({ email: "", password: "" })
    const {handleLogin, error, loading } = useQueryUsers();

    const validateEmail = (email) => {
        if (!email) return "Email không được để trống!";
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) return "Email không hợp lệ!";
        return "";
    }

    const validatePassword = (password) => {
        if (!password) return "Mật khẩu không được để trống!";
        return "";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        if (emailError || passwordError) {
            setErrors({ email: emailError, password: passwordError });
            return;
        }

        setErrors({ email: "", password: "" });
        handleLogin(email, password);
    }

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
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        <Input 
                            placeholder="Email" 
                            className="w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        <Input 
                            placeholder="Password" 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="flex justify-between text-sm lg:text-base">
                            <div>
                                <Checkbox />
                                <label className="ml-2">Remember me</label>
                            </div>
                            <Link to="/" className="font-medium ">Forgot Password?</Link>
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <Button type="submit" disabled={loading} > {loading ? "Signing In..." : "Sign In"}</Button>
                    </form>
                </div>
                <div className="text-sm lg:hidden">
                    <h3>
                        If you don't have an account.
                        <Link to="/signup" className="font-bold"> SIGN UP NOW</Link>
                    </h3>
                </div>
                <div className="flex gap-2 mt-10 font-medium text-sm">
                    <Link>Privacy Policy</Link>
                    <Dot />
                    <Link>Terms & Conditons</Link>
                </div>
            </div>  
            <div className="hidden lg:block lg:w-2/5 bg-[url(/images/model.png)] bg-cover">
                <div className=" bg-black opacity-85 h-screen  text-white text-center px-20 flex flex-col gap-5 items-center justify-center">
                    <HeadingH3>Welcome Back!</HeadingH3>
                    <div className="border-b border-white w-20"></div>
                    <p className="text-white text-xl">
                        Fill up personal information and start shopping with us. If you don't have an account. Please click this button
                    </p>
                    <Link to="/signup" className="bg-white text-black px-5 py-3 rounded-full w-3/5 hover:bg-gray-300">
                        SIGN UP
                    </Link>
                </div>  
            </div>
        </div>
    )
}