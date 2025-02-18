import { FeedBackProductDetail } from "@/src/components/molecules/feedback-product-detail";
import { Button } from "@/src/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select";
import { SlidersHorizontal } from "lucide-react";

export function TabRating() {
    return (
        <div>
            <div className='flex justify-between items-center'>
                    <div className='flex'>
                        <h3 className='font-bold text-2xl'>
                            All Reviews <span className='text-base font-normal'>(451)</span> 
                        </h3>
                    </div>
                    <div className='flex items-center space-x-2.5'>
                        <div className='p-3 bg-[#f0f0f0] rounded-full'>
                            <SlidersHorizontal />
                        </div>
                        <div>
                        <Select>
                            <SelectTrigger className="bg-[#f0f0f0] py-6 font-medium px-5 rounded-full">
                                <SelectValue placeholder="Latest" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="latest">Latest</SelectItem>
                                <SelectItem value="betsseller">Best Seller</SelectItem>
                                <SelectItem value="oldest">Oldest</SelectItem>
                            </SelectContent>
                        </Select>
                        </div>
                        <Button className="rounded-full py-6 font-medium">Write a Review</Button>
                    </div>
                </div>
                <FeedBackProductDetail/>
        </div>
    )
}