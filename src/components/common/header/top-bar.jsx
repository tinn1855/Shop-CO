import { X } from "lucide-react";

export function TopBar() {
    return <div className="bg-black py-1.5 lg:py-[7px]">
    <div className="container mx-auto px-5 text-white lg:flex justify-between items-center">
      <div className="hidden lg:block lg:w-1/3"></div>
      <div className="lg:w-1/3 flex justify-center text-center ">
        <h1 className="text-xs lg:text-sm text-center">
          Sign up and get 20% off to your first order.
          <a href="/" className="text-base border-b ml-1">
            Sign up now
          </a>
        </h1>
      </div>
      <div className="hidden lg:w-1/3 lg:flex justify-end">
        <button>
          <X className="w-6" />
        </button>
      </div>
    </div>
  </div>
}