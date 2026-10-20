import { useState } from 'react';
import ItineraryListSection from './ItineraryListSection';

interface ItineraryTabSectionProps {
  onOpenBooking?: () => void;
  lang: 'VI' | 'EN';
}

export default function ItineraryTabSection({ onOpenBooking, lang }: ItineraryTabSectionProps) {
  const [selectedDay, setSelectedDay] = useState<number | 'all'>('all');

  const handleSelectDay = (day: number | 'all') => {
    setSelectedDay(day);
    const listElement = document.getElementById('danh-sach-lich-trinh');
    if (listElement) {
      listElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-12 font-mono">
      <div className="space-y-4 mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-left text-glow-white border-b border-amber-500/20 pb-4">
          {lang === 'VI' ? 'II. Lịch Trình' : 'II. Itinerary'}
        </h2>
      </div>

      <div id="danh-sach-lich-trinh" className="pt-2">
        <ItineraryListSection 
          onOpenBooking={onOpenBooking} 
          onSelectDay={handleSelectDay}
          lang={lang}
        />
      </div>
    </div>
  );
}
