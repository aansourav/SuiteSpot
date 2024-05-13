import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Summary from "@/components/hotel/details/Summary";
import { getHotelById } from "@/database/queries";

const HotelDetailsPage = async ({ params: { id } }) => {
    const hotel = await getHotelById(id);
    return (
        <>
            <Summary hotel={hotel} />
            <Gallery gallery={hotel?.gallery} />
            <Overview overview={hotel?.overview} />
        </>
    );
};

export default HotelDetailsPage;