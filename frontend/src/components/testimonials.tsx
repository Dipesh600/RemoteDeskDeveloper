import {ReviewCard} from "./reviewCard"

export function Testimonials() {
    return (
      <div className="relative bg-white dark:bg-black h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        {/* Heading Above the Image */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-12 text-center ">
          What Our Clients Say
        </h2>
  
        {/* Background Image with Testimonials */}
        {/* render the card  */}

        <div className="flex gap-10">
          <ReviewCard clientName={""} clientTitle={"John Doe"} reviewText={"kjbfkjbakfjbaskfbaskjbfsadkj"}  rating={5}/>
          {/* spacer div  */}
          <div className=""/>
          <ReviewCard clientName={""} clientTitle={"John Doe"} reviewText={"kjbfkjbakfjbaskfbaskjbfasfkb"} rating={5}/>

         
        </div>
      </div>
    );
  }
  