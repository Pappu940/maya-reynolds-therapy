/**
 * All website copy lives here and is derived ONLY from
 * Dr. Maya Reynolds' profile (the "single source of truth").
 *
 * Facts used from the profile:
 * - Licensed clinical psychologist (PsyD), Santa Monica, California
 * - Adults: anxiety, panic, trauma, burnout, perfectionism, stress
 * - Approach: warm, collaborative, grounded; CBT, EMDR, mindfulness-based
 *   practices, body-oriented techniques
 * - Trauma: single-incident + complex/long-standing; paced, safety, stabilization
 * - Clients: high-achieving; entrepreneurs, creatives, professionals
 * - In-person (Santa Monica office) + secure telehealth for clients in California
 * - Office: quiet, private, calm, grounding, natural light, uncluttered
 * - Address: 123th Street 45 W, Santa Monica, CA 90401
 */

export const site = {
  name: "Dr. Maya Reynolds, PsyD",
  shortName: "Maya Reynolds",
  tagline: "Clinical Psychology",
  city: "Santa Monica",
  region: "CA",
  address: {
    street: "123th Street 45 W",
    city: "Santa Monica",
    state: "CA",
    zip: "90401",
  },
  title: "Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Licensed clinical psychologist offering anxiety, panic, trauma (EMDR) and burnout therapy for adults in Santa Monica, CA, with secure telehealth across California.",
};

export const nav = {
  specialties: [
    { label: "Anxiety & Panic", href: "#specialties" },
    { label: "Trauma & EMDR", href: "#specialties" },
    { label: "Burnout & Perfectionism", href: "#specialties" },
  ],
  methods: [
    { label: "CBT", href: "#methods" },
    { label: "EMDR", href: "#methods" },
    { label: "Mindfulness-Based Practices", href: "#methods" },
    { label: "Body-Oriented Techniques", href: "#methods" },
  ],
};

export const hero = {
  eyebrow: "In-person in Santa Monica, CA & telehealth across California",
  // Rendered as: H1_PRE <script>H1_SCRIPT</script> H1_POST
  h1Pre: "Anxiety & trauma therapy in Santa Monica to help you finally",
  h1Script: "exhale",
  h1Post: ".",
  sub: "Dr. Maya Reynolds is a licensed clinical psychologist who helps high-achieving adults move through anxiety, panic, trauma and burnout with practical tools and real depth.",
  cta: "Request an appointment",
};

export const welcome = {
  heading: "Functional on the outside, exhausted on the inside?",
  eyebrow: "In my Santa Monica practice, I want to help you feel steady again.",
  body: [
    "Many of the adults I work with are thoughtful, driven and self-aware, yet quietly exhausted by constant worry, tension in the body, trouble sleeping, or the feeling that they are always bracing for something to go wrong.",
    "Therapy with me is a warm, collaborative and grounded space. Sessions are structured enough to feel supportive, with room for reflection and depth, so you can understand both the emotional and physical sides of what you are living with.",
  ],
  cta: "Request an appointment",
};

export const services = {
  heading: "How I can",
  script: "help",
  sub: "Therapy for adults in Santa Monica, CA, in person or by secure telehealth anywhere in California.",
  items: [
    {
      title: "Anxiety & Panic Therapy",
      image: "/images/anxiety-office-art.webp",
      alt: "Calm abstract art above a soft sofa, a quiet space for anxiety and panic therapy in Santa Monica",
      body: "Constant worry, racing thoughts and a body that never fully relaxes are exhausting. Using CBT, mindfulness-based practices and body-oriented techniques, we work on the thinking patterns and the physical tension together, so calm becomes something you can reach for in daily life.",
    },
    {
      title: "Trauma Therapy with EMDR",
      image: "/images/trauma-office-chair.webp",
      alt: "A comfortable armchair with a soft throw, a grounding spot for trauma therapy in Santa Monica",
      body: "Whether you are healing from a single event or long-standing patterns rooted in childhood, relationships or chronic stress, the work is paced carefully. We focus on safety and stabilization first, using EMDR and other evidence-based methods, so you feel more regulated both in session and in everyday life.",
    },
    {
      title: "Burnout & Perfectionism",
      image: "/images/burnout-office-rest.webp",
      alt: "Leather armchair, rug and glass table, a place to slow down and recover from burnout",
      body: "If you are an entrepreneur, creative or professional who has pushed through stress for years and feels disconnected from yourself, therapy can be the place to slow down. Together we ease perfectionism and internal pressure and build more sustainable ways of living and working.",
    },
  ],
};

export const quote = {
  text: "You deserve a space where you feel respected, understood and actively involved.",
  script: "Your pace matters here.",
};

export const expertise = {
  heading: "Areas of",
  script: "expertise",
  items: [
    "Anxiety",
    "Panic",
    "Trauma",
    "Complex trauma",
    "Professional burnout",
    "Perfectionism",
    "Chronic stress",
    "Sleep difficulties",
  ],
};

