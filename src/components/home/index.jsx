import Achievements from "./achievements/Achievements";
import Blogs from "./blogs/Blogs";
import Cover from "./cover/Cover";
import Doctors from "./doctors/Doctors";
import IntroSection from "./intro/IntroSection";
import ReviewSection from "./review/ReviewSection";
function Home() {
    return (
        <>
            <Cover />
            <Achievements />
            <Doctors />
            <Blogs />
            <IntroSection />
            <ReviewSection />
        </>
    )
}
export default Home;
