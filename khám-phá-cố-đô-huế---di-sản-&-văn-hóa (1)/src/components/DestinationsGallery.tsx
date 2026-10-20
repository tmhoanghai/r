import { Camera, MapPin, Sparkles } from 'lucide-react';
import hue1Img from '@/assets/images/hue1.jpg';
import hue2Img from '@/assets/images/hue2.jpg';
import hue3Img from '@/assets/images/hue3.jpg';
import hue4Img from '@/assets/images/hue4.jpg';

const DESTINATIONS = [
  {
    id: 'dai_noi',
    title: 'Đại Nội Huế & Tử Cấm Thành',
    category: 'Di sản Văn hóa Thế giới UNESCO',
    image: hue1Img,
    alt: 'Cửa Ngọ Môn và hồ sen Đại Nội Huế',
    description: 'Trọng tâm quyền lực của 13 vị vua triều Nguyễn (1802 - 1945). Nổi bật với Cột Cờ Kỳ Đài, Cửa Ngọ Môn 5 lối đi và Điện Thái Hòa chạm khắc rồng vàng uy nghiêm.',
    highlight: 'Điểm nhấn Ngày 1 · Thời lượng 2h30',
  },
  {
    id: 'thien_mu',
    title: 'Chùa Thiên Mụ & Dòng Sông Hương',
    category: 'Danh thắng Tâm linh Cổ tự',
    image: hue2Img,
    alt: 'Tháp Phước Duyên Chùa Thiên Mụ bên bờ Sông Hương thơ mộng',
    description: 'Ngôi cổ tự hơn 400 năm tuổi trên đồi Hà Khê. Nơi lưu giữ Tháp Phước Duyên 7 tầng hình bát giác, chiếc chuông Đại Hồng Chung và khúc ngâm chuông chiều huyền thoại.',
    highlight: 'Hoàng hôn Ngày 1 & Thuyền rồng Ca Huế',
  },
  {
    id: 'khai_dinh',
    title: 'Lăng Khải Định (Ứng Lăng)',
    category: 'Đỉnh cao Kiến trúc Đông - Tây',
    image: hue3Img,
    alt: 'Sân tượng quan văn võ và điện Khải Thành lộng lẫy bằng sành sứ',
    description: 'Kiệt tác nghệ thuật đắp nổi ghép sành sứ và thủy tinh tinh xảo bậc nhất Việt Nam, tọa lạc trên triền núi Châu Chữ hoang sơ.',
    highlight: 'Điểm nhấn Ngày 2 · Thời lượng 2h00',
  },
  {
    id: 'thuy_xuan',
    title: 'Làng Hương Thủy Xuân',
    category: 'Di sản Nghề Thủ công Cố đô',
    image: hue4Img,
    alt: 'Bó hương xòe hoa ngũ sắc rực rỡ dưới nắng tại Thủy Xuân Huế',
    description: 'Làng nghề làm hương trầm truyền thống 700 năm dưới chân đồi Vọng Cảnh. Quý khách được tự tay trải nghiệm se hương thủ công cùng nghệ nhân bản địa.',
    highlight: 'Trải nghiệm văn hóa Ngày 2 · Thời lượng 1h15',
  },
];

export default function DestinationsGallery() {
  return (
    <section className="py-16 lg:py-24 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            <span>Danh lam thắng cảnh tiêu biểu</span>
            <span aria-hidden="true">·</span>
            <span>Không gian kiến trúc &amp; Đời sống</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900">
            Những Điểm Dừng Chân Không Thể Bỏ Lỡ
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Mỗi điểm đến được tuyển lựa kỹ càng theo tiêu chuẩn thời gian di chuyển hợp lý và chiều sâu câu chuyện lịch sử (Storytelling) theo đúng định hướng tập huấn du lịch sáng tạo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DESTINATIONS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col group"
            >
              <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/15 to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm px-3 py-1 rounded text-white text-[11px] font-medium tracking-wide">
                  {item.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="font-medium text-amber-900">{item.highlight}</span>
                  <span className="text-stone-400">Vé đã bao gồm</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
