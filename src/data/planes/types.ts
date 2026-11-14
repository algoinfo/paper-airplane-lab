export type Difficulty = "Easy" | "Medium" | "Advanced";

export type FlightType =
  | "Distance"
  | "Glider"
  | "Stunt"
  | "Speed"
  | "Beginner";

/** Top-down fold diagram variants used by FoldDiagram */
export type DiagramVariant =
  | "blank-portrait"
  | "center-crease-vertical"
  | "top-corners-to-center"
  | "top-triangle-down"
  | "nose-fold-small"
  | "outer-edges-to-center"
  | "wings-down-dart"
  | "finished-dart"
  | "wide-wings-open"
  | "finished-glider"
  | "accordion-nose"
  | "lock-fold"
  | "finished-nakamura"
  | "diagonal-fold"
  | "canard-nose"
  | "finished-stunt"
  | "boomerang-shape"
  | "loop-tail"
  | "hammer-nose"
  | "finished-wide-glider";

export interface FoldStep {
  title: string;
  instruction: string;
  diagram: DiagramVariant;
}

export interface PlaneFAQ {
  question: string;
  answer: string;
}

export interface PaperAirplane {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  difficulty: Difficulty;
  flightType: FlightType[];
  estimatedTime: string;
  paperSize: string;
  steps: FoldStep[];
  tips: string[];
  specifications: {
    bestFor: string;
    flightStyle: string;
    notes: string;
  };
  faq: PlaneFAQ[];
  relatedSlugs: string[];
  featured: boolean;
  categoryTags: string[];
}

export const DIFFICULTY_ORDER: Record<Difficulty, number> = {
  Easy: 1,
  Medium: 2,
  Advanced: 3,
};
