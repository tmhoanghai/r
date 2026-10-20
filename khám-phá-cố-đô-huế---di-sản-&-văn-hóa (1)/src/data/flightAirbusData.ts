export const AIRPORTS = { 
  sgn: { lat: 10.8188, lng: 106.6520, name: 'Sân Bay Quốc Tế Tân Sơn Nhất', code: 'SGN', terminal: 'Ga Quốc Nội T1', city: 'TP. Hồ Chí Minh' }, 
  hui: { lat: 16.4018, lng: 107.6965, name: 'Sân Bay Quốc Tế Phú Bài', code: 'HUI', terminal: 'Nhà Ga Mới T2', city: 'Thừa Thiên Huế' } 
};

// Đường bay đi Tân Sơn Nhất (SGN) ✈ Phú Bài (HUI) dạng đường cong hàng không thực tế
export const AIRBUS_OUTBOUND_PATH: [number, number][] = [
  [10.8188, 106.6520], // SGN Ga T1
  [11.1500, 106.8200], // Lấy độ cao qua Đồng Nai
  [11.6000, 107.1200], // Vùng trời Bình Phước - Lâm Đồng
  [12.1500, 107.4800], // Hành lang bay Đắk Nông
  [12.8000, 107.8200], // Qua Buôn Ma Thuột
  [13.5000, 108.1500], // Qua Pleiku - Gia Lai
  [14.2500, 108.3200], // Qua Kon Tum
  [15.0000, 108.2500], // Vùng trời Quảng Nam
  [15.7500, 107.9800], // Hạ dần độ cao qua đèo Hải Vân / Bạch Mã
  [16.1500, 107.8200], // Tiếp cận luồng không lưu Phú Lộc
  [16.4018, 107.6965]  // Hạ cánh Sân bay Phú Bài Ga T2
];

// Đường bay về Phú Bài (HUI) ✈ Tân Sơn Nhất (SGN) duyên hải biển miền Trung
export const AIRBUS_RETURN_PATH: [number, number][] = [
  [16.4018, 107.6965], // HUI Ga T2 cất cánh
  [16.2000, 107.9200], // Lấy độ cao hướng vịnh Đà Nẵng
  [15.8200, 108.2500], // Duyên hải Quảng Nam
  [15.1500, 108.5500], // Duyên hải Quảng Ngãi
  [14.4000, 108.6200], // Hành lang bay Bình Định
  [13.6500, 108.4500], // Qua Phú Yên - Tây Nguyên
  [12.9500, 108.1500], // Hành lang Đắk Lắk
  [12.2500, 107.7500], // Hạ dần độ cao
  [11.6500, 107.3500], // Tiếp cận vùng trời Đông Nam Bộ
  [11.1800, 106.9500], // Vào phễu hạ cánh Tân Sơn Nhất
  [10.8188, 106.6520]  // Hạ cánh Tân Sơn Nhất Ga T1
];

export const AIRBUS_OUTBOUND_COORDS = AIRBUS_OUTBOUND_PATH;
export const AIRBUS_RETURN_COORDS = AIRBUS_RETURN_PATH;

// Tuyến đường xe đón tiễn từ Sân bay Phú Bài về Khách sạn Century Riverside (49 Lê Lợi)
// Bám chính xác 100% trục đường bộ thực tế: Đường nội cảng Ga T2 ➔ Quốc Lộ 1A (Nguyễn Tất Thành) ➔ Cầu Vượt Thủy Dương ➔ An Dương Vương ➔ Cầu An Cựu ➔ Hùng Vương ➔ Lê Lợi
export const PHU_BAI_TO_HOTEL_ROAD: [number, number][] = [
  [16.4018, 107.6965], // Sân bay Phú Bài Ga T2 mới
  [16.4035, 107.6942], // Đường dẫn nội bộ ra cổng sân bay
  [16.4055, 107.6915], // Cổng sân bay giao Quốc Lộ 1A
  [16.4082, 107.6885], // QL1A - Nguyễn Tất Thành
  [16.4115, 107.6830], // QL1A đoạn qua Phú Bài
  [16.4145, 107.6780], // QL1A đoạn Cây xăng Phú Bài
  [16.4172, 107.6740], // QL1A qua Phú Thứ
  [16.4210, 107.6660], // QL1A đoạn Hương Thủy
  [16.4255, 107.6568], // QL1A qua Dạ Lê
  [16.4300, 107.6475], // QL1A đoạn Thủy Phương
  [16.4348, 107.6380], // QL1A nút Cầu Vượt Thủy Dương
  [16.4390, 107.6280], // QL1A đường Nguyễn Tất Thành
  [16.4440, 107.6165], // Cửa ngõ TP. Huế (Bến xe phía Nam)
  [16.4468, 107.6110], // Đường An Dương Vương
  [16.4495, 107.6065], // An Dương Vương đoạn chợ An Cựu
  [16.4525, 107.6025], // An Dương Vương tiếp giáp sông An Cựu
  [16.4565, 107.5985], // Cầu An Cựu / Ngã 6 An Cựu
  [16.4585, 107.5970], // Đường Hùng Vương
  [16.4605, 107.5950], // Hùng Vương đoạn ngã tư Bến Nghé
  [16.4622, 107.5932], // Ngã 6 Hùng Vương / Vincom Plaza
  [16.4632, 107.5920], // Rẽ vào đường Lê Lợi
  [16.4637, 107.5909]  // Khách sạn 4★ Century Riverside Huế (49 Lê Lợi)
];

export const VNA_OUTBOUND_PATH: [number, number][] = AIRBUS_OUTBOUND_PATH;
export const VNA_RETURN_PATH: [number, number][] = AIRBUS_RETURN_PATH;
export const VNA_OUTBOUND_COORDS = AIRBUS_OUTBOUND_PATH;
export const VNA_RETURN_COORDS = AIRBUS_RETURN_PATH;

export const REAL_BASE_TICKET_PRICE_ONE_WAY = 770000;
export const TOTAL_FLIGHT_TICKET_PRICE = 2250000;
export const FLIGHT_TICKET_BREAKDOWN = [
  { item: 'Giá vé cơ bản khứ hồi', desc: 'Chặng SGN ⇄ HUI bằng Vietnam Airlines (VNA) tiêu chuẩn bay êm ái, đúng giờ', amount: 1500000, cost: 1500000 },
  { item: 'Thuế VAT & Phí sân bay', desc: 'Phí an ninh soi chiếu, phục vụ mặt đất tại Tân Sơn Nhất và Phú Bài', amount: 550000, cost: 550000 },
  { item: 'Hành lý ký gửi 23kg', desc: 'Bao gồm 12kg xách tay + 23kg hành lý ký gửi an toàn hai chiều Vietnam Airlines', amount: 200000, cost: 200000 },
];
