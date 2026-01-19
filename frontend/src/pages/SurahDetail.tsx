import React, { useMemo, useState, useEffect } from 'react';
import { fetchSurah } from '../services/api';
import ArabicText from '../components/ArabicText';

interface SurahDetailProps {
  surahId: number;
  onBack: () => void;
}

const SurahDetail: React.FC<SurahDetailProps> = ({ surahId, onBack }) => {
  const [surah, setSurah] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSurah = async () => {
      setLoading(true);
      const data = await fetchSurah(surahId);
      if (data) {
        setSurah(data);
      }
      setLoading(false);
    };

    loadSurah();
  }, [surahId]);

  const parsedVerses = useMemo(() => {
    if (!surah) return [];
    
    const verseRegex = /\s*\((\d+)\)\s*/g;
    
    const splitArabic = surah.text.split(verseRegex).filter((p: undefined) => p !== undefined);
    const splitEnglish = surah.englishTranslation.split(verseRegex).filter((p: undefined) => p !== undefined);
    
    const verses = [];
    const maxLen = Math.max(splitArabic.length, splitEnglish.length);
    
    for (let i = 0; i < maxLen; i += 2) {
      const arabicText = splitArabic[i] || "";
      const arabicNum = splitArabic[i+1];
      
      const englishText = splitEnglish[i] || "";
      const englishNum = splitEnglish[i+1];
      
      const actualNumber = arabicNum || englishNum || (i/2 + 1).toString();
      
      if (arabicText.trim() || englishText.trim()) {
        verses.push({
          number: parseInt(actualNumber),
          arabic: arabicText.trim(),
          english: englishText.trim()
        });
      }
    }
    
    return verses;
  }, [surah]);

  if (loading) return <div className="p-20 text-center">Loading surah...</div>;
  if (!surah) return <div className="p-20 text-center">Surah not found.</div>;

  return (
    <div className="min-h-screen bg-[#FDFCF8] pb-32">
      <div className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-24 relative z-10">
          <button 
            onClick={onBack} 
            className="mb-12 flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors group px-4 py-2 rounded-lg hover:bg-white/5"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            <span className="font-bold text-xs uppercase tracking-[0.2em]">Back to Directory</span>
          </button>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10">
            <div className="text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                <span className="bg-emerald-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shadow-xl shadow-emerald-900/40">
                  {surah.id}
                </span>
                <h1 className="text-5xl md:text-6xl font-black tracking-tight">{surah.name}</h1>
              </div>
              <p className="text-slate-400 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
                {surah.meaning} <span className="mx-2 text-slate-700">•</span> {surah.revelationType} <span className="mx-2 text-slate-700">•</span> {surah.verseCount} Verses
              </p>
            </div>
            
            <div className="arabic-text text-6xl md:text-8xl font-bold text-amber-500 opacity-90 drop-shadow-2xl">
              {surah.arabicName}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10 relative z-20">
        <div className="space-y-6">
          {parsedVerses.map((verse, index) => (
            <div 
              key={index} 
              className="group grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-emerald-100 transition-all overflow-hidden"
            >
              <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-slate-50 flex flex-col justify-center bg-white">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[11px] font-black text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-colors">
                    {verse.number}
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1 opacity-50">Verse {verse.number}</p>
                    <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                      {verse.english}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-10 md:p-14 bg-[#FAFAF8] group-hover:bg-[#F7F7F0] transition-colors flex flex-col justify-center items-end">
                <div className="w-full">
                   <ArabicText 
                    text={verse.arabic} 
                    fontSize="text-3xl md:text-4xl" 
                    className="text-emerald-950 text-right w-full" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-24 flex justify-between items-center">
         {surah.id > 1 ? (
            <button 
               onClick={() => window.location.hash = `surah/${surah.id - 1}`}
               className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 hover:border-emerald-300 transition-all shadow-sm active:scale-95"
            >
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
               Previous Surah
            </button>
         ) : <div />}
         
         {surah.id < 114 && (
            <button 
               onClick={() => window.location.hash = `surah/${surah.id + 1}`}
               className="flex items-center gap-4 px-10 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-emerald-800 transition-all shadow-xl shadow-slate-900/20 active:scale-95 group"
            >
               Next Surah
               <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </button>
         )}
      </div>
    </div>
  );
};

export default SurahDetail;