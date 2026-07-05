export type TimelineEvent = {
  year: string
  era: string
  title: string
  craft: string
  desc: string
}

export const timeline: TimelineEvent[] = [
  { year: 'BC 5000', era: '新石器', title: '陶器之始', craft: '陶瓷', desc: '仰韶彩陶，人类最早的彩绘器物之一。' },
  { year: 'BC 770', era: '春秋', title: '青铜礼器', craft: '金属', desc: '青铜器纹样臻于鼎盛，礼器制度成熟。' },
  { year: 'AD 25', era: '东汉', title: '龙泉青瓷', craft: '陶瓷', desc: '龙泉地区始烧青瓷，窑火绵延至今。' },
  { year: 'AD 220', era: '东汉末', title: '皮影雏形', craft: '偶戏', desc: '方士以影戏招魂，民间传演为乐。' },
  { year: 'AD 700', era: '唐', title: '缂丝成熟', craft: '织造', desc: '缂丝工艺成熟，可仿制名家书画。' },
  { year: 'AD 960', era: '宋', title: '青瓷极盛', craft: '陶瓷', desc: '汝、官、哥、弟、定，五大名窑各领风骚。' },
  { year: 'AD 1100', era: '宋', title: '南戏雏形', craft: '戏曲', desc: '温州一带南戏兴起，为昆曲前身。' },
  { year: 'AD 1350', era: '元末', title: '昆山腔立', craft: '戏曲', desc: '顾坚改良昆山腔，水磨调初成。' },
  { year: 'AD 1500', era: '明', title: '紫砂崛起', craft: '器物', desc: '供春、时大彬等名家辈出，紫砂成器。' },
  { year: 'AD 1600', era: '明末', title: '苗银盛装', craft: '金属', desc: '苗族银饰工艺体系成熟，盛装文化达盛。' },
  { year: 'AD 1800', era: '清', title: '昆曲入宫', craft: '戏曲', desc: '昆曲成宫廷雅乐，文人雅士争相传唱。' },
  { year: 'AD 2020', era: '当代', title: '非遗新章', craft: '织造', desc: '六项非遗同登国家级名录，AI 助力新生。' },
]
