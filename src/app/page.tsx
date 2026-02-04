'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronRight, Heart } from 'lucide-react';

type Stage = 'intro' | 'god' | 'man' | 'jesus' | 'invitation' | 'prayer';

const PreacherAvatar = () => (
  <img
    src="/images/Jeremy.png.png"
    alt="Jeremy"
    className="mx-auto mb-6 w-32 h-auto"
  />
);

// Simple creation scene
const GodScene = () => (
  <svg viewBox="0 0 320 180" className="w-full max-w-2xl mx-auto mb-6">
    <g stroke="#111827" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 0 120 L 320 120 L 320 160 L 0 160 Z" />
      <path d="M 0 160 L 320 160" />
    </g>
    <g transform="translate(100,70)" stroke="#111827" strokeWidth="2" fill="none" strokeLinecap="round">
      <circle cx="20" cy="8" r="6" />
      <path d="M 20 14 L 20 34" />
      <path d="M 12 22 L 28 22" />
      <path d="M 20 34 L 12 48" />
      <path d="M 20 34 L 28 48" />
      <animateTransform attributeName="transform" type="translate" values="100,70; 100,72; 100,70" dur="2s" repeatCount="indefinite" />
    </g>
    <text x="60" y="110" fontFamily="serif" fontSize="16" fill="#111827" fontWeight="bold">😊</text>
    <text x="100" y="155" fontFamily="serif" fontSize="12" fill="#111827" opacity="0.6">Good Friends</text>
  </svg>
);

// Simple chasm scene
const ManScene = () => (
  <svg viewBox="0 0 320 180" className="w-full max-w-2xl mx-auto mb-6">
    <g stroke="#111827" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 0 120 L 110 120 L 140 160 L 0 160 Z" />
      <path d="M 210 120 L 320 120 L 320 160 L 180 160 Z" />
      <path d="M 110 120 L 210 120" strokeDasharray="6 6">
        <animate attributeName="stroke-dashoffset" from="0" to="12" dur="1.5s" repeatCount="indefinite" />
      </path>
      <path d="M 0 160 L 320 160" />
    </g>
    <g transform="translate(210,58)" stroke="#111827" strokeWidth="2" fill="none" strokeLinecap="round">
      <circle cx="20" cy="8" r="6" />
      <path d="M 20 14 L 20 34" />
      <path d="M 12 22 L 28 22" />
      <path d="M 20 34 L 12 48" />
      <path d="M 20 34 L 28 48" />
      <animateTransform attributeName="transform" type="translate" values="210,58; 210,60; 210,58" dur="2s" repeatCount="indefinite" />
    </g>
    <text x="30" y="112" fontFamily="serif" fontSize="12" fill="#111827">Me</text>
    <text x="260" y="112" fontFamily="serif" fontSize="12" fill="#111827">God</text>
    <text x="150" y="152" fontFamily="serif" fontSize="12" fill="#111827">Bad stuff</text>
  </svg>
);

// Cross as bridge
const JesusScene = () => (
  <svg viewBox="0 0 320 180" className="w-full max-w-2xl mx-auto mb-6">
    <g stroke="#111827" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 0 120 L 110 120 L 140 160 L 0 160 Z" />
      <path d="M 210 120 L 320 120 L 320 160 L 180 160 Z" />
      <path d="M 0 160 L 320 160" />
    </g>
    <g stroke="#111827" strokeWidth="3" fill="none" strokeLinecap="round">
      <path d="M 160 90 L 160 180">
        <animate attributeName="opacity" values="1;0.7;1" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M 110 120 L 210 120">
        <animate attributeName="opacity" values="1;0.7;1" dur="3s" repeatCount="indefinite" />
      </path>
    </g>
    <text x="30" y="112" fontFamily="serif" fontSize="12" fill="#111827">Me</text>
    <text x="260" y="112" fontFamily="serif" fontSize="12" fill="#111827">God</text>
    <text x="138" y="152" fontFamily="serif" fontSize="12" fill="#111827">Jesus</text>
  </svg>
);

