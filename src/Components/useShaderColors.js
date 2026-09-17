import { useEffect, useState } from "react";

function readShaderColors() {
  if (typeof document === "undefined") {
    return { shaderBg: "#171512", shaderAccent: "#483604" };
  }
  const styles = getComputedStyle(document.documentElement);
  return {
    shaderBg: styles.getPropertyValue("--color-shader-bg").trim() || "#171512",
    shaderAccent: styles.getPropertyValue("--color-shader-accent").trim() || "#483604",
  };
}

export function useShaderColors() {
  const [colors, setColors] = useState(readShaderColors);

  useEffect(() => {
    const update = () => setColors(readShaderColors());
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });
    return () => observer.disconnect();
  }, []);

  return colors;
}
