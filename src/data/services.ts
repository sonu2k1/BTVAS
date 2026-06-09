export interface Service {
  title: string;
  titleColor1: string;
  titleColor2: string;
  description: string;
  image: string;
  images?: string[];
  alt: string;
  overview: string;
  highlights: string[];
  whoItsFor: string;
  comingSoon?: boolean;
}

export const services: Service[] = [
  {
    title: "ABA Therapy",
    titleColor1: "#753DBE",
    titleColor2: "#FF4880",
    description:
      "Evidence-based Applied Behaviour Analysis tailored to each child's unique profile and goals",
    image: "https://ik.imagekit.io/sonu2k1/TEst/Services/0O3A2805.jpg",
    images: [
      "https://ik.imagekit.io/sonu2k1/TEst/Services/0O3A2722.jpg?updatedAt=1780577327719",
      "https://ik.imagekit.io/sonu2k1/TEst/Services/0O3A2805.jpg",
      "https://ik.imagekit.io/sonu2k1/TEst/Services/0O3A2734.jpg",
      "https://ik.imagekit.io/sonu2k1/TEst/Services/0O3A2743.jpg?updatedAt=1780577328144"
    ],
    alt: "Child doing ABA therapy activity",
    overview:
      "Applied Behavior Analysis (ABA) is a research-backed therapy that helps children build meaningful skills through positive reinforcement and individualized teaching. At Beyond The View, every ABA program is designed around your child's strengths, needs, and family goals.",
    highlights: [
      "One-on-one and small-group sessions with trained therapists",
      "Individualized treatment plans developed and supervised by a BCBA",
      "Focus on communication, social skills, daily living, and independence",
      "Data-driven progress tracking with regular parent updates",
      "Coordination with speech, OT, and school teams when appropriate",
    ],
    whoItsFor:
      "Children and adolescents with autism spectrum disorder and related developmental needs who benefit from structured, skill-building support at home, in-clinic, or in the community.",
  },
  {
    title: "Speech Therapy",
    titleColor1: "#753DBE",
    titleColor2: "#FF4880",
    description:
      "Building communication skills through expert speech language intervention and practice.",
    image: "https://ik.imagekit.io/sonu2k1/TEst/Services/0O3A2866.jpg?updatedAt=1780577328084",
    images: [
      "https://ik.imagekit.io/sonu2k1/TEst/Services/0O3A2814.jpg?updatedAt=1780577328047",
      "https://ik.imagekit.io/sonu2k1/TEst/Services/0O3A2866.jpg?updatedAt=1780577328084",
      "https://ik.imagekit.io/sonu2k1/TEst/Services/0O3A2788.jpg",
      "https://ik.imagekit.io/sonu2k1/TEst/Services/0O3A2787.jpg",
    ],
    alt: "Child with speech therapy number board",
    overview:
      "Our speech-language services help children express themselves, understand others, and connect with the world around them. Sessions are playful, engaging, and tailored to each child's communication profile.",
    highlights: [
      "Expressive and receptive language development",
      "Articulation and speech clarity",
      "Social communication and conversational skills",
      "Augmentative and alternative communication (AAC) support when needed",
      "Parent coaching to reinforce skills at home",
    ],
    whoItsFor:
      "Children with speech delays, language disorders, difficulty understanding directions, or challenges using communication in everyday social settings.",
  },
  {
    title: "Occupational Therapy",
    comingSoon: true,
    titleColor1: "#753DBE",
    titleColor2: "#FF4880",
    description:
      "Hands-on support for fine motor skills, sensory processing, and daily independence — launching soon.",
    image: "https://ik.imagekit.io/sonu2k1/TEst/Services/0O3A2786.jpg",
    images: [
      "https://ik.imagekit.io/sonu2k1/TEst/Services/0O3A2848.jpg?updatedAt=1780577328150",
      "https://ik.imagekit.io/sonu2k1/TEst/Services/0O3A2786.jpg",
      "https://ik.imagekit.io/sonu2k1/TEst/Services/0O3A2817.jpg",
      "https://ik.imagekit.io/sonu2k1/TEst/Services/0O3A2786.jpg?updatedAt=1780577328217"
    ],
    alt: "Children doing occupational therapy on playground",
    overview:
      "Occupational therapy helps children participate fully in daily life — from play and self-care to classroom routines. Our OT team uses structured activities to build motor skills, confidence, and functional independence.",
    highlights: [
      "Fine and gross motor skill development",
      "Sensory processing and self-regulation strategies",
      "Dressing, feeding, and other activities of daily living",
      "Handwriting readiness and pre-academic skills",
      "Play-based learning in a supportive clinic environment",
    ],
    whoItsFor:
      "Children who need support with coordination, sensory sensitivities, self-care tasks, or participating successfully at home, school, and in the community.",
  },
  {
    title: "Behavioral Support",
    titleColor1: "#753DBE",
    titleColor2: "#FF4880",
    description:
      "Comprehensive behavioral support strategies for children and families.",
    image: "https://ik.imagekit.io/sonu2k1/TEst/Services/0O3A2757.jpg",
    images: [
      "https://ik.imagekit.io/sonu2k1/TEst/Services/0O3A2727.jpg?updatedAt=1780577328191",
      "https://ik.imagekit.io/sonu2k1/TEst/Services/0O3A2757.jpg",
      "https://ik.imagekit.io/sonu2k1/TEst/Services/0O3A2753.jpg",
      "https://ik.imagekit.io/sonu2k1/TEst/Services/0O3A2732.jpg?updatedAt=1780577328272"
    ],
    alt: "Child in behavioral support session",
    overview:
      "Behavioral support focuses on understanding why challenging behaviors occur and teaching positive alternatives. We partner closely with families to create practical strategies that work in real life — not just in the clinic.",
    highlights: [
      "Functional behavior assessments and individualized support plans",
      "Teaching replacement skills and coping strategies",
      "Parent training and caregiver collaboration",
      "Consistency across home, clinic, and community settings",
      "Ongoing monitoring and plan adjustments as your child grows",
    ],
    whoItsFor:
      "Children and families navigating challenging behaviors, transitions, or situations where additional structure and positive support strategies would help daily life run more smoothly.",
  },
];
