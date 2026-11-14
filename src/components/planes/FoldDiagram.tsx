import type { DiagramVariant } from "@/data/planes/types";

interface FoldDiagramProps {
  variant: DiagramVariant;
  title: string;
  className?: string;
}

function Arrow({
  x,
  y,
  rotation = 0,
}: {
  x: number;
  y: number;
  rotation?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotation})`}>
      <path
        d="M0 12 L0 -12 M0 -12 L-5 -5 M0 -12 L5 -5"
        stroke="#2563EB"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

function Sheet({
  points,
  fill = "#F8F4EC",
}: {
  points: string;
  fill?: string;
}) {
  return (
    <polygon
      points={points}
      fill={fill}
      stroke="#4B5563"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  );
}

function Crease({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="#9CA3AF"
      strokeWidth="1.5"
      strokeDasharray="6 5"
    />
  );
}

function diagramContent(variant: DiagramVariant) {
  switch (variant) {
    case "blank-portrait":
      return (
        <>
          <Sheet points="70,20 250,20 250,300 70,300" />
        </>
      );
    case "center-crease-vertical":
      return (
        <>
          <Sheet points="70,20 250,20 250,300 70,300" />
          <Crease x1={160} y1={20} x2={160} y2={300} />
          <Arrow x={110} y={160} rotation={90} />
          <Arrow x={210} y={160} rotation={-90} />
        </>
      );
    case "top-corners-to-center":
      return (
        <>
          <Sheet points="70,100 160,20 250,100 250,300 70,300" />
          <Crease x1={160} y1={20} x2={160} y2={300} />
          <Arrow x={100} y={70} rotation={45} />
          <Arrow x={220} y={70} rotation={-45} />
        </>
      );
    case "top-triangle-down":
      return (
        <>
          <Sheet points="70,40 250,40 250,300 70,300" />
          <Sheet points="90,40 230,40 160,130" fill="#EFE8DA" />
          <Crease x1={160} y1={40} x2={160} y2={300} />
          <Arrow x={160} y={90} rotation={180} />
        </>
      );
    case "nose-fold-small":
      return (
        <>
          <Sheet points="70,20 250,20 250,300 70,300" />
          <Sheet points="70,20 250,20 250,70 70,70" fill="#EFE8DA" />
          <Crease x1={70} y1={70} x2={250} y2={70} />
          <Arrow x={160} y={50} rotation={180} />
        </>
      );
    case "outer-edges-to-center":
      return (
        <>
          <Sheet points="100,30 160,20 220,30 240,300 80,300" />
          <Crease x1={160} y1={20} x2={160} y2={300} />
          <Arrow x={120} y={140} rotation={55} />
          <Arrow x={200} y={140} rotation={-55} />
        </>
      );
    case "wings-down-dart":
      return (
        <>
          <Sheet points="120,40 200,40 230,280 90,280" />
          <Sheet points="120,40 200,40 230,160 90,160" fill="#EFE8DA" />
          <Crease x1={160} y1={40} x2={160} y2={280} />
          <Arrow x={160} y={120} rotation={180} />
        </>
      );
    case "finished-dart":
      return (
        <>
          <Sheet points="160,30 250,250 210,270 160,180 110,270 70,250" fill="#F3EDE2" />
          <Crease x1={160} y1={30} x2={160} y2={220} />
        </>
      );
    case "wide-wings-open":
      return (
        <>
          <Sheet points="40,80 280,80 260,280 60,280" />
          <Crease x1={160} y1={80} x2={160} y2={280} />
          <Arrow x={90} y={160} rotation={-20} />
          <Arrow x={230} y={160} rotation={20} />
        </>
      );
    case "finished-glider":
      return (
        <>
          <Sheet points="40,100 280,100 240,260 80,260" fill="#F3EDE2" />
          <Sheet points="130,60 190,60 180,100 140,100" fill="#EFE8DA" />
          <Crease x1={160} y1={60} x2={160} y2={260} />
        </>
      );
    case "accordion-nose":
      return (
        <>
          <Sheet points="90,50 160,20 230,50 250,300 70,300" />
          <Sheet points="140,35 180,35 170,70 150,70" fill="#E7DFD0" />
          <Crease x1={160} y1={20} x2={160} y2={300} />
          <Arrow x={160} y={55} rotation={180} />
        </>
      );
    case "lock-fold":
      return (
        <>
          <Sheet points="95,60 160,25 225,60 245,300 75,300" />
          <Sheet points="140,110 180,110 160,145" fill="#D6CBB8" />
          <Crease x1={160} y1={25} x2={160} y2={300} />
          <Arrow x={160} y={130} rotation={0} />
        </>
      );
    case "finished-nakamura":
      return (
        <>
          <Sheet points="160,25 255,245 215,270 160,175 105,270 65,245" fill="#F3EDE2" />
          <Sheet points="150,55 170,55 165,85 155,85" fill="#D6CBB8" />
          <Crease x1={160} y1={25} x2={160} y2={210} />
        </>
      );
    case "diagonal-fold":
      return (
        <>
          <Sheet points="70,20 250,20 250,300 70,300" />
          <Crease x1={70} y1={20} x2={200} y2={160} />
          <Arrow x={120} y={80} rotation={50} />
        </>
      );
    case "canard-nose":
      return (
        <>
          <Sheet points="100,40 220,40 245,300 75,300" />
          <Sheet points="120,40 200,40 190,85 130,85" fill="#EFE8DA" />
          <Crease x1={160} y1={40} x2={160} y2={300} />
          <Arrow x={130} y={70} rotation={20} />
          <Arrow x={190} y={70} rotation={-20} />
        </>
      );
    case "finished-stunt":
      return (
        <>
          <Sheet points="160,35 250,230 200,275 160,190 120,275 70,230" fill="#F3EDE2" />
          <path
            d="M120 250 Q160 210 200 250"
            stroke="#2563EB"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 4"
          />
        </>
      );
    case "boomerang-shape":
      return (
        <>
          <Sheet points="70,60 200,40 260,180 210,280 90,250" fill="#F3EDE2" />
          <Arrow x={230} y={120} rotation={120} />
          <path
            d="M80 220 Q160 120 240 160"
            stroke="#2563EB"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5 4"
          />
        </>
      );
    case "loop-tail":
      return (
        <>
          <Sheet points="110,40 210,40 240,260 80,260" />
          <path
            d="M95 245 L80 220 M225 245 L240 220"
            stroke="#2563EB"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <Arrow x={90} y={230} rotation={-30} />
          <Arrow x={230} y={230} rotation={30} />
        </>
      );
    case "hammer-nose":
      return (
        <>
          <Sheet points="70,20 250,20 250,300 70,300" />
          <Sheet points="70,20 250,20 250,110 70,110" fill="#E7DFD0" />
          <Crease x1={70} y1={110} x2={250} y2={110} />
          <Arrow x={160} y={70} rotation={180} />
        </>
      );
    case "finished-wide-glider":
      return (
        <>
          <Sheet points="25,110 295,110 250,255 70,255" fill="#F3EDE2" />
          <Sheet points="135,55 185,55 175,110 145,110" fill="#EFE8DA" />
          <Crease x1={160} y1={55} x2={160} y2={255} />
        </>
      );
    default:
      return <Sheet points="70,20 250,20 250,300 70,300" />;
  }
}

export function FoldDiagram({ variant, title, className = "" }: FoldDiagramProps) {
  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] ${className}`}
    >
      <svg
        viewBox="0 0 320 320"
        role="img"
        aria-label={`Folding diagram: ${title}`}
        className="h-auto w-full"
      >
        <rect width="320" height="320" fill="#FBF9F5" />
        {diagramContent(variant)}
      </svg>
      <figcaption className="border-t border-[var(--border)] px-4 py-2 text-center text-sm text-[var(--muted)]">
        {title}
      </figcaption>
    </figure>
  );
}
