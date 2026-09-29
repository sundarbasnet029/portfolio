import { useScramble } from "use-scramble";


export function ScrambleText({ text, socialId }) {
  const { ref, replay } = useScramble({
    text,
    playOnMount: false,
  });

  return (
    <p 
    ref={ref}
    onPointerEnter={replay}
    // onPointerLeave={replay}
    />

  );
}