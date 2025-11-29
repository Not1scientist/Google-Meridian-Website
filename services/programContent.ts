import { ProgramDetail } from "../types";

export const PROGRAMS: Record<string, ProgramDetail> = {
  "emdr-intensives": {
    id: "emdr-intensives",
    title: "EMDR Intensives",
    shortDescription: "Accelerate your healing with extended, focused EMDR sessions designed to provide months of progress in just days.",
    fullDescription: "Standard weekly therapy is effective, but sometimes you need relief sooner. EMDR Intensives are designed for individuals who want to accelerate their healing process. Instead of 50-minute sessions spread over months, we dedicate extended blocks of time—half-days or multiple days—to deeply process trauma and anxiety without interruption.\n\nThis format reduces the 'start-up' and 'wind-down' time of typical sessions, allowing us to stay in the healing zone longer. It is particularly effective for those traveling from out of town, busy professionals, or anyone wanting to see significant shifts quickly.",
    heroImage: "https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Accelerated Treatment Timeline",
      "Extended 3-6 Hour Sessions",
      "Reduced Overall Treatment Time",
      "Ideal for Complex Trauma"
    ],
    benefits: [
      "Months of therapy in a few days",
      "No weekly schedule commitment",
      "Deep, uninterrupted processing",
      "Faster return to daily life"
    ],
    faqs: [
      {
        question: "Is an intensive right for me?",
        answer: "Intensives are great if you have a specific traumatic event to process or if you feel 'stuck' in weekly therapy. We will conduct a screening to ensure you have the coping skills necessary for this focused work."
      },
      {
        question: "Does insurance cover intensives?",
        answer: "Typically, insurance does not cover extended sessions (intensives). These are usually self-pay services. We can discuss payment plans and package options."
      }
    ]
  },
  "adult-trauma": {
    id: "adult-trauma",
    title: "Trauma, Anxiety & EMDR",
    shortDescription: "Specialized treatment for PTSD, anxiety, panic, and relationships using evidence-based EMDR therapy. Helping individuals restore safety and control.",
    fullDescription: "Trauma can leave a lasting imprint on the mind and body, affecting how you see the world and interact with others. It often manifests not just as flashbacks, but as chronic anxiety, panic attacks, or difficulty trusting others in relationships. At Meridian Behavioral Health, we specialize in helping individuals process and heal from these experiences.\n\nWe utilize Eye Movement Desensitization and Reprocessing (EMDR), a gold-standard, evidence-based psychotherapy method. EMDR helps the brain 'digest' stuck memories, allowing you to move forward without the intense emotional or physical reactivity that trauma often causes. This approach is highly effective for both adults and adolescents.",
    heroImage: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Early Childhood Trauma",
      "Anxiety",
      "Panic Disorder",
      "Problems in Relationships",
      "Certified EMDR Therapy",
      "PTSD & C-PTSD Treatment"
    ],
    benefits: [
      "Reduction in flashbacks and panic",
      "Improved sleep and emotional regulation",
      "Freedom from the grip of past memories",
      "Restored sense of safety and control"
    ],
    faqs: [
      {
        question: "What is EMDR?",
        answer: "EMDR (Eye Movement Desensitization and Reprocessing) is a psychotherapy that enables people to heal from the symptoms and emotional distress that are the result of disturbing life experiences. It uses bilateral stimulation (eye movements or tapping) to help the brain process stuck memories."
      },
      {
        question: "Do I have to retell every detail of my trauma?",
        answer: "No. One of the benefits of EMDR is that you do not need to talk in detail about the distressing issue. We focus more on the emotions and physical sensations associated with the memory rather than the narrative itself."
      },
      {
        question: "My trauma wasn't 'major' like a war or accident. Can this still help?",
        answer: "Absolutely. We treat 'Little t' trauma (ongoing relational issues, neglect, bullying) just as seriously as 'Big T' trauma. If an experience is negatively impacting your life today, it is worth processing."
      },
      {
        question: "Why do I feel trauma physically?",
        answer: "Trauma affects the nervous system, keeping it in a state of high alert (fight/flight/freeze). Therapy helps regulate your nervous system so you don't feel constantly on edge or physically exhausted."
      },
      {
        question: "How often do we meet for trauma therapy?",
        answer: "Trauma work often benefits from consistency. We typically recommend weekly sessions initially to build safety and momentum, though this can be adjusted based on your schedule and needs."
      },
      {
        question: "Will I feel worse before I feel better?",
        answer: "It is common to feel some emotional fatigue as you begin to process difficult memories. However, our first priority is 'resourcing'—giving you the tools to manage distress before we ever dive into the deeper work, ensuring you feel supported throughout."
      }
    ]
  },
  "emerging-adults": {
    id: "emerging-adults",
    title: "Emerging Adults (Ages 18-29)",
    shortDescription: "Clinical treatment for adjustment disorders, anxiety, and difficulties with life direction and autonomy.",
    fullDescription: "The transition to adulthood is a critical developmental period often accompanied by significant psychological distress. Our program treats the clinical symptoms of anxiety, depression, and adjustment disorders that can arise during this phase.\n\nRather than simple coaching, we provide evidence-based psychotherapy to address what is sometimes described as 'failure to launch'—difficulty moving toward independent adult roles—as well as severe performance anxiety and the emotional dysregulation often triggered by academic or career pressures. Our clinicians draw from cognitive behavioral therapy (CBT), DBT-informed skills training, and trauma-informed approaches tailored to this age group. Treatment is guided by the young adult’s own goals and values, not just the expectations of family, school, or work.",
    heroImage: "https://images.unsplash.com/photo-1445307840113-507696a63050?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Adjustment Disorder Treatment",
      "Anxiety & Stress Management",
      "Building Independence & Autonomy",
      "Executive Function Skills"
    ],
    benefits: [
      "Reduction in clinical anxiety symptoms",
      "Improved emotional regulation",
      "Clarification of personal values",
      "Development of autonomous coping skills"
    ],
    faqs: [
      {
        question: "Is this life coaching?",
        answer: "No. This is clinical psychotherapy designed to treat the anxiety, depression, and adjustment disorders that often hinder a young adult's ability to function independently."
      }
    ]
  },
  "child-adolescent": {
    id: "child-adolescent",
    title: "Child & Adolescent Therapy",
    shortDescription: "Compassionate support for young minds navigating developmental challenges and anxiety.",
    fullDescription: "Growing up is complex, and many children and teens face emotional hurdles that can disrupt their development and happiness. Our child and adolescent therapy services provide a safe, engaging environment where young people can express themselves.\n\nWe use age-appropriate modalities, including play therapy techniques for younger children and cognitive-behavioral strategies for teens, to address issues such as anxiety, depression, school refusal, and behavioral challenges. We believe in partnering with parents to ensure that progress made in the therapy room translates to home and school.",
    heroImage: "https://images.unsplash.com/photo-1484820540004-1426a7121582?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Anxiety & Depression Management",
      "School & Social Issues",
      "Behavioral Interventions",
      "Parenting Support & Coaching"
    ],
    benefits: [
      "Improved emotional regulation",
      "Better communication skills",
      "Increased self-esteem",
      "Healthy coping mechanisms for stress"
    ],
    faqs: [
      {
        question: "At what age can my child start therapy?",
        answer: "We work with children as young as 5 years old. The approach varies significantly by age, with younger children engaging more in play-based expression and older teens engaging in talk therapy."
      },
      {
        question: "How involved will I be as a parent?",
        answer: "Parental involvement is crucial. For younger children, parents are often part of the sessions. For teens, we maintain their privacy to build trust, while keeping parents informed about general progress and safety concerns."
      }
    ]
  },
  "couple-marriage": {
    id: "couple-marriage",
    title: "Couple & Marriage Therapy",
    shortDescription: "Strengthening bonds, resolving conflict, and rebuilding trust between partners.",
    fullDescription: "Relationships are the cornerstone of our well-being, but they require work, understanding, and sometimes, professional guidance. Our couple and marriage therapy helps partners navigate conflicts, disconnects, and transitions.\n\nWhether you are looking to repair a relationship after infidelity, improve communication cycles, or simply deepen your emotional intimacy, our therapists provide a neutral, constructive space. We help you move from blame and defensive patterns to understanding the underlying needs and fears driving the conflict.",
    heroImage: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Conflict Resolution",
      "Communication Skills Training",
      "Infidelity Recovery",
      "Premarital Counseling"
    ],
    benefits: [
      "Deeper emotional connection",
      "Productive ways to handle disagreement",
      "Rebuilt trust and safety",
      "Shared vision for the future"
    ],
    faqs: [
      {
        question: "Can therapy help if we are considering divorce?",
        answer: "Yes. Therapy can either help save the marriage by addressing root issues or help you navigate separation amicably if that is the chosen path. We provide clarity for whichever direction you choose."
      },
      {
        question: "What if my partner refuses to come?",
        answer: "While couples therapy works best with both partners, you can still attend individual therapy to work on your own relationship patterns and reactions, which often positively influences the relationship dynamic."
      }
    ]
  },
  "family-therapy": {
    id: "family-therapy",
    title: "Family Therapy",
    shortDescription: "Healing dynamics and improving communication for the whole family unit.",
    fullDescription: "Families are systems; when one part of the system is hurting, the whole system feels it. Family therapy is designed to address specific issues that affect the psychological health of the family, such as major life transitions, mental health conditions of a family member, or chronic conflict.\n\nWe work to identify the patterns of interaction that are keeping the family stuck. By improving communication and understanding the role each person plays, we help families move from chaos and conflict to cohesion and support.",
    heroImage: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Parent-Child Conflict Resolution",
      "Blended Family Support",
      "Navigating Divorce/Separation",
      "Grief & Loss within Family"
    ],
    benefits: [
      "Reduced household conflict",
      "Better understanding of boundaries",
      "Support for family members in crisis",
      "Stronger family unit"
    ],
    faqs: [
      {
        question: "Does the whole family have to attend?",
        answer: "Ideally, yes, but we can work with whoever is willing to come. Sometimes we see parents and children together, sometimes separately, depending on the goals of the session."
      }
    ]
  },
  "individual-therapy": {
    id: "individual-therapy",
    title: "Individual Therapy",
    shortDescription: "One-on-one sessions to explore personal challenges and foster growth.",
    fullDescription: "Individual therapy is a collaborative process between you and your therapist. It is a dedicated time to focus entirely on you—your thoughts, your feelings, and your goals.\n\nWe treat a wide range of conditions including depression, generalized anxiety, social anxiety, and stress. We primarily utilize **Eye Movement Desensitization and Reprocessing (EMDR)** and **Cognitive Behavioral Therapy (CBT)**, while also incorporating **Acceptance and Commitment Therapy (ACT)** and solution-focused approaches. This blend of evidence-based modalities helps you understand your internal world and develop practical tools to improve your quality of life.",
    heroImage: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Depression & Anxiety Treatment",
      "Personal Growth & Self-Discovery",
      "Stress Management",
      "Coping Skills Development"
    ],
    benefits: [
      "Greater self-awareness",
      "Relief from symptoms of distress",
      "Improved daily functioning",
      "Long-term emotional resilience"
    ],
    faqs: [
      {
        question: "How long does therapy take?",
        answer: "The duration of therapy varies by individual. Some people see improvement in 6-8 sessions, while others benefit from longer-term support. We will discuss a treatment plan that fits your needs."
      }
    ]
  },
  "psychiatry": {
    id: "psychiatry",
    title: "Psychiatry & Medication",
    shortDescription: "Medical management of mental health conditions by board-certified practitioners.",
    fullDescription: "Sometimes, therapy alone is not enough to manage the symptoms of mental health conditions. In these cases, medication can be a vital tool. Our psychiatric services are led by board-certified practitioners who specialize in the assessment, diagnosis, and treatment of mental health disorders.\n\nWe take a conservative, holistic approach to medication. We believe in 'start low and go slow,' ensuring that medication supports your therapy rather than replacing it. We provide thorough evaluations and ongoing monitoring to ensure safety and effectiveness.\n\n**Our Approach to Medication & Safety**\n\n**The Synergy of Therapy & Medication**\nWhile psychopharmacology (medication) can be highly effective in reducing symptoms, it is rarely a complete cure on its own. Medication prepares the brain for change, but therapy facilitates that change.\n\nWe strongly advocate for combining medication management with psychotherapy. This integrated approach leads to the best long-term outcomes, as therapy helps address the behavioral patterns, trauma, and environmental factors that medication alone cannot resolve.\n\n**Responsible Prescribing Standards**\nAt Meridian Behavioral Health, we prioritize patient safety in all prescribing decisions. Schedule II controlled substances (such as medication for ADHD or anxiety) are prescribed conscientiously and strictly for indicated medical conditions.\n\nWe maintain conservative prescribing standards and conduct thorough ongoing assessments to ensure these medications remain a safe and effective part of your overall treatment plan.",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Psychiatric Evaluation",
      "Medication Management",
      "Mood Stabilization",
      "Holistic Health Integration"
    ],
    benefits: [
      "Symptom relief enabling better therapy engagement",
      "Biological support for mental health",
      "Professional medical monitoring",
      "Comprehensive care under one roof"
    ],
    faqs: [
      {
        question: "Will I have to be on medication forever?",
        answer: "Not necessarily. Many patients use medication as a temporary bridge to stability while they work on coping skills in therapy. We regularly re-evaluate your need for medication."
      },
      {
        question: "Can I just do medication without therapy?",
        answer: "We strongly recommend combining medication with therapy, as this provides the best long-term outcomes. Medication treats the symptoms, while therapy addresses the root causes and behaviors."
      }
    ]
  }
};