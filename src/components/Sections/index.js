import {Divider} from "@/components/Divider"
import { BButton} from '@/components/Button'
export const Footer = ({}) => {
    const SocialLinks = [
      {
        name: 'X',
        url: '',
      },
      {
        name: 'Tiktok',
        url: '',
      },
      {
        name: 'Instagram',
        url: '',
      },
      {
        name: 'Discord',
        url: '',
      },
      {
        name: 'Github',
        url: '',
      },
  
    ]
  
    
  
    const Features = [
      {
        name: 'Vehicles',
        url: '',
        status: 'Coming Soon',
      },
      {
        name: 'Engines',
        url: '',
        status: 'Live',
      },
      {
        name: 'Destinations',
        url: '',
        status: 'Coming Soon',
      },
      {
        name: 'Trips',
        url: '',
        status: 'Coming Soon',
      },
      {
        name: 'Contacts',
        url: '',
        status: 'Live',
      },
    ]
    return(
      <div className="w-[100%] mb-0 text-center text-White mt-[70px] py-2 px-2 h-auto lg:h-[400px]" id="bg1">
        <div className="flex ">
        <div className="w-[25%]   ml-auto mr-auto">
            <div className="ml-0 mr-auto">
              <div className="lg:text-2xl text-base font-extrabold">Go Space</div>
            </div>
        </div>
        <div className="w-[35%]  ml-auto mr-auto">
            <div className="ml-0 mr-auto">
              <div className="lg:text-xl text-base font-extrabold mb-3 lg:mb-[30px]">Socials</div>
              { SocialLinks.map((social,i) => (
                  <div key={i} className="lg:text-md text-sm lg:mt-6 mt-3 font-light">{social.name}</div>
              ))}
            </div>
        </div>
        <div className="w-[40%] mb-10 ml-auto mr-auto">
            <div className="ml-0 mr-auto">
              <div className="lg:text-xl text-base font-extrabold flex mb-3 lg:mb-[30px]">Features</div>
              { Features.map((feature,i) => (
                <div key={i} className="flex flex-row">
                  <div className=" flex lg:text-md text-sm lg:mt-6 mt-3 font-light">
                    <p className="ml-1 lg:ml-1 mr-1 lg:mr-1">{feature.name}</p>
                    <div className={` ${feature.status === 'Coming Soon' && 'lg:w-[105px] w-[60px]'} ${feature.status === 'Coming Soon' && 'bg-slate-400'} ${feature.status === 'Coming Soon' && 'text-black'} w-[49px] h-[14px]  rounded-3xl lg:text-[10px] text-[8px]  text-white bg-green-400 `}>{feature.status}</div>
                  </div>
                </div>
              ))}
            </div>
        </div>
        </div>
        <Divider />
        <div>
        <div className="mb-2 lg:mb-3  mt-4 font-semibold">
                <p className="w-[90%] ">
                  © {new Date().getFullYear()} GoSpace
                </p>
        <div className="mb-2 lg:mb-3 ml-5 flex flex-row font-semibold">
            
        </div>
        </div>
        </div>
      </div>
    )
  }
  
  export const Subscribe = () => {
    return(
      <div className="w-[100%] mb-5 lg:mt-[30px] text-xl lg:text-2xl items-center text-center text-black h-auto lg:h-[400px]" id="">
        <div>
          <p className="font-extralight mt-[60px] text-xl">Subscribe to GoSpace</p>
        </div>
        <div className="lg:w-[60%] flex w-[88%] ml-auto mr-auto mt-[40px]">
          <p className="font-extrabold text-2xl  lg:text-4xl">
            Subscribe to our newsletter to get all the updates and news about the Upcoming Apollo`s.  
          </p>
        </div>
        <div className="lg:w-[60%] flex w-[92%] ml-auto rounded-xl mr-auto mt-16 mb-16 lg:mt-[70px]">
          <input type="text" placeholder="ahmadou@gospace.earth" className="w-[80%] bg-transparent  px-2 mr-1 rounded-lg border-black border " />
          <BButton text={'Subscribe'} />
        </div>
      </div>
    )
  }

  export const Powered = () => {
    const sponsorers = [
        {
            name: 'NASA',
            url: 'nasa2.png'
        },
        {
            name: 'SpaceApps',
            url: 'spacea.png'
        },
    ]
    return(
      <div className="w-[100%] mb-5 mt-[90px] lg:mt-[90px] text-xl lg:text-2xl items-center text-center text-black h-auto lg:h-[400px]" id="">
        <div>
          <p className="font-extralight mb-[80px] mt-[60px] text:xl lg:text-3xl">Sponsored By</p>
        </div>
        <div className="lg:w-[60%] w-[88%] flex ml-auto mr-auto mt-[40px]">
          {sponsorers.map((spons, i) => (
             <div key={i} className="ml-auto mr-auto py-1 px-1 h-[80%] w-[90%]">
                <img alt={spons.name} className='w-[45%] h-[42%]' src={`./${spons.url}`} />
                <p className="font-extralight text-2xl  lg:text-3xl">
                  {spons.name}  
                </p>
             </div>
          ))}
        </div>
      </div>
    )
  }
  
  