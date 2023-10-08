import { ParallaxProvider} from 'react-scroll-parallax'


export const ParaProvider = ({children}) => {
    return(
        <>
         <ParallaxProvider >
            {children}
         </ParallaxProvider>
        </>
    )
}