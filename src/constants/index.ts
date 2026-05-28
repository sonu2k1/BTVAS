export const APP_NAME = "Beyond The View Autism Services";

export const CONTACT_INFO = {
  phone: "(404) 999-9999",
  email: "info@btvas.com",
  address: "Atlanta, GA",
};

export const CLINIC_HOURS = {
  weekdays: "8:00 AM - 5:00 PM",
  weekends: "Closed",
};

export const TESTIMONIALS = [
  {
    quote:
      "I couldn't have asked for a better therapy center for my son. The center and staff communicate with parents daily regarding treatment plans, activities offered, day to day progression, etc. This center truly makes us feel like family from parent drop offs in the morning or just waiting after hours to ensure each kiddo is picked up. Coco has been attending Beyond The View for well over a year now, and the progress speaks for itself. I am so happy with the center and services. I can't thank Beyond Thew View enough.",
    name: "",
  },
  {
    quote:
      "My daughter and my grandson have been here for a while now. The staff is very great at communicating, they care and make sure you are involved with their treatment plan. They have learned so much since attending.",
    name: "",
  },
  {
    quote:
      "Been great thus far. My son is very excited every time we're pulling into the center. He's eager to go right along with his therapist. I appreciate you all.",
  },
];

export const GETTING_STARTED_STEPS = [
  {
    number: 1,
    title: "Intake Form",
    description:
      "Complete our intake form so we can learn more about your child & your family's needs",
  },
  {
    number: 2,
    title: "Submit Required Document",
    description:
      "Provide your child's psychological evaluation, insurance card, & any supporting medical documentation",
  },
  {
    number: 3,
    title: "Insurance Verification",
    description:
      "Our team verifies your insurance benefits & confirm ABA coverage",
  },
  {
    number: 4,
    title: "Autism Behavior Screening Survey",
    description:
      "Autism screening to assess your child's support needs.",
  },
  {
    number: 5,
    title: "Initial Assessment",
    description:
      "A Board Certified Behaviour Analyst (BCBA) conducts comprehensive assessment with your child",
  },
  {
    number: 6,
    title: "Treatment Plan",
    description:
      "An Individualized treatment plan is created based on the assessment & submitted for insurance approval",
  },
  {
    number: 7,
    title: "Begin Therapy",
    description:
      "Once approved services are scheduled & your child begins ABA therapy",
  },
];

export const steps = GETTING_STARTED_STEPS;

export const faqs = [
  {
    question: "Does Speech and OT require a separate referral from ABA?",
    answer:
      "No, our team will coordinate all necessary referrals and documentation as part of your child's comprehensive care plan.",
  },
  {
    question: "How long is the process to begin services?",
    answer:
      "The process typically takes 2–4 weeks from initial intake to starting therapy, depending on insurance verification and assessment scheduling.",
  },
  {
    question: "Will my child need ABA therapy forever?",
    answer:
      "ABA therapy is goal-oriented. As your child meets their targets and develops skills, services are gradually reduced. The goal is always independence.",
  },
  {
    question: "How many hours of ABA therapy will my child receive?",
    answer:
      "Hours are individualized based on your child's assessment and insurance approval, typically ranging from 10 to 40 hours per week.",
  },
  {
    question: "Can parents be involved in therapy?",
    answer:
      "Absolutely. Parent involvement is a core part of our approach. We provide training and regular updates so you can support your child's progress at home.",
  },
];

export const FAQS = faqs;

export const INSURANCE_LOGOS = [
  { src: "/images/logo-bcbs-Photoroom.svg", alt: "BlueCross BlueShield", width: 355, height: 74 },
  { src: "/images/Unitedhealthcare.svg", alt: "UnitedHealthcare", width: 200, height: 74 },
  { src: "/images/CareSource.png", alt: "CareSource", width: 150, height: 74 },
  { src: "/images/Molina.png", alt: "Molina Healthcare", width: 200, height: 75 },
  { src: "/images/Georgie.png", alt: "Georgie", width: 153, height: 74 },
  { src: "/images/Amerigroup.png", alt: "Amerigroup", width: 200, height: 75 },
] as const;

