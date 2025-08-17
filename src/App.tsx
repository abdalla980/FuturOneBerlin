import {Homepage} from "./Homepage/Homepage.tsx";
import {Aboutus} from "./About Us/Aboutus.tsx";
import {Ourapproach} from "./Our Approach/Ourapproach.tsx";
import {OurTeam} from "./OurTeam/OurTeam.tsx";
import {Footer} from "./Footer/footer.tsx";

export const App = () => {
    return (
        <div>
<Homepage/>
<Aboutus/>
<Ourapproach/>
<OurTeam/>
<Footer/>
        </div>
    )
}
