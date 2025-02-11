import { Github } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";

export function Social() {
    return (
        <div className="flex space-x-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300">
                <Twitter className="w-5 text-black" />
            </div>                   
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black">
                <Facebook className="w-5 text-white" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300">
                <Instagram className="w-5 text-black" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300">
                <Github className="w-5 text-black" />
            </div>
        </div>
    )
}