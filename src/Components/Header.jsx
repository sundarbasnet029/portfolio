import { useEffect, useState } from "react";
import pulse from "../Assets/pulse.gif";
import { ThemeToggle } from "./ThemeToggle";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return <span>{formattedTime}</span>;
}

export default Clock;

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 ">
      <div className="left-section flex items-center gap-3  justify-start">
        <img src={pulse} className="w-4 h-4" />
        <p className="text-text-tertiary  text-14-decorative">
          <Clock />
        </p>
      </div>
      <ThemeToggle />
    </header>
  );
}
