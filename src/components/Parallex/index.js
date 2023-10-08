import { Parallax, ParallaxLayer } from '@react-spring/web'

export function Para() {
  return (
    <Parallax pages={1} style={{ top: '0', left: '0' }}>
      <ParallaxLayer offset={0} speed={2.5}>
        <p>Parallax</p>
      </ParallaxLayer>
    </Parallax>
  )
}