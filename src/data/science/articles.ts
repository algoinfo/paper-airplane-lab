export interface ScienceArticle {
  slug: string;
  title: string;
  description: string;
  readingTime: string;
  summary: string;
  sections: Array<{ heading: string; body: string[] }>;
  relatedPlaneSlugs: string[];
  relatedArticleSlugs: string[];
}

export const scienceArticles: ScienceArticle[] = [
  {
    slug: "how-do-paper-airplanes-fly",
    title: "How Do Paper Airplanes Fly?",
    description:
      "A clear overview of the forces that keep a paper airplane in the air — and why most flights end in a landing.",
    readingTime: "6 min",
    summary:
      "Paper airplanes fly because moving air creates lift on the wings while thrust from your throw fights drag and gravity. Understanding those four ideas makes trimming much easier.",
    sections: [
      {
        heading: "Your throw is the engine",
        body: [
          "A paper airplane has no motor. The energy for flight comes from your arm. That initial push is thrust. As soon as the plane leaves your hand, thrust drops to zero and the plane must manage the energy it already has.",
          "That is why launch angle and speed matter so much. Too soft and the plane stalls early. Too steep and it climbs, loses speed, and falls.",
        ],
      },
      {
        heading: "Four forces in a short flight",
        body: [
          "Lift pushes up (mostly from the wings). Gravity pulls down through the whole plane. Drag slows the plane as air resists motion. Thrust (your throw) starts the motion.",
          "A long-looking glide is usually a careful balance where lift nearly matches weight while drag slowly removes energy.",
        ],
      },
      {
        heading: "Why design still matters",
        body: [
          "Two planes thrown the same way can behave differently because nose weight, wing shape, and dihedral change how lift and drag appear.",
          "Use the Classic Dart for speed comparisons and the Wide Wing Glider for slow-flight observations.",
        ],
      },
    ],
    relatedPlaneSlugs: ["classic-dart", "wide-wing-glider", "experimental-glider"],
    relatedArticleSlugs: ["what-is-lift", "how-gravity-affects-paper-airplanes"],
  },
  {
    slug: "what-is-lift",
    title: "What Is Lift?",
    description:
      "Learn what lift means for paper wings, without overclaiming textbook myths.",
    readingTime: "5 min",
    summary:
      "Lift is the upward aerodynamic force produced as air moves over and under a wing. For paper planes, wing area, angle of attack, and airspeed decide how much lift you get.",
    sections: [
      {
        heading: "Angle of attack",
        body: [
          "If the wing meets the air nose-high, it can produce more lift — up to a point. Past that point the airflow separates and the wing stalls.",
          "Soft glider launches often work because they keep a useful angle without demanding huge speed.",
        ],
      },
      {
        heading: "Wing area helps, with tradeoffs",
        body: [
          "Wider wings can create more lift at lower speeds, which is why gliders float. They also create more drag, so they are poor hard-throw distance planes.",
        ],
      },
      {
        heading: "A practical test",
        body: [
          "Fold a Fast Dart and a Wide Wing Glider from the same paper. Throw both gently. The glider usually stays up longer; the dart usually travels a straighter fast path when thrown harder.",
        ],
      },
    ],
    relatedPlaneSlugs: ["wide-wing-glider", "fast-dart", "the-condor"],
    relatedArticleSlugs: ["how-wing-shape-changes-flight", "how-do-paper-airplanes-fly"],
  },
  {
    slug: "how-gravity-affects-paper-airplanes",
    title: "How Does Gravity Affect Paper Airplanes?",
    description:
      "Gravity never turns off — here is how nose weight and balance change what you see in flight.",
    readingTime: "5 min",
    summary:
      "Gravity pulls on every part of the plane. Where the mass sits (especially near the nose) changes whether the plane dives, stalls, or glides smoothly.",
    sections: [
      {
        heading: "Weight is not the enemy",
        body: [
          "Heavier planes are not automatically worse. A bit of nose weight can prevent an early stall. Too much nose weight creates a dive.",
        ],
      },
      {
        heading: "Center of gravity",
        body: [
          "The center of gravity is the balance point. If it sits too far back, the plane may pitch up and stall. Too far forward and it may nose in.",
          "The Hammer and Bulldog Dart move mass forward on purpose for straight, sturdy throws.",
        ],
      },
    ],
    relatedPlaneSlugs: ["the-hammer", "bulldog-dart", "stable-glider"],
    relatedArticleSlugs: ["how-to-balance-a-paper-airplane", "what-is-lift"],
  },
  {
    slug: "how-to-balance-a-paper-airplane",
    title: "How to Balance a Paper Airplane",
    description:
      "Simple checks for nose weight, wing symmetry, and elevator trim.",
    readingTime: "6 min",
    summary:
      "Balance means matching nose weight, wing size, and trailing-edge trim so the plane holds a useful path after release.",
    sections: [
      {
        heading: "Symmetry first",
        body: [
          "Before changing trim, compare both wings. Uneven wings cause turns that look like balance problems but are really asymmetry.",
        ],
      },
      {
        heading: "Elevators",
        body: [
          "Tiny upward bends at the back of the wings (elevators) help a diving plane. Tiny downward bends help a plane that climbs and stalls.",
          "Change both wings the same amount unless you are intentionally creating a turn.",
        ],
      },
      {
        heading: "Ballast experiments",
        body: [
          "A small piece of tape near the nose is a reversible ballast test. The Experimental Glider page is built for this kind of methodical change.",
        ],
      },
    ],
    relatedPlaneSlugs: ["experimental-glider", "the-cruiser", "stable-glider"],
    relatedArticleSlugs: [
      "how-gravity-affects-paper-airplanes",
      "why-do-paper-airplanes-turn",
    ],
  },
  {
    slug: "how-wing-shape-changes-flight",
    title: "How Wing Shape Changes Flight",
    description:
      "Compare dart wings and glider wings and what each shape is good for.",
    readingTime: "5 min",
    summary:
      "Narrow dart wings favor speed and penetration. Wide glider wings favor lift at low speed. Hybrid shapes sit in between.",
    sections: [
      {
        heading: "Dart wings",
        body: [
          "Swept, narrower wings reduce drag for a given throw. They need more speed to produce useful lift.",
        ],
      },
      {
        heading: "Glider wings",
        body: [
          "Longer chord and span increase lift and drag. Soft launches shine; hard launches often stall.",
        ],
      },
      {
        heading: "Try a controlled comparison",
        body: [
          "Use the same paper and thrower for a Classic Dart and The Condor. Record qualitative notes: speed feel, air time, and landing style.",
        ],
      },
    ],
    relatedPlaneSlugs: ["classic-dart", "the-condor", "the-eagle"],
    relatedArticleSlugs: ["what-is-lift", "how-do-paper-airplanes-fly"],
  },
  {
    slug: "why-do-paper-airplanes-turn",
    title: "Why Do Paper Airplanes Turn?",
    description:
      "Turns usually come from asymmetric wings, bent rudders, or uneven elevators — here is how to diagnose them.",
    readingTime: "5 min",
    summary:
      "Most unwanted turns are manufacturing issues: one wing larger, one elevator higher, or a warped fuselage. Intentional turns are how stunt planes work.",
    sections: [
      {
        heading: "Diagnose before you guess",
        body: [
          "Sight down the nose. Do both wings match? Are trailing edges even? Is the fuselage straight?",
        ],
      },
      {
        heading: "Intentional turning",
        body: [
          "The Boomerang Plane and Stunt Plane use asymmetry on purpose. Mark changes so you can undo them.",
        ],
      },
      {
        heading: "Rudders and winglets",
        body: [
          "Small vertical fins or rolled wing tips can reduce unwanted roll, but they also add complexity. Master even wings before adding extras.",
        ],
      },
    ],
    relatedPlaneSlugs: ["boomerang-plane", "stunt-plane", "looping-plane"],
    relatedArticleSlugs: ["how-to-balance-a-paper-airplane", "how-wing-shape-changes-flight"],
  },
];

export function getScienceArticle(slug: string): ScienceArticle | undefined {
  return scienceArticles.find((article) => article.slug === slug);
}
