import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { TabProductDetail } from '../../feature/product-detail/tabs/tab-product-detail';
import { TabRating } from '../../feature/product-detail/tabs/tab-rating-review';
import { TabFAQs } from '../../feature/product-detail/tabs/tab-faqs';


const ProductDetailTabs = () => {
  return (
    <div>
        <Tabs defaultValue="rating" className="mt-14 lg:mt-20">
            <TabsList className='w-full lg:text-xl mb-5 lg:mb-7'>
                <TabsTrigger className='w-full pr-5 lg:w-1/3' value="productdetails">Product Details</TabsTrigger>
                <TabsTrigger className='w-full pr-5 lg:w-1/3' value="rating">Rating & Reviews</TabsTrigger>
                <TabsTrigger className='w-full lg:w-1/3' value="faqs">FAQs</TabsTrigger>
            </TabsList>
            <TabsContent value="productdetails">
                <TabProductDetail/>
            </TabsContent>
            <TabsContent value="rating">
                <TabRating/>
            </TabsContent>
            <TabsContent value="faqs">
                <TabFAQs/>
            </TabsContent>
        </Tabs>
    </div>
  );
};

export default ProductDetailTabs;
