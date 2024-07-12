import Image from "../../../../node_modules/next/image"
import { Typography } from "../typography/typography"

export const Footer:React.FC = () => {
    return <footer className="navbar bg-[linear-gradient(#ffffff10,#ffffff05)] border-t border-stone-800  w-full p-24 max-[900px]:p-14 ">
        <div className="flex  justify-between">
        <div className="w-full flex max-[900px]:flex-wrap  justify-between items-start max-[900px]:gap-10 gap-20 ">
            <div className="w-3/6 flex max-[900px]:w-full justify-start gap-14">
            
            <div className="flex flex-wrap justify-between w-full max-[900px]:justify-start max-[900px]:gap-14  gap-8 order-2">
            <div className="p-6 w-1/3 h-min max-w-36	min-w-[100px] min-h-[100px]  tr rounded-3xl order-first">
               <Image width="500" height="500" alt="logo web app" src="/sl.png" className="w-[100%] h-[100%]"/>

               </div>
                <div className="flex flex-col">
               
                    <Typography className="mb-2 hover:text-white transition ease-in-out max-[1250px]:text-lg"  theme="gray" variant="body-lg" weight="extralight" fontFamily="SanFrancisco">
                    Accueil
                    </Typography>
                    <Typography className="mb-2 hover:text-white transition ease-in-out max-[1250px]:text-lg"  theme="gray" variant="body-lg" weight="extralight" fontFamily="SanFrancisco">
                    CV
                    </Typography>
                    <Typography className="mb-2 hover:text-white transition ease-in-out max-[1250px]:text-lg"  theme="gray" variant="body-lg" weight="extralight" fontFamily="SanFrancisco">
                    Projets
                    </Typography>
                    <Typography className="mb-2 hover:text-white transition ease-in-out max-[1250px]:text-lg"  theme="gray" variant="body-lg" weight="extralight" fontFamily="SanFrancisco">
                    Contact
                    </Typography>
                  
                </div>
                <div className="flex flex-col gap-2">
               
           <Typography className="mb-2 hover:text-white transition ease-in-out max-[1250px]:text-lg"  theme="gray" variant="body-lg" weight="extralight" fontFamily="SanFrancisco">
           Github
           </Typography>
           <Typography className="mb-2 hover:text-white transition ease-in-out max-[1250px]:text-lg"  theme="gray" variant="body-lg" weight="extralight" fontFamily="SanFrancisco">
           Gitlab
           </Typography>
        
         
       </div>
       <div className="flex flex-col gap-2">
     
           <Typography className="mb-2 hover:text-white transition ease-in-out max-[1250px]:text-lg"  theme="gray" variant="body-lg" weight="extralight" fontFamily="SanFrancisco">
           Linkedin
           </Typography>
           <Typography className="mb-2 hover:text-white transition ease-in-out max-[1250px]:text-lg"  theme="gray" variant="body-lg" weight="extralight" fontFamily="SanFrancisco">
           Behance
           </Typography>
         
         
       </div>
                </div>
            </div>

            <div className="w-3/6  max-[900px]:w-full order-last  gap-8 grid grid-col  items-center grayscaled">
                <div className="flex w-full gap-8">
            <div className="bg-[url('/behance-wallp.png')] w-2/3 h-[120px] bgz bg-cover bg-center relative rounded-2xl">
            <div className="overlait"></div>
            </div>
            <div className="bg-[url('/gt-wallp.png')] w-1/3 h-[120px] bg-cover bgz bg-center relative  rounded-2xl">
            <div className="overlait"></div>
          </div>
          <div className="bg-[url('/gh-wallp.png')] w-1/3 h-[120px] bg-cover bgz bg-center relative rounded-2xl">
          <div className="overlait"></div>
          </div>
          </div>
       
                                
            </div>
            
        </div>
        </div>
        <div className="mt-10 flex items-center justify-start gap-10">
        <Typography theme="gray" fontFamily="Montserrat" variant="body-sm" weight="extralight" className="max-[900px]:text-lg">
        © 2024 LOURDEL, Inc. All rights reserved.
        </Typography>
        </div>
    </footer>
}