import { MapPin, Sun, Sunset, Moon, Clock } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ItineraryListSectionProps {
  onOpenBooking?: () => void;
  onSelectDay?: (day: number) => void;
  lang: 'VI' | 'EN';
}

interface Item {
  time: string;
  activity: string;
  locationNote: string;
  details?: string;
  badge?: string;
}

interface DaySessionData {
  sessionKey: 'morning' | 'noon' | 'evening';
  sessionName: string;
  timeRange: string;
  icon: typeof Sun;
  colorClass: string;
  items: Item[];
}

export default function ItineraryListSection({ lang }: ItineraryListSectionProps) {
  const isEn = lang === 'EN';

  const t = {
    dayBadge: isEn ? 'DAY' : 'NGÀY',
    session: {
      morning: isEn ? 'Morning' : 'Sáng',
      noon: isEn ? 'Noon' : 'Trưa',
      evening: isEn ? 'Afternoon - Evening' : 'Chiều - Tối',
    }
  };

  const day1Sessions: DaySessionData[] = [
    {
      sessionKey: 'morning',
      sessionName: t.session.morning,
      timeRange: '04:00 - 11:15',
      icon: Sun,
      colorClass: 'from-amber-500/20 to-amber-600/5 text-amber-300 border-amber-500/30',
      items: [
        {
          time: '04:00',
          activity: isEn ? 'Group gathers at Tan Son Nhat Airport (HCMC) for check-in' : 'Đoàn có mặt ở sân bay Tân Sơn Nhất (TPHCM) để làm thủ tục',
          locationNote: isEn ? 'Tan Son Nhat Airport, Domestic T1' : 'Sân bay Tân Sơn Nhất, Ga Quốc Nội T1',
          badge: isEn ? 'Check-in' : 'Thủ Tục'
        },
        {
          time: '05:45 - 07:15',
          activity: isEn ? 'Flight from HCMC to Hue by Vietnam Airlines (VNA)' : 'Di chuyển từ TPHCM đến Huế bằng máy bay VNA',
          locationNote: 'SGN ✈ HUI (Phú Bài, Huế)',
          badge: 'Vietnam Airlines'
        },
        {
          time: '08:00 - 09:00',
          activity: isEn ? 'Breakfast: Com My Bun Hen' : 'Ăn sáng ở Cơm Mỳ Bún Hến',
          locationNote: '760 Nguyễn Tất Thành, Phú Bài, Huế',
          badge: isEn ? 'Breakfast' : 'Ăn Sáng'
        },
        {
          time: '09:30 - 10:45',
          activity: isEn ? 'Visit Minh Mang Royal Tomb' : 'Tham quan Lăng Minh Mạng',
          locationNote: isEn ? 'Minh Mang Tomb, Huong Tho, Hue' : 'Hiếu Lăng, Hương Thọ, TP. Huế',
          badge: isEn ? 'Heritage' : 'Di Sản'
        },
        {
          time: '10:45 - 11:15',
          activity: isEn ? 'Transfer to Khai Dinh Royal Tomb' : 'Di chuyển đến lăng Khải Định',
          locationNote: isEn ? 'Scenic road to Thuy Bang' : 'Tuyến đường di sản Thủy Bằng',
          badge: isEn ? 'Transfer' : 'Di Chuyển'
        }
      ]
    },
    {
      sessionKey: 'noon',
      sessionName: t.session.noon,
      timeRange: '11:15 - 15:30',
      icon: Sunset,
      colorClass: 'from-orange-500/20 to-orange-600/5 text-orange-300 border-orange-500/30',
      items: [
        {
          time: '11:15 - 12:30',
          activity: isEn ? 'Visit Khai Dinh Royal Tomb (Ung Lang)' : 'Tham quan Lăng Khải Định',
          locationNote: 'Ứng Lăng, Thủy Bằng, Hương Thủy, Huế',
          badge: isEn ? 'Architecture' : 'Kiến Trúc'
        },
        {
          time: '13:00 - 14:00',
          activity: isEn ? 'Lunch: Traditional Hue Folk Cakes at Banh Ganh Hue' : 'Ăn trưa ở bánh gánh Huế',
          locationNote: '51a Võ Thị Sáu, Thuận Hóa, TP. Huế',
          badge: isEn ? 'Specialty' : 'Đặc Sản'
        },
        {
          time: '14:15 - 15:30',
          activity: isEn ? 'Check-in and rest at 4★ Century Riverside Hotel' : 'Check in và nghỉ ngơi tại khách sạn Century Riverside Hotel',
          locationNote: '49 Lê Lợi, TP. Huế (Bờ sông Hương)',
          badge: '4★ Hotel'
        }
      ]
    },
    {
      sessionKey: 'evening',
      sessionName: t.session.evening,
      timeRange: '16:00 - 21:30',
      icon: Moon,
      colorClass: 'from-indigo-500/20 to-indigo-600/5 text-indigo-300 border-indigo-500/30',
      items: [
        {
          time: '16:00 - 18:00',
          activity: isEn ? 'Visit Thuy Xuan Incense Village (sightseeing, rental of traditional royal costumes, incense making experience, souvenir shopping)' : 'Tham quan làng Hương Thủy Xuân (tham quan, thuê trang phục truyền thống chụp ảnh, trải nghiệm làm hương, mua quà,...)',
          locationNote: '84 Huyền Trân Công Chúa, Thủy Xuân, Huế',
          badge: isEn ? 'Culture' : 'Trải Nghiệm'
        },
        {
          time: '18:30 - 19:30',
          activity: isEn ? 'Dinner at Madam Thu 2 Restaurant' : 'Ăn tối tại Madam Thu 2',
          locationNote: '4 Võ Thị Sáu, Thuận Hóa, TP. Huế',
          badge: isEn ? 'Dinner' : 'Ẩm Thực Tối'
        },
        {
          time: '20:00 - 21:00',
          activity: isEn ? 'Listen to Hue royal folk songs on dragon boat along the Perfume River' : 'Nghe ca Huế trên sông Hương tại bến thuyền Tòa Khâm',
          locationNote: 'Bến Thuyền Tòa Khâm, 5 Lê Lợi, TP. Huế',
          badge: isEn ? 'Dragon Boat' : 'Thuyền Rồng'
        },
        {
          time: '21:30',
          activity: isEn ? 'Return to hotel and rest' : 'Về lại khách sạn và nghỉ ngơi',
          locationNote: 'Century Riverside Hotel',
          badge: isEn ? 'Rest' : 'Nghỉ Đêm'
        }
      ]
    }
  ];

  const day2Sessions: DaySessionData[] = [
    {
      sessionKey: 'morning',
      sessionName: t.session.morning,
      timeRange: '08:00 - 11:15',
      icon: Sun,
      colorClass: 'from-amber-500/20 to-amber-600/5 text-amber-300 border-amber-500/30',
      items: [
        {
          time: '08:00 - 08:30',
          activity: isEn ? 'Breakfast: Bun bo O Phuong' : 'Ăn sáng tại bún bò O Phượng',
          locationNote: '24 Nguyễn Khuyến, TP. Huế',
          badge: isEn ? 'Hue Beef Noodle' : 'Bún Bò Huế'
        },
        {
          time: '08:30 - 09:30',
          activity: isEn ? 'Visit Thien Mu Pagoda (historic 400-year-old sanctuary)' : 'Tham quan chùa Thiên Mụ',
          locationNote: '140–142 đường Nguyễn Phúc Nguyên, P. Hương Long, TP. Huế',
          badge: isEn ? 'Ancient Pagoda' : 'Đệ Nhất Cổ Tự'
        },
        {
          time: '09:45 - 11:00',
          activity: isEn ? 'Visit An Hien Garden House' : 'Tham quan Nhà vườn An Hiên',
          locationNote: '58 Nguyễn Phúc Nguyên, Kim Long, TP. Huế',
          badge: isEn ? 'Noble Garden' : 'Nhà Vườn Quý Tộc'
        },
        {
          time: '11:00 - 11:15',
          activity: isEn ? 'Transfer to restaurant' : 'Di chuyển tới nhà hàng',
          locationNote: 'Tuyến đường Lê Lợi, TP. Huế',
          badge: isEn ? 'Transfer' : 'Di Chuyển'
        }
      ]
    },
    {
      sessionKey: 'noon',
      sessionName: t.session.noon,
      timeRange: '11:15 - 15:15',
      icon: Sunset,
      colorClass: 'from-orange-500/20 to-orange-600/5 text-orange-300 border-orange-500/30',
      items: [
        {
          time: '11:15 - 12:15',
          activity: isEn ? 'Lunch at Khong Gian Xua Restaurant' : 'Ăn trưa tại nhà hàng Không Gian Xưa',
          locationNote: '76 Lê Lợi, TP. Huế',
          badge: isEn ? 'Royal Dining' : 'Ẩm Thực Cung Đình'
        },
        {
          time: '12:30 - 15:00',
          activity: isEn ? 'Rest and relax at Century Riverside Hotel' : 'Nghỉ ngơi ở khách sạn Century Riverside',
          locationNote: 'Century Riverside Hotel (49 Lê Lợi)',
          badge: isEn ? 'Rest' : 'Nghỉ Trưa'
        },
        {
          time: '15:00 - 15:15',
          activity: isEn ? 'Group gathers and transfers to the next location' : 'Đoàn tập trung và di chuyển tới địa điểm tiếp theo',
          locationNote: 'Sảnh khách sạn Century Riverside',
          badge: isEn ? 'Gather' : 'Tập Trung'
        }
      ]
    },
    {
      sessionKey: 'evening',
      sessionName: t.session.evening,
      timeRange: '15:15 - 20:00',
      icon: Moon,
      colorClass: 'from-indigo-500/20 to-indigo-600/5 text-indigo-300 border-indigo-500/30',
      items: [
        {
          time: '15:15 - 16:00',
          activity: isEn ? 'Visit Hue Quoc Hoc National High School' : 'Tham quan Trường THPT Quốc Học Huế',
          locationNote: '12 Lê Lợi, TP. Huế',
          badge: isEn ? 'Historic School' : 'Di Tích Lịch Sử'
        },
        {
          time: '16:15 - 18:00',
          activity: isEn ? 'Dragon boat cruise and listen to Hue folk songs along Perfume River' : 'Đi thuyền và nghe ca Huế trên sông Hương',
          locationNote: 'Bến Thuyền Tòa Khâm, 5 Lê Lợi, phường Thuận Hóa, TP. Huế',
          badge: isEn ? 'Folk Music' : 'Ca Huế Sông Hương'
        },
        {
          time: '18:00 - 19:00',
          activity: isEn ? 'Free time to visit Dong Ba Market, check-in photos & souvenir shopping' : 'Tự do tham quan chợ Đông Ba, chụp ảnh check in',
          locationNote: 'Đường Trần Hưng Đạo, TP. Huế',
          badge: isEn ? 'Historic Market' : 'Chợ Đông Ba'
        },
        {
          time: '19:15 - 20:00',
          activity: isEn ? 'Dinner at Com Nieu Chan Restaurant' : 'Ăn tối tại nhà hàng Cơm Niêu Chạn',
          locationNote: '19 Nguyễn Thái Học, TP. Huế',
          badge: isEn ? 'Claypot Rice' : 'Cơm Niêu Đặc Sản'
        },
        {
          time: '20:00',
          activity: isEn ? 'Transfer back to hotel, free time to rest or explore night town' : 'Di chuyển về khách sạn, khách tự do nghỉ ngơi',
          locationNote: 'Khách sạn Century Riverside',
          badge: isEn ? 'Night Rest' : 'Nghỉ Đêm'
        }
      ]
    }
  ];

  const day3Sessions: DaySessionData[] = [
    {
      sessionKey: 'morning',
      sessionName: t.session.morning,
      timeRange: '06:15 - 10:45',
      icon: Sun,
      colorClass: 'from-amber-500/20 to-amber-600/5 text-amber-300 border-amber-500/30',
      items: [
        {
          time: '06:15 - 06:50',
          activity: isEn ? 'Breakfast: Banh Canh Ba Doi' : 'Ăn sáng tại Bánh Canh Bà Đợi',
          locationNote: 'Khu đường Nguyễn Trãi, Huế',
          badge: isEn ? 'Breakfast' : 'Ăn Sáng'
        },
        {
          time: '07:00 - 07:30',
          activity: isEn ? '1. Visit Ngo Mon Gate (Noon Gate)' : '7 giờ - 7 giờ 30 1. Ngọ Môn',
          locationNote: 'Đại Nội Huế (UNESCO World Heritage)',
          badge: isEn ? 'Citadel Gate' : 'Di Tích 1'
        },
        {
          time: '07:30 - 08:00',
          activity: isEn ? '2. Visit Thai Hoa Palace (Throne Room of 13 Emperors)' : '7 giờ 30 - 8 giờ 2. Điện Thái Hòa',
          locationNote: 'Đại Nội Huế',
          badge: isEn ? 'Imperial Throne' : 'Di Tích 2'
        },
        {
          time: '08:00 - 08:45',
          activity: isEn ? '3. Visit Forbidden Purple City' : '8 giờ - 8 giờ 45 3. Tử Cấm Thành',
          locationNote: 'Đại Nội Huế',
          badge: isEn ? 'Forbidden City' : 'Di Tích 3'
        },
        {
          time: '08:45 - 09:10',
          activity: isEn ? '4. Visit Thai Binh Pavilion' : '8 giờ 45 - 9 giờ 10 4. Thái Bình Lâu',
          locationNote: 'Đại Nội Huế',
          badge: isEn ? 'Royal Library' : 'Di Tích 4'
        },
        {
          time: '09:10 - 09:35',
          activity: isEn ? '5. Visit Duyet Thi Duong Royal Theatre' : '9 giờ 10 - 9 giờ 35 5. Duyệt Thị Đường',
          locationNote: 'Đại Nội Huế',
          badge: isEn ? 'Royal Theatre' : 'Di Tích 5'
        },
        {
          time: '09:35 - 10:00',
          activity: isEn ? '6. Visit The Mieu Temple (Ancestral Temple of Nguyen Dynasty)' : '9 giờ 35 - 10 giờ 6. Thế Miếu',
          locationNote: 'Đại Nội Huế',
          badge: isEn ? 'Dynasty Temple' : 'Di Tích 6'
        },
        {
          time: '10:15 - 10:45',
          activity: isEn ? 'Check out from Century Riverside Hotel' : '10 giờ 15 - 10 giờ 45: Check out khách sạn',
          locationNote: 'Century Riverside Hotel',
          badge: isEn ? 'Checkout' : 'Trả Phòng'
        }
      ]
    },
    {
      sessionKey: 'noon',
      sessionName: isEn ? 'Noon - Afternoon' : 'Trưa - Chiều',
      timeRange: '11:30 - 15:00',
      icon: Sunset,
      colorClass: 'from-sky-500/20 to-sky-600/5 text-sky-300 border-sky-500/30',
      items: [
        {
          time: '11:30',
          activity: isEn ? 'Group gathers at Phu Bai Airport (Hue) for departure check-in' : '11 giờ 30 : Đoàn có mặt tại sân bay Phú Bài (Huế) để làm thủ tục',
          locationNote: 'Sân bay Phú Bài (HUI), Huế',
          badge: isEn ? 'Airport' : 'Sân Bay Phú Bài'
        },
        {
          time: '13:20 - 14:50',
          activity: isEn ? 'Flight from Hue City back to Ho Chi Minh City by VNA' : '13 giờ 20 - 14 giờ 50 : Di chuyển từ thành phố Huế về lại thành phố Hồ Chí Minh',
          locationNote: 'HUI ✈ SGN (Vietnam Airlines)',
          badge: 'Vietnam Airlines'
        },
        {
          time: '15:00',
          activity: isEn ? '15:00 Farewell to the tour group at Tan Son Nhat Airport' : '15:00 Tạm biệt đoàn',
          locationNote: 'Ga Đến Tân Sơn Nhất (TP.HCM)',
          badge: isEn ? 'End Tour' : 'Kết Thúc'
        }
      ]
    }
  ];

  const FORMATTED_DAYS = [
    { dayNumber: 1, sessions: day1Sessions },
    { dayNumber: 2, sessions: day2Sessions },
    { dayNumber: 3, sessions: day3Sessions },
  ];

  return (
    <div className="space-y-8 font-mono">
      <div className="space-y-8 max-w-5xl mx-auto">
        {FORMATTED_DAYS.map((dayItem, idx) => (
          <ScrollReveal key={dayItem.dayNumber} direction="up" delay={idx * 80} distance={38}>
            <div className="bg-stone-900/90 border border-amber-500/30 hover:border-amber-400/60 rounded-2xl overflow-hidden shadow-xl shadow-black/50 transition-all duration-300">
              
              {/* Day Header Badge */}
              <div className="p-4 sm:p-5 bg-gradient-to-r from-stone-950 via-stone-900 to-amber-950/40 border-b border-amber-500/20 flex items-center gap-3.5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-stone-950 font-black flex flex-col items-center justify-center shrink-0 shadow-md shadow-amber-500/20">
                  <span className="text-[10px] uppercase font-bold tracking-tight">{t.dayBadge}</span>
                  <span className="text-xl sm:text-2xl leading-none font-black">{dayItem.dayNumber}</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                    {t.dayBadge} {dayItem.dayNumber}
                  </h3>
                  <p className="text-[11px] text-amber-300/80 font-sans mt-0.5">
                    {dayItem.sessions.reduce((acc, s) => acc + s.items.length, 0)} {isEn ? 'scheduled itinerary checkpoints' : 'điểm lộ trình chi tiết đầy đủ'}
                  </p>
                </div>
              </div>

              {/* Day Sessions Grid - mobile friendly single column on xs, multi on md */}
              <div className="p-3.5 sm:p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {dayItem.sessions.map((session, sIdx) => {
                    const SessionIcon = session.icon;
                    return (
                      <ScrollReveal key={sIdx} direction="up" delay={sIdx * 90} distance={22}>
                        <div
                          className={`rounded-xl border p-3.5 sm:p-4 bg-gradient-to-b ${session.colorClass} flex flex-col justify-between space-y-3.5 shadow-sm transition-all duration-300 h-full`}
                        >
                          <div className="flex items-center justify-between pb-2 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-lg bg-black/40 border border-white/10 text-amber-300">
                              <SessionIcon size={15} />
                            </div>
                            <span className="font-bold text-xs sm:text-sm text-white">
                              {session.sessionName}
                            </span>
                          </div>
                          <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-black/50 text-amber-200 border border-white/5">
                            {session.timeRange}
                          </span>
                        </div>

                        {/* Items full list with enhanced hover glow on locations */}
                        <div className="space-y-3 flex-1">
                          {session.items.map((item, itIdx) => (
                            <div 
                              key={itIdx} 
                              className="group relative space-y-1.5 text-left bg-black/35 hover:bg-stone-900/90 p-2.5 rounded-xl border border-white/5 hover:border-amber-400/60 hover:shadow-[0_0_20px_rgba(251,191,36,0.22)] hover:-translate-y-0.5 sm:hover:scale-[1.015] transition-all duration-300 cursor-default overflow-hidden"
                            >
                              {/* Soft ambient shimmer on hover */}
                              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-400/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                              <div className="flex items-start justify-between gap-1 relative z-10">
                                <span className="text-[11px] font-bold text-amber-300 group-hover:text-amber-200 flex items-center gap-1 shrink-0 font-mono transition-colors">
                                  <Clock size={11} className="text-amber-400 group-hover:scale-110 group-hover:text-amber-300 transition-transform shrink-0" />
                                  {item.time}
                                </span>
                                {item.badge && (
                                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-stone-800/90 group-hover:bg-amber-950/60 text-stone-300 group-hover:text-amber-200 border border-white/10 group-hover:border-amber-500/40 font-sans shrink-0 font-medium transition-all">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <h4 className="text-xs sm:text-[13px] font-bold text-stone-100 group-hover:text-white leading-snug relative z-10 transition-colors">
                                {item.activity}
                              </h4>
                              {/* Location with distinct glow effect on hover */}
                              <div className="pt-0.5 relative z-10">
                                <p className="text-[11px] text-amber-400/90 group-hover:text-amber-200 flex items-start gap-1.5 leading-tight px-1.5 py-1 rounded-md bg-transparent group-hover:bg-amber-400/10 border border-transparent group-hover:border-amber-400/40 group-hover:shadow-[0_0_12px_rgba(251,191,36,0.35)] transition-all duration-300">
                                  <MapPin size={12} className="shrink-0 mt-0.5 text-amber-400 group-hover:text-amber-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.9)] transition-all duration-300" />
                                  <span className="font-medium group-hover:font-semibold group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)] transition-all duration-300">
                                    {item.locationNote}
                                  </span>
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