export const methods = {
  heading: "Some of the",
  script: "methods",
  headingPost: "I use",
  items: [
    {
      title: "Cognitive-Behavioral Therapy (CBT)",
      body: "A practical, evidence-based approach that helps you notice the thought patterns driving anxiety and overthinking, and build tools that change how they land.",
    },
    {
      title: "EMDR",
      body: "An evidence-based method I use in trauma work, paced carefully and always grounded in safety and stabilization.",
    },
    {
      title: "Mindfulness-Based Practices",
      body: "Gentle, grounding skills that help you slow down, reconnect with yourself, and respond to stress with more steadiness.",
    },
    {
      title: "Body-Oriented Techniques",
      body: "Anxiety and trauma live in the body as much as the mind. These techniques help you understand and ease the physical side of what you feel.",
    },
  ],
};

export const office = {
  heading: "A calm, private space in",
  script: "Santa Monica",
  body: [
    "My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often tell me the room itself helps them feel more at ease when they arrive.",
    "I offer in-person sessions here in Santa Monica, and secure telehealth sessions for clients located in California, whichever fits your life best.",
  ],
  details: [
    { label: "Address", value: "123th Street 45 W, Santa Monica, CA 90401" },
    { label: "Sessions", value: "In-person in Santa Monica, or secure telehealth for clients in California" },
    { label: "The space", value: "Quiet, private, natural light, comfortable and uncluttered" },
  ],
  images: [
    { src: "/images/office-1.webp", alt: "Therapy office in Santa Monica with a gray sofa, abstract art, exposed brick and tall sunlit windows", w: 1400, h: 1050 },
    { src: "/images/office-2.webp", alt: "Calming counseling room with a framed beach print, olive tree, bookshelf and soft seating", w: 1400, h: 1050 },
    { src: "/images/office-detail.webp", alt: "Sofa, floor lamp and framed coastal print in Dr. Reynolds' Santa Monica therapy office", w: 686, h: 526 },
  ],
};

export const about = {
  eyebrow: "Meet your therapist",
  heading: "Hi, I'm Dr. Maya Reynolds, a clinical psychologist in",
  script: "Santa Monica",
  image: "/images/maya-reynolds.webp",
  alt: "Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica, CA",
  body: [
    "I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.",
    "I take a warm, collaborative and grounded approach, integrating CBT, EMDR, mindfulness-based practices and body-oriented techniques. My goal is not just symptom relief, but helping you build insight, resilience and a stronger relationship with yourself over time.",
    "If you want a therapist who combines practical tools with depth-oriented work, and who understands the realities of living and working in a fast-paced environment, I may be a good fit.",
  ],
  cta: "Request an appointment",
};

export const faqs = {
  heading: "Frequently asked",
  script: "questions",
  items: [
    {
      q: "What does therapy with Dr. Reynolds help with?",
      a: "Dr. Reynolds works with adults on anxiety, panic, trauma and burnout, along with perfectionism and high internal pressure. Many clients feel “functional” on the outside while struggling with constant worry, tension in the body, difficulty sleeping, or a sense of always bracing for something to go wrong.",
    },
    {
      q: "Do you offer in-person therapy in Santa Monica?",
      a: "Yes. In-person sessions take place at the Santa Monica office at 123th Street 45 W, a quiet, private space with natural light and a comfortable, uncluttered feel.",
    },
    {
      q: "Is online therapy available?",
      a: "Yes. Secure telehealth sessions are available for clients located in California, so you can work with Dr. Reynolds from wherever in the state suits you best.",
    },
    {
      q: "What is your approach to trauma therapy?",
      a: "Trauma work is an important part of the practice, for both single-incident trauma and more complex, long-standing patterns. The work is paced carefully, with an emphasis on safety and stabilization, using evidence-based methods such as EMDR, so you feel more regulated in daily life, not just during sessions.",
    },
    {
      q: "What types of therapy do you use?",
      a: "Dr. Reynolds integrates cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices and body-oriented techniques to address both the emotional and physiological sides of what you are experiencing.",
    },
    {
      q: "I seem to be coping well. Is therapy still for me?",
      a: "Very often, yes. Many clients are high-achieving, thoughtful and self-aware, yet feel exhausted, stuck in overthinking or emotionally on edge. Therapy can be a space to slow down, reconnect, and find more sustainable ways of living and working.",
    },
    {
      q: "What can I expect from sessions?",
      a: "Sessions are structured enough to feel supportive while leaving space for reflection and depth. You are respected and actively involved in the process, and the aim is insight, resilience and a stronger relationship with yourself, not only symptom relief.",
    },
  ],
};

export const contact = {
  heading: "Let's find your",
  script: "calm",
  sub: "Tell me a little about what brings you to therapy and whether you prefer in-person sessions in Santa Monica or telehealth within California.",
};

export const footer = {
  blurb:
    "Therapy for adults with anxiety, panic, trauma and burnout, in person in Santa Monica, CA and by secure telehealth across California.",
  crisis: "If you are in crisis or need immediate help, call or text 988 (U.S. Suicide & Crisis Lifeline) or call 911.",
};
