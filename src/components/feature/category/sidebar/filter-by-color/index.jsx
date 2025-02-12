import { ChevronUp } from "lucide-react";

export function FilterByColor() {
    const colors = [
        { id: 1, name: "green", color: "bg-[#00C12B] border-[#009A22]" },
        { id: 2, name: "red", color: "bg-[#F50606] border-[#C40505]" },
        { id: 3, name: "yellow", color: "bg-[#F5DD06] border-[#C4B105]" },
        { id: 4, name: "orange", color: "bg-[#F57906] border-[#C76205]" },
        { id: 5, name: "blue", color: "bg-[#06CAF5] border-[#05B1D6]" },
    ]
    return (
        <div>
            <div className="border-b-2"></div>
            <div className="flex justify-between items-center mt-4">
                <h3 className="font-bold text-xl">Colors</h3>
                <ChevronUp />
            </div>
            <div className="flex justify-between mt-5">
                {colors.map((colors, index) => (
                    <a  key={index} href="/">
                        <div className={`${colors.color} col-span-1 rounded-full border-2 w-8 h-8`}>
                        </div>
                    </a>
                )) }
            </div>
            <div className="flex justify-between mt-5">
                {colors.map((colors, index) => (
                    <div key={index} className={`${colors.color} col-span-1 rounded-full border-2 w-8 h-8`}>
                    </div>
                )) }
            </div>
        </div>
    )
}