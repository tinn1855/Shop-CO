import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useQueryUsers() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (email, password) => {
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
    
            if (!response.ok) {
                throw new Error("Email hoặc mật khẩu không đúng!");
            }
    
            const data = await response.json();
            localStorage.setItem("token", data.access_token);
    
            // Gọi API để lấy thông tin user
            const userResponse = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
                headers: {
                    Authorization: `Bearer ${data.access_token}`
                }
            });
    
            if (!userResponse.ok) {
                throw new Error("Không thể lấy thông tin người dùng!");
            }
    
            const userData = await userResponse.json();
            localStorage.setItem("user", JSON.stringify(userData)); // Lưu thông tin user
    
            navigate("/");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { handleLogin, error, loading };
}
