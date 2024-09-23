import { Hero } from "react-daisyui"

const SectionOne = ()=> {
   return(
      <Hero>
         <Hero.Content className="text-center">
         <div className="max-w-md">
            <h1 className="text-5xl font-bold">This is section one</h1>
            <p className="py-6 text-xl my-4">
               This is a description
            </p>
         </div>
         </Hero.Content>
      </Hero>
   )
}

export default SectionOne