import { Dithering } from '@paper-design/shaders-react'
import { useShaderColors } from './useShaderColors'


export function FooterDither(){
    const { shaderBg, shaderAccent } = useShaderColors();
    return(
        <div className="border border-solid border-border-strong bg-shader-bg">
          <Dithering
            speed={0.66}
            shape="wave"
            type="4x4"
            size={1.5}
            scale={1.19}
            frame={440355.47}
            colorBack={shaderBg}
            colorFront={shaderAccent}
            className="h-[240px] w-full"
          />
        </div>
    )
}