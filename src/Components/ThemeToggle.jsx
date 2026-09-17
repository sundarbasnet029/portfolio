import { useEffect, useState } from "react";

const lightIcon = (
    <svg className="text-text-tertiary hover:text-text-primary" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_295_475)">
    <path d="M8.00016 1.33325V2.66659M8.00016 13.3333V14.6666M3.28683 3.28659L4.22683 4.22659M11.7735 11.7733L12.7135 12.7133M1.3335 7.99992H2.66683M13.3335 7.99992H14.6668M4.22683 11.7733L3.28683 12.7133M12.7135 3.28659L11.7735 4.22659M10.6668 7.99992C10.6668 9.47268 9.47292 10.6666 8.00016 10.6666C6.5274 10.6666 5.3335 9.47268 5.3335 7.99992C5.3335 6.52716 6.5274 5.33325 8.00016 5.33325C9.47292 5.33325 10.6668 6.52716 10.6668 7.99992Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_295_475">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
)

const darkIcon = (
    <svg className="text-text-tertiary hover:text-text-primary" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M13.99 8.324C13.9275 9.48143 13.5311 10.596 12.8487 11.5329C12.1663 12.4699 11.2272 13.1891 10.1447 13.6037C9.06226 14.0183 7.88291 14.1104 6.74921 13.869C5.61551 13.6276 4.576 13.063 3.75633 12.2434C2.93667 11.4239 2.37195 10.3844 2.13044 9.25074C1.88892 8.11706 1.98096 6.9377 2.39541 5.85521C2.80987 4.77273 3.529 3.83346 4.46588 3.15096C5.40276 2.46846 6.51727 2.07194 7.67469 2.00933C7.94469 1.99467 8.08603 2.316 7.94269 2.54467C7.46329 3.3117 7.25801 4.21858 7.36036 5.1173C7.46271 6.01602 7.86664 6.85352 8.50624 7.49312C9.14584 8.13272 9.98334 8.53665 10.8821 8.639C11.7808 8.74135 12.6877 8.53607 13.4547 8.05667C13.684 7.91333 14.0047 8.054 13.99 8.324Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
)

 export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? lightIcon : darkIcon}
    </button>
  );
}
