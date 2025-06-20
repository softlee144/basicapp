export default function GalleryCard({ item }) {
  // galSearchKeyword가 콤마(,)로 구분된 경우 분리, 아니면 배열로 변환
  let sptags = item.galSearchKeyword.includes(",")
    ? item.galSearchKeyword.split(",")
    : [item.galSearchKeyword];

  // 각 키워드를 태그 스타일의 span 엘리먼트로 변환
  sptags = sptags.map((kw) => (
    <span
      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      key={kw}
    >
      {kw}
    </span>
  ));

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* 이미지 영역 */}
      <img
        className="h-48 w-full"
        src={
          // 이미지 URL이 http:로 시작하면 https:로 변경하여 사용
          item.galWebImageUrl.includes("http:")
            ? item.galWebImageUrl.replace("http:", "https:")
            : item.galWebImageUrl
        }
        alt={item.galTitle}
      />

      {/* 제목, 촬영장소 정보 영역 */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.galTitle}</div>
        <div className="text-gray-700">{item.galPhotographyLocation}</div>
      </div>

      {/* 키워드 태그 리스트 */}
      <div className="px-6 pt-4 pb-2">{sptags}</div>
    </div>
  );
}