// Cross bridge with person walking
const InvitationScene = () => (
  <svg viewBox="0 0 320 180" className="w-full max-w-2xl mx-auto mb-6">
    <g stroke="#111827" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 0 120 L 110 120 L 140 160 L 0 160 Z" />
      <path d="M 210 120 L 320 120 L 320 160 L 180 160 Z" />
      <path d="M 0 160 L 320 160" />
      <path d="M 110 120 L 210 120" strokeDasharray="6 6">
        <animate attributeName="stroke-dashoffset" from="0" to="12" dur="1.5s" repeatCount="indefinite" />
      </path>
    </g>
    <g stroke="#111827" strokeWidth="3" fill="none" strokeLinecap="round">
      <path d="M 160 90 L 160 180" />
      <path d="M 110 120 L 210 120" />
    </g>
    <g transform="translate(208,58)" stroke="#111827" strokeWidth="2" fill="none" strokeLinecap="round">
      <circle cx="20" cy="8" r="6" />
      <path d="M 20 14 L 20 34" />
      <path d="M 12 22 L 28 22" />
      <path d="M 20 34 L 12 48" />
      <path d="M 20 34 L 28 48" />
      <animateTransform attributeName="transform" type="translate" values="208,58; 208,60; 208,58" dur="2s" repeatCount="indefinite" />
    </g>
    <text x="30" y="112" fontFamily="serif" fontSize="12" fill="#111827">Me</text>
    <text x="260" y="112" fontFamily="serif" fontSize="12" fill="#111827">God</text>
  </svg>
);

// Praying person
const PrayerScene = () => (
  <svg viewBox="0 0 320 180" className="w-full max-w-2xl mx-auto mb-6">
    <g stroke="#111827" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 0 120 L 110 120 L 140 160 L 0 160 Z" />
      <path d="M 210 120 L 320 120 L 320 160 L 180 160 Z" />
      <path d="M 0 160 L 320 160" />
    </g>
    <g stroke="#111827" strokeWidth="3" fill="none" strokeLinecap="round">
      <path d="M 160 90 L 160 180">
        <animate attributeName="opacity" values="1;0.7;1" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M 110 120 L 210 120">
        <animate attributeName="opacity" values="1;0.7;1" dur="3s" repeatCount="indefinite" />
      </path>
    </g>
    <g transform="translate(60,58)" stroke="#111827" strokeWidth="2" fill="none" strokeLinecap="round">
      <circle cx="20" cy="8" r="6" />
      <path d="M 20 14 L 20 34" />
      <path d="M 20 14 L 16 24 M 20 14 L 24 24 M 16 24 L 24 24" />
      <path d="M 20 34 L 12 48" />
      <path d="M 20 34 L 28 48" />
      <animateTransform attributeName="transform" type="translate" values="60,58; 60,60; 60,58" dur="2s" repeatCount="indefinite" />
    </g>
    <text x="30" y="112" fontFamily="serif" fontSize="12" fill="#111827">Me</text>
    <text x="260" y="112" fontFamily="serif" fontSize="12" fill="#111827">God</text>
  </svg>
);

