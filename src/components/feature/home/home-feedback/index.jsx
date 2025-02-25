import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { FeedBack } from "../../../molecules/feedback";
import { Heading } from "@/src/components/ui/heading";

export function HomeFeedback() {
    
    return (
        <div className="container mx-auto px-4 lg:px-5 mt-10 lg:mb-20">
            <div className="flex justify-between items-end">
                <Heading>OUR HAPPY CUSTOMERS</Heading>
                <div className="flex items-end space-x-5">
                    <a href="/"><ArrowLeft /></a>
                    <a href="/"><ArrowRight /></a>
                </div>
            </div>
            <FeedBack/>
        </div>
    );
    
}