import type { PaperAirplane } from "./planes/types";
import { airplanes } from "./planes/airplanes";

export interface CategoryPage {
  slug: string;
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  comparisonTitle: string;
  comparisonPoints: Array<{ label: string; detail: string }>;
  filter: (plane: PaperAirplane) => boolean;
  faq: Array<{ question: string; answer: string }>;
  relatedPaths: Array<{ href: string; label: string }>;
}

export const categoryPages: CategoryPage[] = [
  {
    slug: "longest-flying",
    path: "/longest-flying-paper-airplane",
    title: "Long Flight Time",
    metaTitle: "Longest Flying Paper Airplane Designs | Paper Airplane Lab",
    metaDescription:
      "Explore paper airplane designs chosen for glide and air time. Learn what helps a plane stay aloft and find folding guides for calm-air flying.",
    h1: "Longest Flying Paper Airplane Designs",
    intro: [
      "“Longest flying” here means designs that favor glide and air time, not a published world-record claim for every throw.",
      "Wide wings, gentle launches, and careful elevator trim matter more than raw throwing power. Use these planes in still indoor air when possible.",
    ],
    comparisonTitle: "What helps a paper airplane stay aloft?",
    comparisonPoints: [
      {
        label: "Wing area",
        detail: "More wing area can create lift at lower speeds, which helps float time.",
      },
      {
        label: "Soft launch",
        detail: "Hard upward throws often stall high-lift wings immediately.",
      },
      {
        label: "Trim",
        detail: "Tiny trailing-edge bends fine-tune whether the nose rises or drops.",
      },
    ],
    filter: (plane) =>
      plane.categoryTags.includes("flight-time") ||
      plane.flightType.includes("Glider"),
    faq: [
      {
        question: "What is the longest flying paper airplane?",
        answer:
          "World records change over time and depend on official rules. On this site we highlight glider-style designs for everyday air-time practice rather than promising a record.",
      },
      {
        question: "Should I throw as hard as possible?",
        answer:
          "Usually no. Gliders prefer a smooth push. Save hard throws for distance darts.",
      },
    ],
    relatedPaths: [
      { href: "/paper-glider", label: "Paper gliders" },
      { href: "/challenges/flight-time", label: "Flight time challenge" },
      { href: "/paper-airplane-science/what-is-lift", label: "What is lift?" },
    ],
  },
  {
    slug: "easy",
    path: "/easy-paper-airplane",
    title: "Easy to Fold",
    metaTitle: "Easy Paper Airplane Designs for Beginners | Paper Airplane Lab",
    metaDescription:
      "Start with easy paper airplane designs that use short fold sequences, clear steps, and forgiving flight behavior.",
    h1: "Easy Paper Airplane Designs",
    intro: [
      "Easy planes keep the fold count low and the shapes familiar. They are the fastest way to get a successful first flight.",
      "Once these feel comfortable, move to locked-nose darts or wider experimental gliders.",
    ],
    comparisonTitle: "What makes a paper airplane easy?",
    comparisonPoints: [
      {
        label: "Few steps",
        detail: "Fewer creases means fewer places for asymmetry to sneak in.",
      },
      {
        label: "Familiar shapes",
        detail: "Corner-to-center folds are easier to judge by eye.",
      },
      {
        label: "Forgiving flight",
        detail: "Beginner planes still fly when the throw is imperfect.",
      },
    ],
    filter: (plane) =>
      plane.difficulty === "Easy" || plane.categoryTags.includes("easy"),
    faq: [
      {
        question: "What is the easiest paper airplane to make?",
        answer:
          "The Beginner Plane on this site uses the shortest sequence. The Classic Dart is the best next step.",
      },
      {
        question: "Do easy planes fly well?",
        answer:
          "Yes enough for learning and fun. They are not always the best contest distance planes.",
      },
    ],
    relatedPaths: [
      { href: "/paper-airplanes-for-kids", label: "Planes for kids" },
      { href: "/folding-guides", label: "Folding guides" },
      { href: "/paper-airplanes/beginner-plane", label: "Beginner Plane" },
    ],
  },
  {
    slug: "glider",
    path: "/paper-glider",
    title: "Paper Gliders",
    metaTitle: "Paper Glider Designs & Folding Guides | Paper Airplane Lab",
    metaDescription:
      "Discover paper glider designs with wide wings, soft launches, and tips for stable indoor glides.",
    h1: "Paper Glider Designs",
    intro: [
      "Paper gliders trade speed for lift. They shine in classrooms, living rooms, and calm halls.",
      "Focus on wrinkle-free wings and matched sides. Gliders advertise every asymmetry.",
    ],
    comparisonTitle: "Glider vs dart at a glance",
    comparisonPoints: [
      {
        label: "Launch",
        detail: "Gliders like soft pushes; darts like firmer level throws.",
      },
      {
        label: "Wings",
        detail: "Gliders use more area; darts stay narrower and swept.",
      },
      {
        label: "Goal",
        detail: "Gliders chase air time and smooth paths; darts chase distance and speed.",
      },
    ],
    filter: (plane) => plane.flightType.includes("Glider"),
    faq: [
      {
        question: "Why does my glider stall?",
        answer:
          "Often the throw is too hard or too steep, or elevators are bent up too far. Soften the launch first.",
      },
      {
        question: "Can gliders work outdoors?",
        answer:
          "Only in very calm air. Light wind usually overwhelms lightweight paper gliders.",
      },
    ],
    relatedPaths: [
      { href: "/longest-flying-paper-airplane", label: "Long flight time planes" },
      { href: "/paper-airplane-science/how-wing-shape-changes-flight", label: "Wing shape" },
      { href: "/challenges/flight-time", label: "Flight time challenge" },
    ],
  },
  {
    slug: "stunt",
    path: "/stunt-paper-airplane",
    title: "Stunt Planes",
    metaTitle: "Stunt Paper Airplane Designs | Paper Airplane Lab",
    metaDescription:
      "Learn stunt paper airplane designs for loops, curves, and return-path experiments — with honest notes on what trim can and cannot guarantee.",
    h1: "Stunt Paper Airplane Designs",
    intro: [
      "Stunt planes are for experimentation. Loops and returning paths depend on trim and throw, so treat every flight as a test.",
      "Give yourself space, keep people clear, and write down what you change.",
    ],
    comparisonTitle: "Stunt flying basics",
    comparisonPoints: [
      {
        label: "Elevators",
        detail: "Upward trailing-edge bends help create curved pitch paths.",
      },
      {
        label: "Asymmetry",
        detail: "Uneven wings or elevators create turns — useful only when intentional.",
      },
      {
        label: "Space",
        detail: "Loops need height and width; do not practice near fragile objects.",
      },
    ],
    filter: (plane) => plane.flightType.includes("Stunt"),
    faq: [
      {
        question: "Can any paper airplane loop?",
        answer:
          "Many darts can curve with enough elevator and the right throw, but dedicated stunt setups make experimentation clearer.",
      },
      {
        question: "Are boomerang planes guaranteed to return?",
        answer:
          "No. Returning flight is sensitive. Our Boomerang Plane guide explains the idea without promising consistent returns.",
      },
    ],
    relatedPaths: [
      { href: "/challenges/accuracy", label: "Accuracy challenge" },
      { href: "/paper-airplane-science/why-do-paper-airplanes-turn", label: "Why planes turn" },
      { href: "/paper-airplanes/looping-plane", label: "Looping Plane" },
    ],
  },
  {
    slug: "fast",
    path: "/fast-paper-airplane",
    title: "Fast Planes",
    metaTitle: "Fast Paper Airplane Designs | Paper Airplane Lab",
    metaDescription:
      "Find fast paper airplane designs with slim wings and sharp noses built for speed and straight throws.",
    h1: "Fast Paper Airplane Designs",
    intro: [
      "Fast planes usually look like darts: sharp noses, narrower wings, and firm creases.",
      "Speed rewards clean launches. A crooked wing shows up immediately as a veer.",
    ],
    comparisonTitle: "Speed design checklist",
    comparisonPoints: [
      {
        label: "Nose",
        detail: "A sharp or locked nose helps the plane track into the air.",
      },
      {
        label: "Wing drag",
        detail: "Less wing area usually means less drag and less low-speed lift.",
      },
      {
        label: "Throw",
        detail: "Level, confident throws beat exaggerated upward flicks.",
      },
    ],
    filter: (plane) =>
      plane.flightType.includes("Speed") || plane.categoryTags.includes("fast"),
    faq: [
      {
        question: "What is the fastest paper airplane?",
        answer:
          "Speed depends on throw and conditions. Slim darts are the usual starting point for speed feel, not a universal ranking.",
      },
      {
        question: "Why does a fast plane dive?",
        answer:
          "It may need a touch of upward elevator, or the nose may be heavier than the wings can support at that speed.",
      },
    ],
    relatedPaths: [
      { href: "/challenges/distance", label: "Distance challenge" },
      { href: "/longest-flying-paper-airplane", label: "Long flight time planes" },
      { href: "/paper-airplanes/classic-dart", label: "Classic Dart" },
    ],
  },
  {
    slug: "kids",
    path: "/paper-airplanes-for-kids",
    title: "For Kids",
    metaTitle: "Paper Airplanes for Kids | Easy Folding Guides",
    metaDescription:
      "Kid-friendly paper airplane designs with short instructions, easy difficulty levels, and safe indoor flying tips.",
    h1: "Paper Airplanes for Kids",
    intro: [
      "These designs favor quick success: short fold lists, clear shapes, and flights that still feel exciting indoors.",
      "Adults can help with sharp creases, then let kids decorate and test throw gently.",
    ],
    comparisonTitle: "Tips for folding with kids",
    comparisonPoints: [
      {
        label: "Table space",
        detail: "A clear flat table prevents crumpled mid-folds.",
      },
      {
        label: "Match the wings",
        detail: "Make matching the second wing a game — symmetry is the lesson.",
      },
      {
        label: "Soft throws first",
        detail: "Start gentle so kids can watch the flight instead of chasing crashes.",
      },
    ],
    filter: (plane) =>
      plane.categoryTags.includes("kids") ||
      (plane.difficulty === "Easy" && plane.flightType.includes("Beginner")),
    faq: [
      {
        question: "What age can kids fold paper airplanes?",
        answer:
          "Many children can fold simple planes with help once they can align edges. The Beginner Plane is the gentlest on-ramp.",
      },
      {
        question: "Is scissors required?",
        answer:
          "None of the first-version planes on this site require scissors.",
      },
    ],
    relatedPaths: [
      { href: "/easy-paper-airplane", label: "Easy planes" },
      { href: "/folding-guides", label: "Folding guides" },
      { href: "/challenges", label: "Challenges" },
    ],
  },
];

export function getCategoryByPath(path: string): CategoryPage | undefined {
  return categoryPages.find((category) => category.path === path);
}

export function getPlanesForCategory(category: CategoryPage): PaperAirplane[] {
  return airplanes.filter(category.filter);
}
