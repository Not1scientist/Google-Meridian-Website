import { Article } from "../types";

export interface FullArticle extends Article {
  author: string;
  authorTitle: string;
  content: string[]; // Array of paragraphs
}

export const ARTICLES: Record<string, FullArticle> = {
  "emdr-trauma": {
    id: "emdr-trauma",
    title: "Healing Trauma with EMDR",
    category: "Trauma Therapy",
    date: "October 12, 2023",
    summary: "Eye Movement Desensitization and Reprocessing (EMDR) helps the brain process stuck memories. Unlike talk therapy, it focuses on the biological storage of trauma.",
    imageUrl: "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&q=80&w=1200",
    author: "Derek Wise",
    authorTitle: "MA, LCPC, Certified EMDR Therapist",
    content: [
      "Trauma is not just a memory; it is a physiological imprint on the body and mind. When we experience something overwhelming, our brain's normal processing system can get 'jammed.' The memory becomes stuck in the right hemisphere of the brain, frozen in time with all the original sounds, smells, and intense emotions attached to it.",
      "This is why, years later, a simple trigger can make you feel as though you are reliving the event right now. This is where Eye Movement Desensitization and Reprocessing (EMDR) comes in.",
      "Unlike traditional talk therapy, EMDR does not require you to re-tell the story in agonizing detail. Instead, we use 'bilateral stimulation'—typically guided eye movements, sounds, or tapping—to stimulate the brain's natural healing processes.",
      "Think of it like REM sleep, where your brain processes the day's events. EMDR replicates this state while you are awake and focused on the traumatic memory. This allows your brain to finally 'digest' the memory, moving it from a state of active distress to a state of neutral long-term storage.",
      "EMDR is recognized by the World Health Organization and the Department of Defense as a frontline treatment for PTSD. However, it is also incredibly effective for anxiety, panic disorders, and 'Little t' traumas—the accumulated wounds of childhood neglect, bullying, or relationship issues.",
      "At Meridian, we see EMDR transform lives every day. Patients often report that memories which once caused debilitating panic now feel distant and manageable. It is not about erasing the past, but about robbing it of its power to hurt you today."
    ]
  },
  "panic-disorder": {
    id: "panic-disorder",
    title: "Understanding Panic Disorder",
    category: "Anxiety",
    date: "November 5, 2023",
    summary: "Panic attacks can feel life-threatening, but they are treatable. Learn the physiological signs of panic disorder and how to differentiate it from general anxiety.",
    imageUrl: "https://images.unsplash.com/photo-1620023471012-6f9878dc2369?auto=format&fit=crop&q=80&w=1200",
    author: "Amy Wise",
    authorTitle: "MSN, APRN, PMHNP-BC",
    content: [
      "If you have ever had a panic attack, you know the feeling: the racing heart, the tight chest, the overwhelming sense of doom. Many of my patients end up in the Emergency Room, convinced they are having a heart attack, only to be told their heart is fine. They are physically safe, but psychologically, they are in agony.",
      "Panic Disorder is characterized by these sudden, unexpected surges of intense fear. Unlike general anxiety, which is often a low-level hum of worry, panic attacks are acute storms. They hijack the sympathetic nervous system, flooding the body with adrenaline.",
      "The biology of panic is powerful. The amygdala—the brain's threat detection center—misfires, signaling life-or-death danger where none exists. Once this cycle begins, the fear of having another attack becomes a source of anxiety in itself, leading to 'anticipatory anxiety.'",
      "The good news is that Panic Disorder is highly treatable. We use a combination of approaches. Psychotherapeutically, we use CBT to challenge the catastrophic thoughts ('I am dying,' 'I am going crazy') that fuel the panic.",
      "From a psychiatric perspective, medication can play a crucial role in lowering the baseline arousal of the nervous system, giving therapy a chance to work. We may use SSRIs to reduce the frequency of attacks or short-term anxiolytics to break the cycle of fear.",
      "Understanding that your body is misfiring, not failing, is the first step. You are not broken, and you do not have to live in fear of the next attack."
    ]
  },
  "navigating-ptsd": {
    id: "navigating-ptsd",
    title: "Navigating PTSD",
    category: "Trauma",
    date: "September 28, 2023",
    summary: "Post-Traumatic Stress Disorder isn't just about flashbacks. It affects sleep, trust, and physical health. We explore the path to restoring safety and control.",
    imageUrl: "https://images.unsplash.com/photo-1518534841854-46ac201725b8?auto=format&fit=crop&q=80&w=1200",
    author: "Derek Wise",
    authorTitle: "MA, LCPC, Co-Owner",
    content: [
      "Post-Traumatic Stress Disorder (PTSD) is often associated with combat veterans, but it can affect anyone who has survived a life-threatening or deeply distressing event. This includes accidents, assaults, natural disasters, or abusive relationships.",
      "PTSD is essentially a failure of the body to recover after danger has passed. The nervous system gets stuck in 'survival mode.' This manifests in three main clusters of symptoms: Re-experiencing (flashbacks, nightmares), Avoidance (staying away from places or thoughts that remind you of the trauma), and Hyperarousal (feeling jumpy, angry, or unable to sleep).",
      "One of the most painful aspects of PTSD is the isolation. You may feel like no one understands, or that you are 'damaged goods.' You might pull away from loved ones to protect them or yourself.",
      "Healing from PTSD requires a phased approach. First, we must establish safety—both in your environment and in your body. We teach grounding techniques to help you manage the physical symptoms of stress.",
      "Once you have these tools, we can begin to process the trauma itself using modalities like EMDR or Trauma-Focused CBT. This allows the brain to reorganize the memory, stripping away the visceral horror and placing it in the past where it belongs.",
      "Recovery doesn't mean forgetting. It means remembering without being overwhelmed. It means reclaiming your ability to feel safe, to trust, and to live fully in the present."
    ]
  },
  "clinical-depression": {
    id: "clinical-depression",
    title: "Clinical Depression vs. Sadness",
    category: "Mood Disorders",
    date: "December 10, 2023",
    summary: "Depression is a complex interplay of biology and psychology. We discuss the signs of clinical depression and why 'snapping out of it' isn't an option.",
    imageUrl: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?auto=format&fit=crop&q=80&w=1200",
    author: "Amy Wise",
    authorTitle: "MSN, APRN, PMHNP-BC",
    content: [
      "We all feel sad sometimes. Grief, disappointment, and loneliness are normal parts of the human experience. Clinical depression, however, is different. It is not just a mood; it is a medical condition.",
      "Major Depressive Disorder is characterized by a persistent low mood, a loss of interest in things you once enjoyed (anhedonia), changes in sleep and appetite, and profound fatigue. Patients often describe it not as sadness, but as emptiness—a heavy fog that makes even getting out of bed feel like climbing a mountain.",
      "There is a pervasive myth that you can just 'snap out of it' or that it's a matter of positive thinking. This is biologically incorrect. Depression involves dysregulation of neurotransmitters like serotonin, norepinephrine, and dopamine.",
      "At Meridian, we treat depression holistically. As a Psychiatric Nurse Practitioner, I evaluate the biological factors. Is medication needed to correct a chemical imbalance? Are there underlying issues like thyroid dysfunction?",
      "Simultaneously, we address the psychological patterns. Depression feeds on negative thought loops ('I am worthless,' 'Nothing will change'). Therapy helps interrupt these loops.",
      "The combination of medication and therapy is often the gold standard. Medication can lift the fog enough for you to engage in therapy, and therapy gives you the tools to build a life that supports remission."
    ]
  },
  "gad-anxiety": {
    id: "gad-anxiety",
    title: "Living with Generalized Anxiety (GAD)",
    category: "Anxiety",
    date: "January 15, 2024",
    summary: "When worry becomes chronic and uncontrollable, it may be GAD. Discover evidence-based strategies to quiet the mind and relax the body.",
    imageUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&q=80&w=1200",
    author: "Derek Wise",
    authorTitle: "MA, LCPC, Co-Owner",
    content: [
      "Worry is a natural function of the brain—it helps us solve problems and avoid danger. But for those with Generalized Anxiety Disorder (GAD), the 'worry mechanism' gets stuck in the 'ON' position.",
      "GAD is characterized by chronic, excessive worry about everyday things—health, money, family, work—even when there is no apparent reason for concern. It is exhausting. You might feel restless, on edge, easily fatigued, or have trouble concentrating.",
      "Clients often tell me, 'I just can't shut my brain off.' This constant state of vigilance takes a toll on the body, leading to muscle tension, headaches, and sleep disturbances.",
      "In treating GAD, we often focus on 'uncertainty intolerance.' People with GAD crave certainty in an uncertain world. They worry in an attempt to predict and control the future.",
      "Through Cognitive Behavioral Therapy (CBT), we teach you to identify 'what if' thoughts and replace them with 'what is.' We practice mindfulness to anchor you in the present moment, rather than the catastrophic future.",
      "We also focus on the physical. Since anxiety lives in the body, we must teach the body to relax through diaphragmatic breathing and progressive muscle relaxation. You can learn to trust yourself to handle whatever comes, rather than trying to control it in advance."
    ]
  },
  "family-systems": {
    id: "family-systems",
    title: "Family Systems Theory",
    category: "Family Therapy",
    date: "February 2, 2024",
    summary: "No individual exists in a vacuum. We look at how family dynamics, roles, and communication patterns influence individual mental health.",
    imageUrl: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&q=80&w=1200",
    author: "Derek Wise",
    authorTitle: "MA, LCPC, Co-Owner",
    content: [
      "In therapy, we often look at the individual. But Family Systems Theory teaches us that we cannot understand a person in isolation. We are all part of an emotional unit—the family.",
      "Imagine a mobile hanging over a crib. If you pull on one piece, the whole mobile moves. A family is the same. If one person is struggling with addiction or depression, the whole family shifts to accommodate that struggle. Roles emerge: the 'Hero,' the 'Scapegoat,' the 'Caretaker.'",
      "Often, the person identified as the 'patient' is simply the symptom bearer for a larger family issue. For example, a rebellious teenager might be acting out the tension in their parents' marriage.",
      "At Meridian, we look at these patterns. How is communication flowing? Are boundaries too rigid (disengaged) or too loose (enmeshed)?",
      "Healing often involves helping family members differentiate—learning to be close to others without losing their own sense of self. It involves changing the dance steps. If one person stops playing their role, the whole system is forced to reorganize, often into a healthier configuration.",
      "Understanding your family system is not about blame. It is about understanding the powerful forces that shaped you, so you can choose how you want to live today."
    ]
  }
};