import { Hero, Button } from "react-daisyui"

const HeroComponent = ()=> {
   return(
      <Hero className="my-12">
         <Hero.Content className="text-center">
         <div className="max-w-md">
            <h1 className="text-9xl font-bold font-write">Hello there</h1>
            <p className="py-6 text-xl my-4">
               Getting Started Getting freestyle 
            </p>

            <Button className="bg-yellow-200 border-2 border-black rounded-md hover:shadow-lg hover:shadow-black/50 hover:border-black hover:bg-yellow-200">Get Started and Freestyle</Button>
         </div>
         </Hero.Content>
      </Hero>
   )
}

export default HeroComponent