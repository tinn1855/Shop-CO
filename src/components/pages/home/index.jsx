import { GridCategories } from "../../feature/home/grid-categories";
import { HomeBrands } from "../../feature/home/home-brands";
import { HomeFeedback } from "../../feature/home/home-feedback";
import { HomeNewArrival } from "../../feature/home/home-new-arrival";
import { HomeSlider } from "../../feature/home/home-slider";
import { HomeTopSelling } from "../../feature/home/home-top-selling";

export function PageHome() {
    return <>
        <HomeSlider />
        <HomeBrands />
        <div className="container mx-auto px-5 mt-16">                
            <HomeNewArrival />
            <div className="border-b my-10"></div>
            <HomeTopSelling />
        </div>
        <GridCategories />
        <HomeFeedback />
    </>
}