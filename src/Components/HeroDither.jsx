import { Dithering } from '@paper-design/shaders-react'
import { useShaderColors } from './useShaderColors'

export function HeroDither(){
    const { shaderBg, shaderAccent } = useShaderColors();
    return(
        <div className="border border-solid border-border-strong bg-shader-bg">
          <Dithering
            speed={0.51}
            shape="warp"
            type="4x4"
            size={1.5}
            scale={0.51}
            frame={1244630.11}
            colorBack={shaderBg}
            colorFront={shaderAccent}
            className="h-[200px] w-full"
          />
        </div>
    )
}