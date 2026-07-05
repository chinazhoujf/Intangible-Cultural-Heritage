export default function InkBackdrop() {
  return (
    <>
      {/* 固定的纸感噪点覆盖层 —— 不随滚动 */}
      <div className="paper-grain-fixed" />
      {/* 柔和的环境光渐变 —— 不随滚动 */}
      <div className="ambient-light" />
    </>
  )
}
