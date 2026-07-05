export type CraftCategory = '织造' | '陶瓷' | '金属' | '戏曲' | '偶戏' | '器物'

export type Craft = {
  id: string
  index: string // 编号 壹 贰 ...
  name: string
  enName: string
  category: CraftCategory
  era: string
  origin: string
  abstract: string
  article: string[]
  steps: { title: string; desc: string }[]
  palette?: string[]
  seal: string // 朱砂印文字
  tags: string[]
  hero: string
  imageSeed: string
}

const img = (seed: string) =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(seed)}&image_size=landscape_16_9`

export const crafts: Craft[] = [
  {
    id: 'ke-si',
    index: '壹',
    name: '缂丝',
    enName: 'KE SI',
    category: '织造',
    era: '唐代成熟 · 宋代登峰',
    origin: '江苏苏州',
    abstract:
      '通经断纬，一梭一念。缂丝以"通经断纬"的织法，让图案与底地同起同落，被誉为"织中之圣"。',
    article: [
      '缂丝之难，难在"通经断纬"。寻常织物皆以一梭贯穿全幅，唯缂丝匠人将彩色纬线局部回梭，使图案边界与织物本身一体。',
      '一寸缂丝一寸金。在宋人眼里，它是书画的另一种表达。',
      '今日苏州的织机仍在运转，但执梭者已不到千人。每一道工序、每一处换色，皆由匠人亲手完成。',
    ],
    steps: [
      { title: '牵经', desc: '经线先上，竖向铺陈整幅骨架' },
      { title: '画样', desc: '将画稿描摹于经面之上' },
      { title: '换梭', desc: '色纬分段回梭，逐块成图' },
      { title: '修整', desc: '剪去浮线，熨烫整理' },
    ],
    palette: ['#1F1B17', '#B8392C', '#8C6A3F', '#EFE7D6', '#7A8E6A'],
    seal: '织圣',
    tags: ['通经断纬', '一寸千金', '宋画复刻', '手工织机'],
    hero: img('Song dynasty Chinese kesi silk tapestry weaving loom Suzhou artisan hands close up, intricate warp and weft threads, golden vermillion and ink black pattern, museum lighting, editorial photograph'),
    imageSeed: 'kesi',
  },
  {
    id: 'qing-ci',
    index: '贰',
    name: '青瓷',
    enName: 'QING CI',
    category: '陶瓷',
    era: '东汉始烧 · 宋为极盛',
    origin: '浙江龙泉',
    abstract:
      '雨过天青云破处，青瓷釉色如破晓的青空。一千八百度的窑火，将铁元素还原为梦境的青。',
    article: [
      '龙泉青瓷之美，美在"釉"。釉层厚而温润，光线入内会反复折射，发出含蓄的青光。',
      '"哥窑"与"弟窑"相传为兄弟二人所创，前者开片似冰裂，后者温润如玉。',
      '梅子青、粉青、米黄…… 每一种釉色背后，都是不同的窑温、气氛与时间。',
    ],
    steps: [
      { title: '采石', desc: '大窑附近瓷土，含铁量恰到好处' },
      { title: '拉坯', desc: '匠人借惯性将泥拉成器形' },
      { title: '施釉', desc: '草木灰与石灰石调出的青釉' },
      { title: '烧窑', desc: '1300℃ 还原焰，铁元素显青' },
    ],
    palette: ['#3F5A7A', '#7A8E6A', '#A4B393', '#D8CCB0', '#EFE7D6'],
    seal: '青',
    tags: ['雨过天青', '哥窑弟窑', '梅子青', '1300度'],
    hero: img('Longquan celadon green porcelain vase on dark wooden table, dimly lit museum interior, soft window light, traditional Chinese ceramic, editorial product photography, dreamy misty atmosphere'),
    imageSeed: 'qingci',
  },
  {
    id: 'miao-yin',
    index: '叁',
    name: '苗银',
    enName: 'MIAO YIN',
    category: '金属',
    era: '蚩尤九黎 · 千载不辍',
    origin: '贵州黔东南',
    abstract:
      '银在苗家是迁徙的族谱，是嫁妆的厚礼，是母亲给女儿的铠甲。每一道花纹，都藏着一首古歌。',
    article: [
      '苗族无文字，银饰是他们的史书。蝴蝶妈妈、枫叶、迁徙路线、宗族图腾——皆锤錾在银片之上。',
      '一套完整的苗银盛装，需要匠人连续打制数月。从熔银、压条到錾花、编丝，全是手工。',
      '苗家女儿出嫁时，银饰越盛，祝福越深。',
    ],
    steps: [
      { title: '熔银', desc: '900℃ 高温将银锭化为银水' },
      { title: '压条', desc: '锻打银块为薄片或细丝' },
      { title: '錾花', desc: '以小锤敲出点、线、面纹' },
      { title: '编丝', desc: '细银丝编为链、网、冠饰' },
    ],
    palette: ['#8C6A3F', '#A88A5E', '#1F1B17', '#B8392C', '#EFE7D6'],
    seal: '银',
    tags: ['无字史书', '蝴蝶妈妈', '錾花编丝', '盛装嫁礼'],
    hero: img('Miao ethnic minority silver headdress and jewelry, Guizhou China, intricate handcrafted filigree silver ornaments, butterfly and flower motifs, dark editorial portrait lighting'),
    imageSeed: 'miaoyin',
  },
  {
    id: 'kun-qu',
    index: '肆',
    name: '昆曲',
    enName: 'KUN QU',
    category: '戏曲',
    era: '元末明初 · 六百年一脉',
    origin: '江苏昆山',
    abstract:
      '"情不知所起，一往而深。" 昆曲把中国文字之美，唱成了缓慢而精确的身段与水磨腔。',
    article: [
      '昆曲之"曲"，在于它的文学性。一支《牡丹亭》，唱了六百年，仍在剧场里活着。',
      '"水磨腔"形容昆曲的细腻——声音如苏州的河水，慢慢地磨过听者的耳。',
      '生、旦、净、末、丑 —— 每一行当都有专属的身段和指法。',
    ],
    steps: [
      { title: '拍曲', desc: '先学唱念，不动身形' },
      { title: '圆场', desc: '练脚底功夫，走出柔韧的圆' },
      { title: '身段', desc: '手眼身法步一一对应戏词' },
      { title: '登台', desc: '彩扮完整，唱做念打俱全' },
    ],
    palette: ['#B8392C', '#1F1B17', '#3F5A7A', '#EFE7D6', '#8C6A3F'],
    seal: '曲',
    tags: ['水磨腔', '牡丹亭', '生旦净丑', '六百年'],
    hero: img('Kunqu opera performer on traditional Chinese theater stage, dramatic side lighting, red and gold costume, theatrical smoke, editorial photograph, cinematic atmosphere'),
    imageSeed: 'kunqu',
  },
  {
    id: 'pi-ying',
    index: '伍',
    name: '皮影',
    enName: 'PI YING',
    category: '偶戏',
    era: '西汉发端 · 唐宋兴盛',
    origin: '陕西华县',
    abstract:
      '一块牛皮，二十八道工序，三根竹签。皮影在白幕背后一晃，千年故事便从光里活过来。',
    article: [
      '皮影的"皮"，是经过特别处理的牛皮。匠人需将皮张刮薄至透光，再刻出镂空的图案。',
      '五色描线：红为忠、黑为正、绿为勇、白为奸、黄为神 —— 颜色即人设。',
      '艺人操作三根签子（脖签、两手签），便能让一寸小人儿翻身、舞剑、落泪。',
    ],
    steps: [
      { title: '制皮', desc: '牛皮浸泡 8 道工序，刮至透光' },
      { title: '画稿', desc: '将人物造型描于皮上' },
      { title: '镂刻', desc: '十一把刀具刻出衣饰与五官' },
      { title: '上色', desc: '矿物颜料平涂，五色各寓性格' },
    ],
    palette: ['#B8392C', '#1F1B17', '#EFE7D6', '#3F5A7A', '#8C6A3F'],
    seal: '影',
    tags: ['牛皮透光', '三根签子', '五色描线', '白幕光影'],
    hero: img('Chinese shadow puppet piying traditional art, hand carved leather puppet in red and black, illuminated from behind with warm light, intricate patterns, editorial close up'),
    imageSeed: 'piying',
  },
  {
    id: 'zi-sha',
    index: '陆',
    name: '紫砂',
    enName: 'ZI SHA',
    category: '器物',
    era: '北宋始烧 · 明清鼎盛',
    origin: '江苏宜兴',
    abstract:
      '一把紫砂壶，能养出"包浆"，能泡出"茶山"。它不仅是器物，更是时间的朋友。',
    article: [
      '宜兴紫砂的特别之处在于"双气孔"结构——泥料中有闭气孔与开气孔并存，使茶汤能"呼吸"。',
      '光器、花器、筋囊器 —— 紫砂造型有三大门派。',
      '从一块矿石到一把壶，需经选料、炼泥、打泥片、围身筒、明针、烧窑等六十余道工序。',
    ],
    steps: [
      { title: '选泥', desc: '黄龙山原矿，紫泥、红泥、本山绿泥' },
      { title: '打片', desc: '木槌将泥块打成厚薄一致的泥片' },
      { title: '围身', desc: '泥片围成壶身雏形' },
      { title: '明针', desc: '牛角片反复刮压壶身，焕发光泽' },
      { title: '烧窑', desc: '1100℃ 还原焰，紫砂呼吸感生成' },
    ],
    palette: ['#8C6A3F', '#A88A5E', '#1F1B17', '#B8392C', '#D8CCB0'],
    seal: '砂',
    tags: ['双气孔', '包浆茶山', '光器花器', '明针刮压'],
    hero: img('Yixing zisha purple clay teapot on linen cloth, side view, soft natural light, traditional Chinese craft, hand thrown pottery, warm wood background, editorial product photography'),
    imageSeed: 'zisha',
  },
]
