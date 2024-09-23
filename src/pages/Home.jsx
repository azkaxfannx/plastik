import HeroComponent from "../components/HeroComponent"
import SectionOne from "../components/SectionOne"
import SectionTwo from "../components/SectionTwo"

const Home = ()=> {
   return(
      <div>
         <div className="flex flex-col gap-12">
            <HeroComponent/>
            <SectionOne/>
            <SectionTwo/>
         </div>
      </div>
   )
}

export default Home 