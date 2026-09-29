import { useEffect, useState } from "react";

const MINOR_GAP = 10;
const MAJOR_GAP = 100;
const TOP_RULER_HEIGHT = 24;
const LEFT_RULER_WIDTH = 32;

function useViewportSize() {
  const [size, setSize] = useState(() =>
    typeof window === "undefined"
      ? { width: 0, height: 0 }
      : {
          width: window.innerWidth,
          height: window.innerHeight,
        }
  );
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const measure = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      // Measure the content column (not the document): the ruler itself
      // extends the scrollable area, so sizing from scrollHeight ratchets
      // upward and leaves blank space at the page bottom.
      const column = document.getElementById("portfolio-column");
      const contentHeight = column
        ? column.offsetHeight
        : Math.max(
            document.documentElement.scrollHeight - TOP_RULER_HEIGHT,
            0
          );
      setPageHeight(Math.max(contentHeight, 0));
    };

    measure();

    window.addEventListener("resize", measure);
    const column = document.getElementById("portfolio-column");
    const observer = new ResizeObserver(measure);
    if (column) observer.observe(column);

    return () => {
      window.removeEventListener("resize", measure);
      observer.disconnect();
    };
  }, []);

  return { ...size, pageHeight };
}

function HorizontalRuler({ width }) {
  const ticks = [];

  for (let x = 0; x <= width; x += MINOR_GAP) {
    ticks.push(x);
  }

  return (
    <svg
      width={width}
      height={TOP_RULER_HEIGHT}
      aria-hidden="true"
      className="block font-decorative text-border-soft"
    >
      {ticks.map((x) => {
        const isMajor = x % MAJOR_GAP === 0;
        const isMid = x % (MAJOR_GAP / 2) === 0;

        const y1 = isMajor ? 12 : isMid ? 16 : 19;

        return (
          <g key={x}>
            <line
              x1={x}
              y1={y1}
              x2={x}
              y2={TOP_RULER_HEIGHT}
              stroke="currentColor"
              strokeWidth="1"
            />

            {isMajor && (
              <text
                x={x}
                y={12}
                textAnchor="middle"
                fontSize="9"
                className="fill-text-tertiary"
              >
                {x}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

function VerticalRuler({ height }) {
  const ticks = [];

  for (let y = 0; y <= height; y += MINOR_GAP) {
    ticks.push(y);
  }

  return (
    <svg
      width={LEFT_RULER_WIDTH}
      height={height}
      aria-hidden="true"
      className="block font-decorative text-border-soft"
    >
      {ticks.map((y) => {
        const isMajor = y % MAJOR_GAP === 0;
        const isMid = y % (MAJOR_GAP / 2) === 0;

        const x1 = isMajor ? 16 : isMid ? 16 : 24;

        return (
          <g key={y}>
            <line
              x1={x1}
              y1={y}
              x2={LEFT_RULER_WIDTH}
              y2={y}
              stroke="currentColor"
              strokeWidth="1"
            />

            {isMajor && (
              <text
                x={12}
                y={y}
                textAnchor="middle"
                fontSize="9"
                className="fill-text-tertiary"
                transform={`rotate(-90 12 ${y})`}
              >
                {y}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export function Rulers() {
  const { width, pageHeight } = useViewportSize();

  return (
    <>
      {/* Horizontal ruler */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-90 hidden h-6 overflow-hidden  bg-bg-0 md:block">
        <HorizontalRuler width={width} />
      </div>

      {/* Vertical ruler — scrolls with the page */}
      <div
        className="pointer-events-none absolute left-0 top-6 z-90 hidden w-10 overflow-hidden bg-bg-0 md:block"
        style={{ height: pageHeight }}
      >
        <VerticalRuler height={pageHeight} />
      </div>
    </>
  );
}