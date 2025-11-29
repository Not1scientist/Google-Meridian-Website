import React, { useState, useEffect } from 'react';
import { Search, Filter, BadgeCheck, X, Quote, User, Camera } from 'lucide-react';
import { ServiceType, Therapist } from '../types';

// Simple, robust image component that handles errors gracefully
const MemberImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  isPersonal?: boolean;
}> = ({ src, alt, className, isPersonal }) => {
  const [hasError, setHasError] = useState(false);
  const [uploadedPreview, setUploadedPreview] = useState<string | null>(null);

  // Check if there is a preview in local storage on mount (for "preview mode")
  useEffect(() => {
    // This is strictly for the AI Studio "preview" experience requested by user.
    // In production, this effect does nothing if keys don't match.
    try {
      // We map the expected filename to a localStorage key
      const filename = src.split('/').pop() || '';
      const cached = localStorage.getItem(`meridian_img_${filename}`);
      if (cached) {
        setUploadedPreview(cached);
        setHasError(false); // Reset error if we found a cache
      }
    } catch (e) {
      // ignore
    }
  }, [src]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setUploadedPreview(result);
        setHasError(false);
        // Save to local storage for persistence across reloads in this session
        try {
           const filename = src.split('/').pop() || '';
           localStorage.setItem(`meridian_img_${filename}`, result);
        } catch (err) {
           console.error("Storage failed", err);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Determine what to show: Uploaded Preview -> Static Src -> Fallback
  const displaySrc = uploadedPreview || src;

  // If the file isn't found and no preview exists, show "Initials"
  if (hasError && !uploadedPreview) {
    return (
      <div className={`bg-meridian-100 flex flex-col items-center justify-center text-meridian-400 p-4 text-center w-full h-full min-h-[200px] relative group`}>
        {isPersonal ? <User className="h-12 w-12 mb-2 text-meridian-300" /> : <span className="text-4xl font-serif font-bold text-meridian-300">{alt.split(' ').map(n => n[0]).join('').substring(0,2)}</span>}
        <span className="text-[10px] text-meridian-400 mt-2 px-2 max-w-[200px]">
          Image not found: <br/>
          <code className="text-accent-600 font-bold">{src}</code>
        </span>
        
        {/* Upload Button for Preview Mode */}
        <label className="absolute bottom-2 right-2 bg-white/80 hover:bg-white text-meridian-800 p-2 rounded-full cursor-pointer shadow-sm transition-all opacity-0 group-hover:opacity-100" title="Upload Preview">
          <Camera className="h-4 w-4" />
          <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} />
        </label>
      </div>
    );
  }

  return (
    <div className="relative group w-full h-full">
      <img
        src={displaySrc}
        alt={alt}
        className={className}
        onError={() => setHasError(true)}
      />
      {/* Upload Button for Preview Mode (even if image exists) */}
      <label className="absolute bottom-2 right-2 bg-white/80 hover:bg-white text-meridian-800 p-2 rounded-full cursor-pointer shadow-sm transition-all opacity-0 group-hover:opacity-100 z-10" title="Change Photo (Preview)">
        <Camera className="h-4 w-4" />
        <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} />
      </label>
    </div>
  );
};

