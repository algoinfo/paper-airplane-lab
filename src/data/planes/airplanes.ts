import type { PaperAirplane } from "./types";

/**
 * Content notes:
 * - Steps describe real, foldable sequences for well-known paper plane families.
 * - Flight claims stay qualitative — no invented distance/time numbers.
 * - Diagram variants map to original SVG fold illustrations (not stock photos).
 */
export const airplanes: PaperAirplane[] = [
  {
    slug: "classic-dart",
    name: "Classic Dart",
    description:
      "The familiar pointed dart — quick to fold and built for straight, fast throws.",
    longDescription:
      "The Classic Dart is the paper airplane most people learn first. A sharp nose, swept wings, and a simple center crease make it easy to fold in a few minutes. It prefers a firm, level throw and flies best in a hallway or open room with little wind.",
    difficulty: "Easy",
    flightType: ["Speed", "Distance", "Beginner"],
    estimatedTime: "3 minutes",
    paperSize: "A4 or Letter",
    featured: true,
    categoryTags: ["fast", "easy", "kids", "distance"],
    relatedSlugs: ["beginner-plane", "fast-dart", "bulldog-dart"],
    steps: [
      {
        title: "Start with the paper portrait",
        instruction:
          "Place a sheet of A4 or Letter paper vertically on a flat table, with the short edge at the top.",
        diagram: "blank-portrait",
      },
      {
        title: "Fold in half lengthwise",
        instruction:
          "Fold the paper in half from left to right. Crease firmly, then open it flat again so a center guide crease remains.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Fold the top corners in",
        instruction:
          "Fold the top-left and top-right corners down so they meet exactly on the center crease. You should see a sharp point at the top.",
        diagram: "top-corners-to-center",
      },
      {
        title: "Fold the edges to the center again",
        instruction:
          "Fold the left and right slanted edges in to the center crease once more, narrowing the nose into a dart shape.",
        diagram: "outer-edges-to-center",
      },
      {
        title: "Fold the plane in half",
        instruction:
          "Fold the whole plane in half along the center crease so the previous folds are on the outside.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Create the wings",
        instruction:
          "With the folded edge on top, fold one wing down so the top edge lines up with the bottom of the fuselage. Flip and repeat for the other wing.",
        diagram: "wings-down-dart",
      },
      {
        title: "Open the wings and fly",
        instruction:
          "Open both wings so they sit level (or with a tiny upward dihedral). Pinch the fuselage and throw level.",
        diagram: "finished-dart",
      },
    ],
    tips: [
      "Hold the plane near the middle of the fuselage, not at the very back.",
      "Throw straight and level — an upward flick often stalls a dart.",
      "If it dives, bend the trailing edges of the wings up slightly (elevators).",
      "If it climbs and stalls, reduce upward elevator or throw a bit softer.",
    ],
    specifications: {
      bestFor: "Indoor halls, quick demos, learning basic flight trim",
      flightStyle: "Fast and relatively straight with a firm throw",
      notes: "Works with printer paper; slightly heavier paper holds the nose better.",
    },
    faq: [
      {
        question: "Is the Classic Dart good for beginners?",
        answer:
          "Yes. It uses a short sequence of common folds and teaches nose shape, wing alignment, and basic trim.",
      },
      {
        question: "Why does my Classic Dart dive?",
        answer:
          "Usually the nose is too heavy relative to wing lift, or the wings are angled down. Add a slight upward bend at the back of each wing and check that both wings are the same size.",
      },
      {
        question: "What paper should I use?",
        answer:
          "Standard 70–90 gsm printer paper (A4 or Letter) is ideal. Card stock is usually too stiff for this thin dart.",
      },
    ],
  },
  {
    slug: "nakamura-lock",
    name: "Nakamura Lock",
    description:
      "A distance favorite with a locked nose fold that keeps the point from unfolding in flight.",
    longDescription:
      "The Nakamura Lock (popularized by Takuo Toda’s competition lineage and widely taught online) adds a locking fold at the nose so the tip stays sharp after hard throws. It is a strong choice when you want distance outdoors with careful trim.",
    difficulty: "Medium",
    flightType: ["Distance", "Speed"],
    estimatedTime: "6 minutes",
    paperSize: "A4 or Letter",
    featured: true,
    categoryTags: ["distance", "fast"],
    relatedSlugs: ["long-distance-dart", "classic-dart", "the-arrow"],
    steps: [
      {
        title: "Portrait sheet and center crease",
        instruction:
          "Start with paper portrait. Fold in half lengthwise, crease, and open flat.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Fold top corners to the center",
        instruction:
          "Bring both top corners to the center crease to form a pointed tip.",
        diagram: "top-corners-to-center",
      },
      {
        title: "Fold the tip down",
        instruction:
          "Fold the sharp tip down so the point sits a little above the bottom of the previous triangle folds. This sets up the lock.",
        diagram: "top-triangle-down",
      },
      {
        title: "Fold the top corners in again",
        instruction:
          "Fold the new top corners into the center crease, covering most of the downward tip — leave a small triangle peeking out at the bottom of those folds.",
        diagram: "outer-edges-to-center",
      },
      {
        title: "Lock the nose",
        instruction:
          "Fold that small remaining triangle upward over the layered corners to lock the nose in place.",
        diagram: "lock-fold",
      },
      {
        title: "Fold in half and make wings",
        instruction:
          "Fold the plane in half along the center. Fold each wing down so the top edge meets the bottom edge of the body.",
        diagram: "wings-down-dart",
      },
      {
        title: "Set the wings and throw",
        instruction:
          "Open the wings until nearly flat with a gentle dihedral. Grip behind the lock and throw hard and level for distance.",
        diagram: "finished-nakamura",
      },
    ],
    tips: [
      "Crease the lock firmly — a soft lock can open on a hard throw.",
      "Keep both wings the same width for a straight track.",
      "Outdoors, throw with the wind at your back when possible.",
      "Small upward elevators help if the plane noses down late in the flight.",
    ],
    specifications: {
      bestFor: "Outdoor distance throws and schoolyard contests",
      flightStyle: "Penetrating dart with a stable locked nose",
      notes: "Slightly more folds than a basic dart; worth the extra minute.",
    },
    faq: [
      {
        question: "What does the “lock” do?",
        answer:
          "It tucks a small flap over the nose layers so the tip cannot easily peel open when the plane hits air hard.",
      },
      {
        question: "Is this the same as a classic dart?",
        answer:
          "No. The Nakamura Lock adds the tip-down and lock sequence. The flying shape is still dart-like, but the nose structure is different.",
      },
    ],
  },
  {
    slug: "the-glider",
    name: "The Glider",
    description:
      "A gentle wide-wing glider meant for soft launches and longer air time indoors.",
    longDescription:
      "The Glider trades raw speed for lift. Wider wings and a softer launch make it a good choice when you want the plane to float across a room rather than zip in a straight line.",
    difficulty: "Easy",
    flightType: ["Glider", "Beginner"],
    estimatedTime: "4 minutes",
    paperSize: "A4 or Letter",
    featured: true,
    categoryTags: ["glider", "easy", "kids", "flight-time"],
    relatedSlugs: ["wide-wing-glider", "stable-glider", "the-cruiser"],
    steps: [
      {
        title: "Start portrait",
        instruction: "Place the paper vertically on a flat surface.",
        diagram: "blank-portrait",
      },
      {
        title: "Make a center crease",
        instruction:
          "Fold in half lengthwise, crease lightly, and open the sheet again.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Fold a shallow nose",
        instruction:
          "Fold the top edge down about 2–3 cm (roughly one finger width) to add a little nose weight.",
        diagram: "nose-fold-small",
      },
      {
        title: "Fold the top corners in",
        instruction:
          "Fold both top corners to the center crease, keeping the folds symmetric.",
        diagram: "top-corners-to-center",
      },
      {
        title: "Fold in half",
        instruction:
          "Fold the plane in half along the center crease with the nose folds on the outside.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Fold broad wings",
        instruction:
          "Fold each wing so the wing root sits along the bottom of the fuselage, leaving a wide wing surface.",
        diagram: "wide-wings-open",
      },
      {
        title: "Set a gentle dihedral",
        instruction:
          "Open the wings and raise the tips slightly. Launch with a soft push, not a hard snap.",
        diagram: "finished-glider",
      },
    ],
    tips: [
      "Soft launches work better than hard throws.",
      "If it stalls, reduce upward elevator or add a tiny bit more nose weight (small paperclip).",
      "Keep the wings as flat and wrinkle-free as you can.",
    ],
    specifications: {
      bestFor: "Indoor float flights and calm rooms",
      flightStyle: "Slow, floaty glide path",
      notes: "Avoid strong outdoor wind with this design.",
    },
    faq: [
      {
        question: "How is this different from a dart?",
        answer:
          "Wings are wider and the launch should be gentler. Expect slower flight and more sensitivity to trim.",
      },
    ],
  },
  {
    slug: "the-condor",
    name: "The Condor",
    description:
      "A long-wing glider layout for calm air and patient, soaring throws.",
    longDescription:
      "The Condor emphasizes wing area. It is not a speed plane — it rewards careful creases, even wings, and a smooth release in still air.",
    difficulty: "Medium",
    flightType: ["Glider"],
    estimatedTime: "7 minutes",
    paperSize: "A4 or Letter",
    featured: true,
    categoryTags: ["glider", "flight-time"],
    relatedSlugs: ["the-glider", "wide-wing-glider", "experimental-glider"],
    steps: [
      {
        title: "Center crease",
        instruction: "Fold the sheet in half lengthwise, open it, and keep the crease as a guide.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Fold the top down",
        instruction:
          "Fold the top edge down to about one-third of the page height to start building a heavier leading section.",
        diagram: "nose-fold-small",
      },
      {
        title: "Fold corners to center",
        instruction:
          "Bring both top corners to the center crease for a blunt triangular nose.",
        diagram: "top-corners-to-center",
      },
      {
        title: "Fold the nose down once more",
        instruction:
          "Fold the triangular nose down a short distance to stack paper near the front.",
        diagram: "top-triangle-down",
      },
      {
        title: "Fold the body in half",
        instruction: "Fold along the center crease so layers stay on the outside.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Fold long wings",
        instruction:
          "Fold each wing down with a high wing root, leaving long trailing surfaces.",
        diagram: "wide-wings-open",
      },
      {
        title: "Finish the Condor",
        instruction:
          "Open the wings wide, match both sides, and launch softly with a slight upward angle.",
        diagram: "finished-wide-glider",
      },
    ],
    tips: [
      "Symmetry matters more than force.",
      "Use elevators sparingly — gliders over-correct easily.",
      "Best in gyms, classrooms, or still outdoor air.",
    ],
    specifications: {
      bestFor: "Time-aloft practice in calm conditions",
      flightStyle: "Slow soar with a descending glide",
      notes: "Performance varies a lot with crease quality.",
    },
    faq: [
      {
        question: "Will the Condor fly farther than a dart?",
        answer:
          "Not usually in a hard-throw contest. It is built for glide and air time, not penetration.",
      },
    ],
  },
  {
    slug: "bulldog-dart",
    name: "The Bulldog Dart",
    description:
      "A thick-nosed dart that stays sturdy and tracks well on firm indoor throws.",
    longDescription:
      "The Bulldog Dart packs extra layers into the nose. That bulk helps the plane feel solid in the hand and resist nose crumpling after landings.",
    difficulty: "Easy",
    flightType: ["Distance", "Speed", "Beginner"],
    estimatedTime: "4 minutes",
    paperSize: "A4 or Letter",
    featured: true,
    categoryTags: ["distance", "fast", "easy", "kids"],
    relatedSlugs: ["classic-dart", "the-hammer", "fast-dart"],
    steps: [
      {
        title: "Center guide crease",
        instruction: "Fold in half lengthwise and open flat.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Fold top corners in",
        instruction: "Fold both top corners to the center crease.",
        diagram: "top-corners-to-center",
      },
      {
        title: "Fold the tip down",
        instruction:
          "Fold the point down so it meets the bottom edge of the triangular folds — this creates the bulldog’s blunt nose stack.",
        diagram: "top-triangle-down",
      },
      {
        title: "Fold sides to the center",
        instruction:
          "Fold the left and right edges into the center crease over the blunt nose.",
        diagram: "outer-edges-to-center",
      },
      {
        title: "Fold in half",
        instruction: "Fold the plane in half along the center crease.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Fold the wings",
        instruction:
          "Fold each wing down evenly. Keep the thick nose as the front reference.",
        diagram: "wings-down-dart",
      },
      {
        title: "Ready to throw",
        instruction:
          "Level the wings and throw firmly. The heavy nose helps a straight first flight.",
        diagram: "finished-dart",
      },
    ],
    tips: [
      "Crease the nose stack tightly so layers do not spring open.",
      "Great first contest plane because it is durable.",
      "If it turns, compare wing sizes — thick noses hide small asymmetries.",
    ],
    specifications: {
      bestFor: "Reliable indoor distance and classroom use",
      flightStyle: "Straight, sturdy dart flight",
      notes: "Nose is blunter than a classic dart.",
    },
    faq: [
      {
        question: "Why is it called a bulldog?",
        answer:
          "The folded-down tip makes a short, thick nose — more like a bulldog’s face than a needle point.",
      },
    ],
  },
  {
    slug: "the-arrow",
    name: "The Arrow",
    description:
      "A slim, pointed flyer with narrow wings for quick, direct flight paths.",
    longDescription:
      "The Arrow keeps mass near the centerline and uses narrow wings. It feels closer to a thrown spear than a floating glider.",
    difficulty: "Medium",
    flightType: ["Speed", "Distance"],
    estimatedTime: "5 minutes",
    paperSize: "A4 or Letter",
    featured: false,
    categoryTags: ["fast", "distance"],
    relatedSlugs: ["classic-dart", "fast-dart", "nakamura-lock"],
    steps: [
      {
        title: "Portrait and center crease",
        instruction: "Fold lengthwise, crease, and reopen.",
        diagram: "center-crease-vertical",
      },
      {
        title: "First corner folds",
        instruction: "Fold both top corners tightly to the center.",
        diagram: "top-corners-to-center",
      },
      {
        title: "Second taper",
        instruction:
          "Fold the new slanted edges to the center again for a very sharp nose.",
        diagram: "outer-edges-to-center",
      },
      {
        title: "Optional nose reinforce",
        instruction:
          "Make a small accordion tuck at the tip if the point feels fragile.",
        diagram: "accordion-nose",
      },
      {
        title: "Fold in half",
        instruction: "Fold along the center with folds outside.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Narrow wings",
        instruction:
          "Fold wings down, keeping them narrower than a classic dart for less drag.",
        diagram: "wings-down-dart",
      },
      {
        title: "Finish the Arrow",
        instruction: "Open wings slightly and throw hard and level.",
        diagram: "finished-dart",
      },
    ],
    tips: [
      "Narrow wings reward accurate throws and punish crooked creases.",
      "Use for speed demos rather than long float time.",
    ],
    specifications: {
      bestFor: "Fast indoor lines and accuracy lanes",
      flightStyle: "Quick, penetrating flight",
      notes: "Trim carefully; small bends change direction a lot.",
    },
    faq: [
      {
        question: "Does the Arrow need special paper?",
        answer:
          "No. Standard printer paper is fine. Crisp creases matter more than paper brand.",
      },
    ],
  },
  {
    slug: "the-eagle",
    name: "The Eagle",
    description:
      "A balanced mid-wing design that aims for steady, readable flight paths.",
    longDescription:
      "The Eagle sits between dart and glider. Wings are wide enough to soften the landing path without giving up all speed.",
    difficulty: "Medium",
    flightType: ["Distance", "Glider"],
    estimatedTime: "6 minutes",
    paperSize: "A4 or Letter",
    featured: false,
    categoryTags: ["distance", "glider"],
    relatedSlugs: ["the-falcon", "the-cruiser", "stable-glider"],
    steps: [
      {
        title: "Center crease",
        instruction: "Fold in half lengthwise and open.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Top corners in",
        instruction: "Fold both top corners to the center crease.",
        diagram: "top-corners-to-center",
      },
      {
        title: "Short nose fold",
        instruction: "Fold the tip down a short distance to stabilize the nose.",
        diagram: "nose-fold-small",
      },
      {
        title: "Edges to center",
        instruction: "Fold both sides into the center crease.",
        diagram: "outer-edges-to-center",
      },
      {
        title: "Fold body in half",
        instruction: "Fold along the center crease.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Medium wings",
        instruction:
          "Fold wings with a medium chord — wider than a dart, narrower than a pure glider.",
        diagram: "wide-wings-open",
      },
      {
        title: "Fly the Eagle",
        instruction: "Set a mild dihedral and throw with medium force.",
        diagram: "finished-glider",
      },
    ],
    tips: [
      "Aim for matched wing tips — Eagle flights show asymmetry clearly.",
      "A medium throw often outflies a hard snap.",
    ],
    specifications: {
      bestFor: "All-around practice and outdoor calm-day flying",
      flightStyle: "Steady hybrid dart-glider path",
      notes: "A good “second plane” after the classic dart.",
    },
    faq: [
      {
        question: "Is the Eagle a competition design?",
        answer:
          "It is a teaching hybrid, not a named world-record model. Use it to learn trim between speed and glide.",
      },
    ],
  },
  {
    slug: "the-swift",
    name: "The Swift",
    description:
      "A compact speed plane with a short wing span for quick reactions.",
    longDescription:
      "The Swift keeps wings short and the fuselage stiff. It is meant for short-range speed and snappy handling rather than soaring.",
    difficulty: "Medium",
    flightType: ["Speed"],
    estimatedTime: "5 minutes",
    paperSize: "A4 or Letter",
    featured: false,
    categoryTags: ["fast"],
    relatedSlugs: ["fast-dart", "the-arrow", "classic-dart"],
    steps: [
      {
        title: "Crease the center",
        instruction: "Fold lengthwise and reopen.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Sharp corner folds",
        instruction: "Fold top corners tightly to the center.",
        diagram: "top-corners-to-center",
      },
      {
        title: "Taper again",
        instruction: "Fold slanted edges to the center a second time.",
        diagram: "outer-edges-to-center",
      },
      {
        title: "Fold in half",
        instruction: "Close along the center crease.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Short wings",
        instruction:
          "Fold wings down but stop so the wing span stays relatively short.",
        diagram: "wings-down-dart",
      },
      {
        title: "Finish",
        instruction: "Open wings just enough to fly and throw firmly.",
        diagram: "finished-dart",
      },
    ],
    tips: [
      "Best in corridors where you want a quick, straight shot.",
      "Do not expect long float time.",
    ],
    specifications: {
      bestFor: "Short-range speed and reaction games",
      flightStyle: "Fast, short-duration flight",
      notes: "Keep the trailing edges clean for predictability.",
    },
    faq: [
      {
        question: "Why are the wings short?",
        answer:
          "Shorter wings reduce lift and drag, which favors speed over glide in this layout.",
      },
    ],
  },
  {
    slug: "the-falcon",
    name: "The Falcon",
    description:
      "A sleek intermediate flyer that balances a sharp nose with usable wing area.",
    longDescription:
      "The Falcon is an intermediate step up from beginner darts: still pointed, but with enough wing to recover from imperfect throws.",
    difficulty: "Medium",
    flightType: ["Distance", "Speed"],
    estimatedTime: "5 minutes",
    paperSize: "A4 or Letter",
    featured: false,
    categoryTags: ["distance", "fast"],
    relatedSlugs: ["the-eagle", "nakamura-lock", "long-distance-dart"],
    steps: [
      {
        title: "Center crease",
        instruction: "Fold in half and open.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Corners to center",
        instruction: "Fold both top corners in.",
        diagram: "top-corners-to-center",
      },
      {
        title: "Second taper fold",
        instruction: "Fold edges to the center again.",
        diagram: "outer-edges-to-center",
      },
      {
        title: "Small nose tuck",
        instruction: "Add a small nose fold to stiffen the tip.",
        diagram: "accordion-nose",
      },
      {
        title: "Halve the plane",
        instruction: "Fold along the center crease.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Wing folds",
        instruction: "Fold both wings evenly and open to a slight dihedral.",
        diagram: "finished-dart",
      },
    ],
    tips: [
      "Check that the nose tuck is centered before flying.",
      "A smooth release beats a violent snap for consistent distance.",
    ],
    specifications: {
      bestFor: "Intermediate practice and mixed flight goals",
      flightStyle: "Sleek dart with moderate glide",
      notes: "Good bridge between beginner and advanced darts.",
    },
    faq: [
      {
        question: "Who is the Falcon for?",
        answer:
          "Folders who already know the classic dart and want a slightly more refined nose and wing setup.",
      },
    ],
  },
  {
    slug: "the-hammer",
    name: "The Hammer",
    description:
      "A heavy-nose plane that punches through light indoor drafts.",
    longDescription:
      "The Hammer stacks paper at the front on purpose. The tradeoff is less float and more straight-line momentum.",
    difficulty: "Easy",
    flightType: ["Distance", "Speed", "Beginner"],
    estimatedTime: "4 minutes",
    paperSize: "A4 or Letter",
    featured: false,
    categoryTags: ["distance", "fast", "easy"],
    relatedSlugs: ["bulldog-dart", "classic-dart", "fast-dart"],
    steps: [
      {
        title: "Fold a deep nose flap",
        instruction:
          "From a portrait sheet, fold the top edge down about one-quarter of the page.",
        diagram: "nose-fold-small",
      },
      {
        title: "Fold that flap down again",
        instruction:
          "Fold the thick top section down once more to stack weight at the nose.",
        diagram: "hammer-nose",
      },
      {
        title: "Center crease",
        instruction: "Fold the plane in half lengthwise.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Make the wings",
        instruction: "Fold each wing down flush with the bottom of the body.",
        diagram: "wings-down-dart",
      },
      {
        title: "Open and throw",
        instruction:
          "Open the wings level and throw firmly. Expect a strong forward path.",
        diagram: "finished-dart",
      },
    ],
    tips: [
      "Because the nose is heavy, start with almost no elevator.",
      "Great when light AC drafts upset lighter gliders.",
    ],
    specifications: {
      bestFor: "Straight throws in mildly drafty indoor spaces",
      flightStyle: "Momentum-first flight",
      notes: "Simple fold count; nose stack is the key idea.",
    },
    faq: [
      {
        question: "Can I add a paperclip?",
        answer:
          "Usually unnecessary — the folded stack already moves weight forward. Add a clip only if it still stalls upward.",
      },
    ],
  },
  {
    slug: "the-cruiser",
    name: "The Cruiser",
    description:
      "A calm, stable cruiser for relaxed indoor flying and gentle experiments.",
    longDescription:
      "The Cruiser prioritizes stability over spectacle. It is a good lab plane for testing small trim changes one at a time.",
    difficulty: "Easy",
    flightType: ["Glider", "Beginner"],
    estimatedTime: "4 minutes",
    paperSize: "A4 or Letter",
    featured: true,
    categoryTags: ["glider", "easy", "kids", "flight-time"],
    relatedSlugs: ["stable-glider", "the-glider", "beginner-plane"],
    steps: [
      {
        title: "Light center crease",
        instruction: "Fold in half lengthwise and open.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Fold a modest nose",
        instruction: "Fold the top edge down about 2 cm.",
        diagram: "nose-fold-small",
      },
      {
        title: "Corners to center",
        instruction: "Fold both top corners to the crease.",
        diagram: "top-corners-to-center",
      },
      {
        title: "Fold in half",
        instruction: "Close along the center.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Cruise wings",
        instruction: "Fold broad, even wings and open with a clear dihedral.",
        diagram: "finished-glider",
      },
    ],
    tips: [
      "Change only one trim variable per test flight.",
      "Launch softly from shoulder height.",
    ],
    specifications: {
      bestFor: "Science demos and calm indoor flying",
      flightStyle: "Predictable cruise glide",
      notes: "Ideal for learning how elevators and dihedral feel.",
    },
    faq: [
      {
        question: "Is the Cruiser good for kids?",
        answer:
          "Yes. The fold sequence is short, and the flight is slower and easier to watch.",
      },
    ],
  },
  {
    slug: "stunt-plane",
    name: "The Stunt Plane",
    description:
      "A playful design trimmed for loops and curved flight paths.",
    longDescription:
      "The Stunt Plane uses wing and elevator setup that encourage curved paths. Results depend heavily on throw angle and trim — treat it as an experiment, not a guaranteed aerobatic showpiece.",
    difficulty: "Advanced",
    flightType: ["Stunt"],
    estimatedTime: "8 minutes",
    paperSize: "A4 or Letter",
    featured: false,
    categoryTags: ["stunt"],
    relatedSlugs: ["looping-plane", "boomerang-plane", "the-swift"],
    steps: [
      {
        title: "Center crease",
        instruction: "Fold lengthwise and open.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Diagonal starter fold",
        instruction:
          "Fold one top corner down on a diagonal to bias the nose slightly (you will mirror-balance in later steps).",
        diagram: "diagonal-fold",
      },
      {
        title: "Match the other side",
        instruction:
          "Fold the opposite corner to restore symmetry while keeping a compact nose.",
        diagram: "top-corners-to-center",
      },
      {
        title: "Canard-style front flaps",
        instruction:
          "Create small front control surfaces by folding tiny tabs near the nose.",
        diagram: "canard-nose",
      },
      {
        title: "Body fold and wings",
        instruction: "Fold in half, then fold wings with slightly upturned tips.",
        diagram: "wings-down-dart",
      },
      {
        title: "Set stunt trim",
        instruction:
          "Add upward elevator on both trailing edges. Throw with a firm upward arc to encourage a loop.",
        diagram: "finished-stunt",
      },
    ],
    tips: [
      "Loops need space — use a gym or large room.",
      "Too much elevator makes it flop backward immediately.",
      "Record what trim produced which path; stunts are iterative.",
    ],
    specifications: {
      bestFor: "Loop and curve experiments",
      flightStyle: "Curved / looping paths when trimmed and thrown for it",
      notes: "Outcomes vary; this is a challenge plane.",
    },
    faq: [
      {
        question: "Will it loop every time?",
        answer:
          "No. Looping depends on elevator trim, throw speed, and angle. Expect to experiment.",
      },
    ],
  },
  {
    slug: "long-distance-dart",
    name: "The Long Distance Dart",
    description:
      "A distance-focused dart with careful nose locking and slim wings.",
    longDescription:
      "Built for people who already like darts and want a more deliberate distance setup: locked tip, slim wings, and attention to symmetry.",
    difficulty: "Advanced",
    flightType: ["Distance", "Speed"],
    estimatedTime: "8 minutes",
    paperSize: "A4 or Letter",
    featured: true,
    categoryTags: ["distance", "fast"],
    relatedSlugs: ["nakamura-lock", "the-arrow", "the-falcon"],
    steps: [
      {
        title: "Precise center crease",
        instruction: "Fold in half with careful alignment, then open.",
        diagram: "center-crease-vertical",
      },
      {
        title: "First nose taper",
        instruction: "Fold top corners exactly to the center.",
        diagram: "top-corners-to-center",
      },
      {
        title: "Tip down for lock setup",
        instruction: "Fold the tip down short of the triangle base.",
        diagram: "top-triangle-down",
      },
      {
        title: "Second taper",
        instruction: "Fold edges to the center, leaving a lock tab.",
        diagram: "outer-edges-to-center",
      },
      {
        title: "Lock the tip",
        instruction: "Fold the lock tab up over the layers.",
        diagram: "lock-fold",
      },
      {
        title: "Slim wing folds",
        instruction:
          "Fold in half, then fold relatively slim wings for less drag.",
        diagram: "wings-down-dart",
      },
      {
        title: "Distance setup",
        instruction:
          "Open wings with slight dihedral. Throw hard, level, and follow through.",
        diagram: "finished-nakamura",
      },
    ],
    tips: [
      "Measure wing width against each other before the first throw.",
      "Outdoor distance improves with a clear run-up and light tailwind.",
      "Do not claim a personal throw as a universal record for the design.",
    ],
    specifications: {
      bestFor: "Outdoor or long-hall distance attempts",
      flightStyle: "Hard-thrown dart trajectory",
      notes: "Advanced mainly because crease precision matters.",
    },
    faq: [
      {
        question: "How far will it fly?",
        answer:
          "That depends on throw technique, paper, and wind. We do not publish invented average distances.",
      },
    ],
  },
  {
    slug: "wide-wing-glider",
    name: "The Wide Wing Glider",
    description:
      "Maximum wing area for soft launches and visible, slow glides.",
    longDescription:
      "If you want to watch airflow ideas in slow motion, start here. Wide wings make lift and stall behavior easy to see.",
    difficulty: "Easy",
    flightType: ["Glider", "Beginner"],
    estimatedTime: "4 minutes",
    paperSize: "A4 or Letter",
    featured: false,
    categoryTags: ["glider", "easy", "kids", "flight-time"],
    relatedSlugs: ["the-glider", "the-condor", "stable-glider"],
    steps: [
      {
        title: "Center crease",
        instruction: "Fold in half and open.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Light nose weight",
        instruction: "Fold a narrow strip at the top.",
        diagram: "nose-fold-small",
      },
      {
        title: "Corners in",
        instruction: "Fold top corners to the center.",
        diagram: "top-corners-to-center",
      },
      {
        title: "Halve and fold wide wings",
        instruction:
          "Fold in half, then fold wings with as much area as the body allows.",
        diagram: "wide-wings-open",
      },
      {
        title: "Finished glider",
        instruction: "Open wings fully and launch gently forward.",
        diagram: "finished-wide-glider",
      },
    ],
    tips: [
      "Avoid hard throws — they cause immediate stalls.",
      "Use for flight-time practice in still rooms.",
    ],
    specifications: {
      bestFor: "Time-aloft play and classroom demos",
      flightStyle: "Slow, high-lift glide",
      notes: "Sensitive to wrinkles in the wing surface.",
    },
    faq: [
      {
        question: "Why does it stall so easily?",
        answer:
          "Wide wings create more lift and drag. A hard upward throw increases angle of attack past the stall point.",
      },
    ],
  },
  {
    slug: "stable-glider",
    name: "The Stable Glider",
    description:
      "A dihedral-focused glider that forgives small throwing mistakes.",
    longDescription:
      "Stability comes from wing angle (dihedral) and a balanced nose. This plane is meant to teach why some gliders self-correct.",
    difficulty: "Easy",
    flightType: ["Glider", "Beginner"],
    estimatedTime: "5 minutes",
    paperSize: "A4 or Letter",
    featured: false,
    categoryTags: ["glider", "easy", "kids", "flight-time"],
    relatedSlugs: ["the-cruiser", "the-glider", "beginner-plane"],
    steps: [
      {
        title: "Portrait start",
        instruction: "Place the paper vertically.",
        diagram: "blank-portrait",
      },
      {
        title: "Center crease",
        instruction: "Fold in half and open.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Nose and corners",
        instruction:
          "Fold a small top strip, then fold both corners to the center.",
        diagram: "top-corners-to-center",
      },
      {
        title: "Body and wings",
        instruction: "Fold in half and create even glider wings.",
        diagram: "wide-wings-open",
      },
      {
        title: "Set dihedral",
        instruction:
          "Open the wings and raise both tips into a clear V. That dihedral is the stability feature.",
        diagram: "finished-glider",
      },
    ],
    tips: [
      "If it rolls over, increase dihedral slightly.",
      "Keep throws gentle and centered.",
    ],
    specifications: {
      bestFor: "Learning stability and soft indoor flights",
      flightStyle: "Self-correcting gentle glide",
      notes: "Dihedral is intentional — do not flatten the wings completely.",
    },
    faq: [
      {
        question: "What is dihedral?",
        answer:
          "It is the upward angle of the wings from the fuselage. It helps the plane roll back toward level after a tilt.",
      },
    ],
  },
  {
    slug: "looping-plane",
    name: "The Looping Plane",
    description:
      "Trimmed with strong elevators to encourage looping throws.",
    longDescription:
      "The Looping Plane is a stunt cousin of basic darts. Upward trailing-edge bends and an arched throw are the main ingredients.",
    difficulty: "Medium",
    flightType: ["Stunt"],
    estimatedTime: "5 minutes",
    paperSize: "A4 or Letter",
    featured: false,
    categoryTags: ["stunt"],
    relatedSlugs: ["stunt-plane", "boomerang-plane", "the-swift"],
    steps: [
      {
        title: "Make a basic dart body",
        instruction:
          "Follow a classic dart nose: center crease, corners in, edges in, fold in half.",
        diagram: "outer-edges-to-center",
      },
      {
        title: "Fold the wings",
        instruction: "Fold both wings down evenly.",
        diagram: "wings-down-dart",
      },
      {
        title: "Add loop elevators",
        instruction:
          "Bend the back edge of both wings upward. Add a small tail flare if you like.",
        diagram: "loop-tail",
      },
      {
        title: "Try a loop throw",
        instruction:
          "Throw firmly with a slight upward arc. Adjust elevator until you get a curve or loop.",
        diagram: "finished-stunt",
      },
    ],
    tips: [
      "Start with modest elevator and increase gradually.",
      "Use a room with high ceilings.",
    ],
    specifications: {
      bestFor: "Loop challenges and party tricks",
      flightStyle: "Curved / looping when trimmed",
      notes: "Same base as a dart, different trim philosophy.",
    },
    faq: [
      {
        question: "My plane just climbs and falls. Why?",
        answer:
          "Elevator is probably too strong or the throw is too steep. Reduce the upward bend and throw more forward.",
      },
    ],
  },
  {
    slug: "fast-dart",
    name: "The Fast Dart",
    description:
      "A tightened classic dart with crisp edges for speed runs.",
    longDescription:
      "The Fast Dart is essentially a disciplined classic dart: sharper tapers, firmer creases, and less wing area than a glider.",
    difficulty: "Easy",
    flightType: ["Speed", "Distance", "Beginner"],
    estimatedTime: "3 minutes",
    paperSize: "A4 or Letter",
    featured: false,
    categoryTags: ["fast", "distance", "easy"],
    relatedSlugs: ["classic-dart", "the-swift", "the-arrow"],
    steps: [
      {
        title: "Center crease",
        instruction: "Fold in half and open.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Tight corner folds",
        instruction: "Fold top corners precisely to the center.",
        diagram: "top-corners-to-center",
      },
      {
        title: "Second taper",
        instruction: "Fold edges to the center again for a sharp body.",
        diagram: "outer-edges-to-center",
      },
      {
        title: "Wings",
        instruction: "Fold in half and create clean, matching wings.",
        diagram: "wings-down-dart",
      },
      {
        title: "Speed flight",
        instruction: "Open wings slightly and throw hard and level.",
        diagram: "finished-dart",
      },
    ],
    tips: [
      "Burnish creases with a fingernail for a stiffer airframe.",
      "Compare side-by-side with a glider to feel speed vs float.",
    ],
    specifications: {
      bestFor: "Speed comparisons and hallway flights",
      flightStyle: "Fast dart trajectory",
      notes: "Almost as easy as the classic dart.",
    },
    faq: [
      {
        question: "Is this different from the Classic Dart?",
        answer:
          "The sequence is closely related. The Fast Dart emphasizes a second taper and tighter creases for a slimmer flyer.",
      },
    ],
  },
  {
    slug: "beginner-plane",
    name: "The Beginner Plane",
    description:
      "The shortest useful fold sequence for first-time folders and young makers.",
    longDescription:
      "Fewer steps, bigger tolerances, and a flight that still feels like a real airplane. Start here if paper folding is new.",
    difficulty: "Easy",
    flightType: ["Beginner", "Glider"],
    estimatedTime: "2 minutes",
    paperSize: "A4 or Letter",
    featured: true,
    categoryTags: ["easy", "kids", "glider"],
    relatedSlugs: ["classic-dart", "the-cruiser", "stable-glider"],
    steps: [
      {
        title: "Fold in half",
        instruction: "Fold the paper in half lengthwise and keep it folded.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Fold one wing",
        instruction:
          "With the fold at the top, fold the top layer down to make the first wing.",
        diagram: "wings-down-dart",
      },
      {
        title: "Fold the other wing",
        instruction: "Flip the plane and fold the second wing to match.",
        diagram: "wings-down-dart",
      },
      {
        title: "Open and fly",
        instruction:
          "Open the wings into a shallow V and give a gentle push. You already have a flying plane.",
        diagram: "finished-glider",
      },
    ],
    tips: [
      "Perfect for ages that need quick success.",
      "Upgrade next to the Classic Dart once this feels easy.",
    ],
    specifications: {
      bestFor: "First flights and kids’ introductions",
      flightStyle: "Simple, short glides",
      notes: "Not optimized for distance contests — optimized for confidence.",
    },
    faq: [
      {
        question: "Can kids fold this alone?",
        answer:
          "Most can, with a flat table and a quick demo of matching the second wing to the first.",
      },
    ],
  },
  {
    slug: "boomerang-plane",
    name: "The Boomerang Plane",
    description:
      "An asymmetric stunt setup meant to curve back toward the thrower.",
    longDescription:
      "True returning flight is finicky. This plane uses intentional asymmetry and trim so the path bends; success depends on throw and adjustment. No scissors required for this version.",
    difficulty: "Advanced",
    flightType: ["Stunt"],
    estimatedTime: "9 minutes",
    paperSize: "A4 or Letter",
    featured: false,
    categoryTags: ["stunt"],
    relatedSlugs: ["stunt-plane", "looping-plane", "experimental-glider"],
    steps: [
      {
        title: "Build a dart base",
        instruction:
          "Create a classic dart nose and body through the wing-ready stage.",
        diagram: "outer-edges-to-center",
      },
      {
        title: "Fold wings",
        instruction: "Fold both wings, then deliberately make one wing slightly wider.",
        diagram: "wings-down-dart",
      },
      {
        title: "Add return trim",
        instruction:
          "Bend one trailing edge up and the other slightly down to encourage a turn.",
        diagram: "boomerang-shape",
      },
      {
        title: "Test returning paths",
        instruction:
          "Throw at a horizontal angle across your body. Adjust wing bends until the path curves around.",
        diagram: "finished-stunt",
      },
    ],
    tips: [
      "Returning flight is experimental — expect many test throws.",
      "Mark which wing you adjusted so you can reverse changes.",
      "Use a wide open space away from people and glass.",
    ],
    specifications: {
      bestFor: "Curve-back experiments and advanced stunts",
      flightStyle: "Turning / potentially returning path",
      notes: "Not a guaranteed boomerang; treat results as personal tests.",
    },
    faq: [
      {
        question: "Why won’t it come back?",
        answer:
          "Returning flight needs a specific combination of asymmetry, speed, and angle. Change one trim at a time and keep notes.",
      },
    ],
  },
  {
    slug: "experimental-glider",
    name: "The Experimental Glider",
    description:
      "A lab plane for trying wing shapes, ballast, and trim ideas safely.",
    longDescription:
      "The Experimental Glider is intentionally simple so you can modify it. Add tape ballast, change dihedral, or alter elevators and compare flights.",
    difficulty: "Medium",
    flightType: ["Glider"],
    estimatedTime: "6 minutes",
    paperSize: "A4 or Letter",
    featured: false,
    categoryTags: ["glider", "flight-time"],
    relatedSlugs: ["the-condor", "wide-wing-glider", "the-glider"],
    steps: [
      {
        title: "Base crease",
        instruction: "Fold in half lengthwise and open.",
        diagram: "center-crease-vertical",
      },
      {
        title: "Configurable nose",
        instruction:
          "Fold a top strip — vary its depth later as a ballast experiment.",
        diagram: "nose-fold-small",
      },
      {
        title: "Corners and body",
        instruction: "Fold corners in, then fold the plane in half.",
        diagram: "top-corners-to-center",
      },
      {
        title: "Laboratory wings",
        instruction:
          "Fold wide wings. Keep the first version symmetric as your control model.",
        diagram: "wide-wings-open",
      },
      {
        title: "Fly, then modify",
        instruction:
          "Fly a baseline. Then change one variable (elevator, dihedral, or nose weight) and compare.",
        diagram: "finished-wide-glider",
      },
    ],
    tips: [
      "Build two identical planes — one control, one experiment.",
      "Write down each change; memory is unreliable after ten throws.",
      "Use the Challenges pages to log your own measurements.",
    ],
    specifications: {
      bestFor: "Science experiments and methodical trim testing",
      flightStyle: "Baseline glider — then whatever you turn it into",
      notes: "The point is the process, not a fixed performance claim.",
    },
    faq: [
      {
        question: "What should I change first?",
        answer:
          "Elevators (trailing-edge bends). They are reversible and teach pitch control quickly.",
      },
    ],
  },
];

export function getAirplaneBySlug(slug: string): PaperAirplane | undefined {
  return airplanes.find((plane) => plane.slug === slug);
}

export function getFeaturedAirplanes(limit = 6): PaperAirplane[] {
  return airplanes.filter((plane) => plane.featured).slice(0, limit);
}

export function getRelatedAirplanes(
  plane: PaperAirplane,
  limit = 4,
): PaperAirplane[] {
  const related = plane.relatedSlugs
    .map((slug) => getAirplaneBySlug(slug))
    .filter((p): p is PaperAirplane => Boolean(p));

  if (related.length >= limit) return related.slice(0, limit);

  const extras = airplanes.filter(
    (p) =>
      p.slug !== plane.slug &&
      !related.some((r) => r.slug === p.slug) &&
      p.flightType.some((type) => plane.flightType.includes(type)),
  );

  return [...related, ...extras].slice(0, limit);
}

export function getAirplanesByCategoryTag(tag: string): PaperAirplane[] {
  return airplanes.filter((plane) => plane.categoryTags.includes(tag));
}