export default function Page() {
  const [stage, setStage] = useState<Stage>('intro');
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [audioStarted, setAudioStarted] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const nextStage = () => {
    const stages: Stage[] = ['intro', 'god', 'man', 'jesus', 'invitation', 'prayer'];
    const currentIndex = stages.indexOf(stage);
    if (currentIndex < stages.length - 1) {
      setStage(stages[currentIndex + 1]);
      setTimeout(() => window.scrollTo(0, 0), 50);
    }
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  useEffect(() => {
    if (audioRef.current && audioEnabled && !audioStarted) {
      audioRef.current.volume = 0;
      audioRef.current.play().catch(() => {});
      setAudioStarted(true);
    }
  }, []);

  useEffect(() => {
    if (audioRef.current && audioStarted) {
      if (audioEnabled) {
        audioRef.current.volume = 0.05;
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [audioEnabled, audioStarted]);

  const toggleAudio = () => {
    if (!audioStarted) {
      setAudioStarted(true);
    }
    setAudioEnabled(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-blue-50 text-gray-900">
      <audio ref={audioRef} loop>
        <source src="/audio/jeremusic70-amazing-grace-instrumental-145357.mp3" type="audio/mpeg" />
        <source src="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=" type="audio/wav" />
      </audio>
      
      <button
        onClick={toggleAudio}
        className="fixed top-4 right-4 z-50 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all"
        title={audioEnabled ? "Mute music" : "Play music"}
      >
        {audioEnabled ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        )}
      </button>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <div className="flex justify-between mb-2 text-sm font-bold text-purple-800">
            <span>God</span>
            <span>Me</span>
            <span>Jesus</span>
            <span>Friends</span>
          </div>
          <div className="w-full h-2 bg-purple-200 rounded-sm overflow-hidden border border-purple-300">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500"
              style={{ 
                width: stage === 'intro' ? '0%' : 
                       stage === 'god' ? '25%' : 
                       stage === 'man' ? '50%' : 
                       stage === 'jesus' ? '75%' : '100%' 
              }}
            />
          </div>
        </div>

        {stage === 'intro' && (
          <div className="text-center space-y-8 animate-fade-in">
            <div className="max-w-3xl mx-auto bg-white border-4 border-purple-500 shadow-2xl p-12 rounded-lg">
              <div className="border-2 border-purple-300 p-8">
                <PreacherAvatar />
                <h1 className="text-4xl font-bold mb-6 text-purple-900">Hi Kids! 👋</h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  I'm Jeremy! Want to hear an amazing story about God and Jesus? It's the best story ever!
                </p>
                <button
                  onClick={nextStage}
                  className="px-10 py-4 bg-purple-600 text-white text-lg hover:bg-purple-700 transition-all shadow-lg flex items-center gap-2 mx-auto border-2 border-purple-700 rounded"
                >
                  Yes! Tell Me! <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        )}

        {stage === 'god' && (
          <div className="space-y-8 animate-fade-in">
            <div className="max-w-3xl mx-auto bg-white border-4 border-purple-500 shadow-2xl p-10 rounded-lg">
              <div className="border-2 border-purple-300 p-8 space-y-6">
                <PreacherAvatar />
                <GodScene />
                <h2 className="text-3xl font-bold mb-6 text-center text-purple-900">God Made Everything! 🌍</h2>
                <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>

                <p className="text-lg leading-relaxed text-gray-800">
                  God made the whole world! The sun, the stars, animals, people—everything! And He made YOU! He thinks you're super special.
                </p>
                
                <div className="bg-purple-100 border-2 border-purple-300 p-6 rounded">
                  <p className="text-center italic text-gray-800 font-semibold">
                    "God made you on purpose. You are loved! 💜"
                  </p>
                </div>

                <p className="text-lg leading-relaxed text-gray-800">
                  God is the best! He's super strong, super smart, and He loves everyone—especially you! God wanted to be best friends with us.
                </p>

                <button
                  onClick={nextStage}
                  className="w-full px-6 py-3 bg-purple-600 text-white hover:bg-purple-700 transition-all border-2 border-purple-700 rounded"
                >
                  Continue <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        )}

        {stage === 'man' && (
          <div className="space-y-8 animate-fade-in">
            <div className="max-w-3xl mx-auto bg-white border-4 border-red-500 shadow-2xl p-10 rounded-lg">
              <div className="border-2 border-red-300 p-8 space-y-6">
                <PreacherAvatar />
                <ManScene />
                <h2 className="text-3xl font-bold mb-6 text-center text-red-900">Oh No! We Made Bad Choices 😞</h2>
                <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>

                <p className="text-lg leading-relaxed text-gray-800">
                  Everyone does bad things sometimes. We make bad choices. We hurt people. We don't listen. And that bad stuff separates us from God.
                </p>
                
                <div className="bg-red-100 border-2 border-red-300 p-6 rounded">
                  <p className="text-center italic text-gray-800 font-semibold">
                    "Everyone messes up. That's called sin. 😢"
                  </p>
                </div>

                <p className="text-lg leading-relaxed text-gray-800">
                  See the big gap? That's what sin does. It puts a wall between us and God. We can't jump across it by ourselves. But don't worry—God has a plan!
                </p>

                <button
                  onClick={nextStage}
                  className="w-full px-6 py-3 bg-red-600 text-white hover:bg-red-700 transition-all border-2 border-red-700 rounded"
                >
                  What's the Plan? <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        )}

        {stage === 'jesus' && (
          <div className="space-y-8 animate-fade-in">
            <div className="max-w-3xl mx-auto bg-white border-4 border-blue-500 shadow-2xl p-10 rounded-lg">
              <div className="border-2 border-blue-300 p-8 space-y-6">
                <PreacherAvatar />
                <JesusScene />
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Jesus is the Bridge! ✝️</h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>

                <p className="text-lg leading-relaxed text-gray-800">
                  Jesus is God's son! He came to be a bridge so we can get back to God. Jesus never did anything wrong. He was perfect!
                </p>
                
                <div className="bg-blue-100 border-2 border-blue-300 p-6 rounded">
                  <p className="text-center italic text-gray-800 font-semibold">
                    "Jesus died on the cross to take away our bad stuff. He loves us THAT much! 💙"
                  </p>
                </div>

                <p className="text-lg leading-relaxed text-gray-800">
                  Jesus took the punishment for our bad choices. Then He came back to life! That means Jesus is strong enough to save us. He IS the bridge!
                </p>

                <button
                  onClick={nextStage}
                  className="w-full px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-all border-2 border-blue-700 rounded"
                >
                  What Do I Do? <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        )}

        {stage === 'invitation' && (
          <div className="space-y-8 animate-fade-in">
            <div className="max-w-3xl mx-auto bg-white border-4 border-green-500 shadow-2xl p-10 rounded-lg">
              <div className="border-2 border-green-300 p-8 space-y-6">
                <PreacherAvatar />
                <InvitationScene />
                <h2 className="text-3xl font-bold mb-6 text-center text-green-900">Do You Want to be God's Friend? 🤝</h2>
                <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>

                <p className="text-lg leading-relaxed text-gray-800">
                  You can walk across the Jesus bridge RIGHT NOW and be friends with God forever!
                </p>
                
                <div className="bg-green-100 border-2 border-green-300 p-6 space-y-3 rounded">
                  <p className="text-lg text-gray-800"><strong>Say sorry</strong> for your bad stuff</p>
                  <p className="text-lg text-gray-800"><strong>Believe</strong> that Jesus loves you</p>
                  <p className="text-lg text-gray-800"><strong>Ask Jesus</strong> to be your best friend forever</p>
                </div>

                <p className="text-lg leading-relaxed text-gray-800">
                  Do you want to do this? If yes, click the button below and we'll pray!
                </p>

                <button
                  onClick={nextStage}
                  className="w-full px-6 py-3 bg-green-600 text-white hover:bg-green-700 transition-all border-2 border-green-700 rounded"
                >
                  Yes, Let's Pray! <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        )}

        {stage === 'prayer' && (
          <div className="space-y-8 animate-fade-in">
            <div className="max-w-3xl mx-auto bg-white border-4 border-yellow-500 shadow-2xl p-10 rounded-lg">
              <div className="border-2 border-yellow-300 p-8 space-y-6">
                <PreacherAvatar />
                <PrayerScene />
                <h2 className="text-3xl font-bold mb-6 text-center text-yellow-900">Let's Pray! 🙏</h2>
                <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>

                <p className="text-lg font-semibold leading-relaxed text-gray-800 italic">
                  "Dear Jesus, I'm sorry for the bad stuff I do. I believe You love me and died for me. Please forgive me. Be my best friend forever. Help me follow You. Thank You! Amen."
                </p>

                <div className="bg-yellow-100 border-2 border-yellow-300 p-6 space-y-4 rounded">
                  <h3 className="text-2xl font-bold text-yellow-900">What Happens Next? 🎉</h3>
                  <div className="space-y-3 text-gray-800">
                    <p><strong>1. Tell a grown-up!</strong> Tell your parents or a teacher what you did.</p>
                    <p><strong>2. Go to church!</strong> Find a church where they teach about Jesus.</p>
                    <p><strong>3. Read the Bible!</strong> Start with the Gospel of John to learn about Jesus.</p>
                    <p><strong>4. Pray every day!</strong> Talk to Jesus like He's your best friend (because He is!).</p>
                  </div>
                  <div className="pt-4 border-t-2 border-yellow-300 mt-4">
                    <a 
                      href="https://www.9marks.org/church-search/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition-all rounded"
                    >
                      Find a Church Near You
                    </a>
                  </div>
                </div>

                <p className="text-center text-2xl font-bold text-yellow-900 pt-4">
                  Welcome to God's Family! 🎊
                </p>

                <button
                  onClick={() => setStage('intro')}
                  className="w-full px-6 py-3 bg-yellow-600 text-white hover:bg-yellow-700 transition-all border-2 border-yellow-700 rounded"
                >
                  Start Over
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="border-t border-purple-300 mt-12 py-8 text-center text-sm text-gray-600">
        <p><strong className="text-purple-900">Created by Harmony Baptist Church</strong></p>
        <p>Waynesville, Missouri</p>
      </footer>
    </div>
  );
}