const MOCK_TEAM: Therapist[] = [
  {
    id: 'amy-wise',
    name: 'Amy Wise',
    title: 'MSN, APRN, PMHNP-BC',
    specialties: [ServiceType.PSYCHIATRY, ServiceType.INDIVIDUAL],
    bio: 'Amy Wise is a dedicated Psychiatric Nurse Practitioner specializing in Medication Management and Brief Individual Supportive Therapy. She brings a holistic mind-body approach to care, guided by empathy and extensive clinical experience.',
    fullBio: [
      {
        title: "Clinical Services",
        content: `• Medication Management
• Brief Individual Supportive Therapy`
      },
      {
        title: "Professional Experience",
        content: `Amy Wise, MSN, APRN, PMHNP-BC

Amy has dedicated her career to providing comprehensive mental health care. She specializes in psychiatric assessment, treatment planning, medication management, and prescribing medications. With a strong foundation in cognitive behavioral therapy and mindfulness-based interventions, Amy offers a holistic approach to mental health care that addresses both the mind and body.

Amy's career began with roles that honed her skills in patient care and clinical supervision. She has developed extensive experience in managing complex psychiatric cases and creating personalized treatment plans that cater to the unique needs of each patient. Her commitment to evidence-based practice ensures that her patients receive the most effective and up-to-date treatments available.

In addition to her clinical expertise, Amy has a strong background in leadership and mentorship, having served in supervisory roles where she guided and supported nursing staff. Her ability to lead with empathy and professionalism has earned her the respect and admiration of her colleagues and patients alike.

Amy's educational background is extensive. She completed her Master of Science in Nursing at The University of South Alabama and holds a Bachelor of Science in Nursing from Touro University Nevada. Additionally, she has an Associate of Science in Nursing and an Associate of Science in Accounting from the College of Southern Nevada. She is board-certified as a Psychiatric-Mental Health Nurse Practitioner (PMHNP) and holds Nevada state licenses as a Certified Nurse Practitioner and Registered Nurse. Amy is also a member of the American Nurses Association and the American Psychiatric Nurses Association.

Her approach to patient care is characterized by a deep commitment to understanding each patient's individual experiences and needs. Amy believes in the power of therapeutic relationships and strives to create a safe, supportive environment where patients can openly discuss their concerns and work towards their mental health goals.`
      },
      {
        title: "Personal Experience",
        content: `Beyond her professional achievements, Amy is a devoted mother, wife, and daughter. Her personal experiences have shaped her empathetic approach to patient care. As a mother, she understands the challenges of balancing family responsibilities with personal and professional aspirations. As a wife, she appreciates the importance of supportive relationships in maintaining mental health. And as a daughter, she recognizes the value of family support in overcoming life's obstacles.

Amy has faced her own personal struggles, which have given her a profound understanding of the resilience required to navigate mental health challenges. This personal insight allows her to relate deeply to her patients, offering not only clinical expertise but also genuine empathy and support.

Amy's journey in Christianity has become a significant aspect of her life, guiding her principles and practice. Her faith inspires her to provide compassionate, nonjudgmental care to all her patients, regardless of their backgrounds or beliefs.`
      },
      {
        title: "Personal Interests",
        content: `Amy loves to travel and finds joy in exploring new places. She enjoys trips to California to visit various theme parks and the ocean. The Colorado Mountains hold a special place in her heart, providing a serene escape and a connection to nature. Most recently, Amy traveled to Myrtle Beach, South Carolina, where she enjoyed the beautiful coastline and vibrant culture.`
      }
    ],
    // STATIC FILE PATHS - Upload these exact filenames to your root folder
    imageUrl: 'amy-wise-profile2.jpg', 
    personalImageUrl: 'amy-wise-personal.jpg',
    available: true
  },
  {
    id: 'derek-wise',
    name: 'Derek Wise',
    title: 'MA, LCPC, Co-Owner',
    specialties: [ServiceType.INDIVIDUAL, ServiceType.COUPLES, ServiceType.FAMILY],
    bio: 'Derek Wise is the Co-owner of Meridian Behavioral Health and a Certified EMDR Therapist. A veteran and devoted family man, he brings a disciplined, compassionate approach to helping clients navigate trauma, anxiety, and life transitions.',
    fullBio: [
      {
        title: "Professional Experience",
        content: `Derek Wise is the co-owner and therapist at Meridian Behavioral Health, bringing extensive experience and a compassionate approach to his practice. With a strong background in various therapeutic modalities, Derek is dedicated to helping individuals overcome mental health challenges and improve their overall well-being.

Derek has devoted his career to providing effective and compassionate mental health care. Specializing in EMDR, Cognitive Behavioral Therapy, Client-Centered Therapy, Motivational Interviewing, and Solution Focused Therapy, Derek employs a diverse range of therapeutic modalities to meet the unique needs of his clients.

Derek's career began with roles that honed his skills in both individual and group therapy settings. He has extensive experience in managing complex mental health cases and creating personalized treatment plans. His commitment to evidence-based practice ensures that his clients receive the most effective and up-to-date treatments available.

Derek's educational background is comprehensive. He completed his Master of Arts in Clinical Mental Health Counseling from Adams State University and holds a Bachelor of Arts in Psychology. He is certified as an EMDR therapist and has extensive training in various therapeutic modalities. Derek has also served in the United States Marine Corps and the Nevada Army National Guard, experiences that contribute to his disciplined and empathetic approach to therapy.`
      },
      {
        title: "Specializations",
        content: `Rogerian (Client-Centered) Therapy: A non-directive approach that fosters a supportive and accepting environment.

Eye Movement Desensitization and Reprocessing (EMDR): An advanced therapeutic approach designed to alleviate the distress associated with traumatic memories.

Solution-Focused Brief Therapy (SFBT): A future-focused, goal-directed approach that emphasizes solutions rather than problems.

Cognitive Behavioral Therapy (CBT): A structured, goal-oriented therapy that helps clients understand and change their thought patterns.

Motivational Interviewing (MI): A client-centered counseling style that enhances motivation and commitment to change.`
      },
      {
        title: "Areas of Focus",
        content: `Stress and Anxiety Management
Trauma and PTSD
Performance Optimization
Work-Life Balance
Young Professionals and Senior Executives`
      },
      {
        title: "Therapeutic Approach",
        content: `Derek's therapeutic approach is centered around three fundamental principles: Rapport and Trust, Accurate Problem Identification, and Objective Beneficial Outcomes.`
      },
      {
        title: "Personal Experience",
        content: `Beyond his professional achievements, Derek is a devoted Christian, father, husband, and community member. His personal experiences have shaped his empathetic approach to client care. As a father and husband, he understands the importance of balancing family responsibilities with personal and professional aspirations.

Derek has faced his own personal challenges, which have given him a profound understanding of the resilience required to navigate mental health issues. This personal insight allows him to relate deeply to his clients.`
      },
      {
        title: "Personal Profile",
        content: `Derek enjoys spending time with his family and exploring new places. He finds joy in outdoor activities such as swimming, live sporting events, concerts, gun range, and traveling. The mountains hold a special place in his heart, providing a serene escape and a connection to nature.`
      }
    ],
    // STATIC FILE PATHS - Upload these exact filenames to your root folder
    imageUrl: 'derek-wise-profile.jpg',
    personalImageUrl: 'derek-wise-personal.jpg',
    available: true
  },
  {
    id: 'maribel-zehnder',
    name: 'Maribel Zehnder',
    title: 'CPC-Intern',
    specialties: [ServiceType.CHILDREN, ServiceType.FAMILY, ServiceType.INDIVIDUAL, ServiceType.COUPLES],
    bio: 'Maribel Zehnder is a Clinical Professional Counselor Intern specializing in child and family therapy. Trained as a psychologist in Mexico, she brings extensive multicultural experience and expertise in Gestalt and Mindfulness therapies to clients ages 5 to 99. Fluent in Spanish.',
    fullBio: [
      {
        title: "Professional Experience",
        content: `Maribel Zehnder brings a unique and extensive background to Meridian Behavioral Health. Before establishing her career in the United States, Maribel was trained and practiced as a psychologist in Mexico for many years. This international experience has provided her with a deep understanding of diverse cultural backgrounds and family dynamics.

Now practicing as a Clinical Professional Counselor Intern in Las Vegas, Maribel integrates her rich history of clinical work with her current licensure. She specializes in working with children (ages 5+), adolescents, and families, helping them navigate developmental hurdles, behavioral issues, and emotional disconnects.

She has been very successful in helping clients transition through life stages, drawing on her own experience moving to the United States and starting a family here.`
      },
      {
        title: "Therapeutic Approach",
        content: `Maribel's approach is grounded in Gestalt Therapy and Mindfulness. She believes in helping clients gain awareness of the present moment ("here and now") to resolve unfinished business and improve emotional regulation.

Her mindfulness training allows her to teach practical skills for anxiety and stress management, which is particularly effective for both children and adults. She works collaboratively with families to ensure the home environment supports the growth achieved in therapy.`
      },
      {
        title: "Specializations",
        content: `Child & Adolescent Therapy (Ages 5+)
Family Systems Therapy
Gestalt Therapy
Mindfulness-Based Interventions
Multicultural Counseling
Bilingual Services (English/Spanish)`
      }
    ],
    // STATIC FILE PATHS - You will need to upload maribel-zehnder-profile.jpg
    imageUrl: 'maribel-zehnder-profile.jpg',
    available: true
  }
];

const TeamPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState<Therapist | null>(null);
  
  const filteredTeam = MOCK_TEAM.filter(member => {
    const matchesFilter = filter === 'All' || member.specialties.some(s => s === filter);
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          member.bio.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedMember]);

  return (
    <div className="min-h-screen bg-meridian-50 pb-20">
      {/* Header Search Section */}
      <div className="bg-white border-b border-meridian-100">
        <div className="container mx-auto px-4 py-16">
          <h1 className="font-serif text-4xl font-bold text-meridian-900 mb-6">Our Clinical Team</h1>
          <p className="text-meridian-600 max-w-2xl mb-8">
            Our team of board-certified practitioners and licensed counselors is dedicated to providing compassionate, evidence-based care.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 items-center bg-meridian-50 p-4 rounded-xl border border-meridian-200">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-meridian-400 h-5 w-5" />
              <input 
                type="text" 
                placeholder="Search by name or keyword..." 
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-meridian-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative w-full md:w-auto">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-meridian-400 h-5 w-5" />
              <select 
                className="w-full md:w-64 pl-10 pr-8 py-3 rounded-lg border border-meridian-200 focus:ring-2 focus:ring-accent-500 outline-none appearance-none bg-white cursor-pointer"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="All">All Specialties</option>
                {Object.values(ServiceType).map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Display */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredTeam.map(member => (
            <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-meridian-100 relative">
              
              {/* TOP BANNER FOR STATUS */}
              <div className="h-2 bg-meridian-900 w-full" />
              {/* Accepting Patients Banner - Positioned ABSOLUTELY at the top of the IMAGE container in a non-overlapping bar */}
              <div className="absolute top-2 left-0 right-0 z-20 flex justify-center pointer-events-none">
                 {member.available && (
                  <div className="bg-accent-500/90 backdrop-blur-sm text-white text-[10px] font-bold py-1.5 px-6 rounded-full shadow-lg uppercase tracking-widest pointer-events-auto">
                    Accepting Patients
                  </div>
                 )}
              </div>
              
              <div className="flex flex-col sm:flex-row h-full">
                <div className="sm:w-2/5 relative h-64 sm:h-auto overflow-hidden bg-meridian-100">
                  <MemberImage
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-contain object-top transition-transform duration-500 group-hover:scale-105 pt-6" 
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-1 sm:w-3/5">
                  <div className="mb-2">
                    <h3 className="font-serif text-2xl font-bold text-meridian-900 leading-tight">{member.name}</h3>
                    <p className="text-accent-600 font-medium text-sm mt-1">{member.title}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.specialties.slice(0, 3).map((s, i) => (
                      <span key={i} className="bg-meridian-50 text-meridian-700 text-[10px] uppercase tracking-wide px-2 py-1 rounded border border-meridian-100 font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>

                  <p className="text-meridian-600 text-sm mb-6 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>

                  <button 
                    onClick={() => setSelectedMember(member)}
                    className="mt-auto flex items-center justify-center gap-2 w-full border-2 border-meridian-900 text-meridian-900 hover:bg-meridian-900 hover:text-white py-2 rounded-lg font-semibold transition-all text-sm"
                  >
                    <BadgeCheck className="h-4 w-4" /> View Full Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Profile Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-meridian-900/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedMember(null)}
          />
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[90vh] md:h-auto md:max-h-[90vh] flex flex-col md:flex-row overflow-hidden relative z-10 animate-in fade-in zoom-in-95 duration-300">
            
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-meridian-100 transition-colors z-20 shadow-md"
            >
              <X className="h-6 w-6 text-meridian-800" />
            </button>

            {/* Left Column: Images - Scrollable */}
            <div className="md:w-1/3 bg-meridian-50 p-6 flex flex-col gap-6 overflow-y-auto max-h-full border-r border-meridian-100 shrink-0 custom-scrollbar">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-md border border-meridian-200 bg-white relative flex flex-col">
                  {/* Status Bar */}
                  {selectedMember.available && (
                     <div className="bg-accent-500 text-white text-[10px] font-bold py-1.5 text-center shadow-sm uppercase tracking-widest w-full">
                        Accepting Patients
                     </div>
                  )}
                  {/* Container for image with 'object-contain' to ensure full face visibility */}
                  <div className="w-full h-[350px] bg-white flex items-center justify-center overflow-hidden">
                    <MemberImage
                      src={selectedMember.imageUrl}
                      alt={selectedMember.name}
                      className="w-full h-full object-contain object-bottom"
                    />
                  </div>
                  
                  <div className="bg-white p-2 text-center text-xs font-bold uppercase tracking-wider text-meridian-500 border-t border-meridian-100">
                    Meet Your Clinician
                  </div>
                </div>

                {selectedMember.personalImageUrl && (
                  <div className="rounded-xl overflow-hidden shadow-md border border-meridian-200 bg-white">
                    <div className="aspect-square w-full">
                      <MemberImage
                        src={selectedMember.personalImageUrl}
                        alt={`${selectedMember.name} Personal`}
                        className="w-full h-full object-cover object-center"
                        isPersonal={true}
                      />
                    </div>
                    <div className="bg-white p-2 text-center text-xs font-bold uppercase tracking-wider text-meridian-500 border-t border-meridian-100">
                      {selectedMember.name.split(' ')[0]} Beyond the Office
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-white p-6 rounded-xl border border-meridian-200 shadow-sm">
                <h4 className="font-bold text-meridian-900 mb-3">Quick Facts</h4>
                <ul className="space-y-2 text-sm text-meridian-700">
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-accent-500" />
                    <span>Accepting New Patients</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-accent-500" />
                    <span>In-Network with Insurance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Bio Content - Scrollable */}
            <div className="md:w-2/3 p-8 md:p-12 overflow-y-auto bg-white custom-scrollbar">
              <div className="mb-8">
                <h2 className="font-serif text-4xl font-bold text-meridian-900 mb-2">{selectedMember.name}</h2>
                <p className="text-xl text-accent-600 font-medium">{selectedMember.title}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedMember.specialties.map((s, i) => (
                    <span key={i} className="bg-meridian-100 text-meridian-800 text-xs uppercase tracking-wide px-3 py-1 rounded-full font-bold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-10">
                {selectedMember.fullBio ? (
                  selectedMember.fullBio.map((section, idx) => (
                    <div key={idx} className="prose prose-meridian max-w-none">
                      <h3 className="font-serif text-2xl font-bold text-meridian-900 mb-4 border-b border-meridian-100 pb-2">
                        {section.title}
                      </h3>
                      <div className="text-meridian-700 leading-relaxed whitespace-pre-wrap">
                        {section.content}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-meridian-600 text-lg leading-relaxed">
                    {selectedMember.bio}
                    <div className="mt-8 p-6 bg-meridian-50 rounded-xl border border-meridian-100">
                      <Quote className="h-8 w-8 text-accent-300 mb-4" />
                      <p className="italic text-meridian-700">
                        "I am dedicated to helping my patients find their path to wellness through compassionate, evidence-based care."
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-12 pt-8 border-t border-meridian-100 flex justify-end">
                <button 
                  onClick={() => window.location.hash = '#/contact'}
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  Schedule with {selectedMember.name.split(' ')[0]}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamPage;