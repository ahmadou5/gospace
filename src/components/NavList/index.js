import { Button } from "../Button"
import { useRouter } from "next/router"

export const NavList = () => {
    const Pages = [
        {
          name: 'Vehicles',
          url: '',
          status: 'Coming',
        },
        {
          name: 'Engines',
          url: '',
          status: 'Live',
        },
        {
          name: 'Destination',
          url: '',
          status: 'Coming Soon',
        },
        {
          name: 'Trips',
          url: '',
          status: 'Coming Soon',
        },
        {
          name: 'Contact',
          url: '',
          status: 'Live',
        },
      ]

    const router = useRouter()
    
    return(
    <div className="w-[100%] bg-gray-100 py-6 px-4 text-black h-[700px] text-center lg:hidden">
        <div className="w-[80%] h-[80%] py-6 px-4  ml-auto mr-auto mb-10">
            <div className="mb-28">
            { Pages.map((feauture, i) => (
            <div key={i} className=" h-10 text-xl cursor-pointer hover:font-light  font-bold py-1 mt-2 mb-2 ">{feauture.name}</div>
            ))}
            </div>
            <Button text={'Go to Space'}/>
        </div>
    </div>
    )
}