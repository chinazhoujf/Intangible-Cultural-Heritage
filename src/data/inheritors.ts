export type Inheritor = {
  id: string
  name: string
  age: number
  craft: string
  region: string
  years: number
  imageSeed: string
  photo: string
  quote: string
  dialogue: { q: string; a: string }[]
}

const photo = (seed: string) =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(seed)}&image_size=portrait_4_3`

export const inheritors: Inheritor[] = [
  {
    id: 'zhu-shen',
    name: '祝 沈',
    age: 64,
    craft: '缂丝',
    region: '江苏苏州',
    years: 47,
    imageSeed: 'master',
    photo: photo('elderly Chinese female master craftswoman, Suzhou silk weaver portrait, side light, deep wrinkles, wise eyes, dark background, traditional clothing, editorial portrait photography'),
    quote: '不抢一梭之快，要守一梭之准。',
    dialogue: [
      {
        q: '您学缂丝，最先学的是什么？',
        a: '坐得住。缂丝是慢的活儿，性子急的人做不了。第一年我只看师傅怎么换梭，连碰都不让我碰。',
      },
      {
        q: '现在最常想起的画面是？',
        a: '小时候外婆的织机，吱嘎吱嘎地响。光从窗缝里漏下来，落在经线上。我以为是菩萨在织布。',
      },
      {
        q: '缂丝最难传给年轻人的是什么？',
        a: '耐心。如今大家都想要"立等可取"，但好的缂丝需要几十天。',
      },
    ],
  },
  {
    id: 'li-chen',
    name: '黎 辰',
    age: 52,
    craft: '苗银',
    region: '贵州雷山',
    years: 35,
    imageSeed: 'master',
    photo: photo('Miao minority male silversmith age 50, Guizhou mountainous region, working at traditional workbench, focused expression, hands holding small silver tools, warm natural light, editorial portrait'),
    quote: '每一锤下去，要听得见古歌。',
    dialogue: [
      {
        q: '您怎么记住那么多花纹？',
        a: '没人教我"记"。我从小跟着阿妈做嫁妆，看她打蝴蝶、看她编丝，耳濡目染，自然就刻在心里。',
      },
      {
        q: '银饰对苗家人意味着什么？',
        a: '是"根"。我们没有自己的字，银是纸，锤是笔。哪天我们不戴银了，就是忘了自己从哪里来。',
      },
      {
        q: '学这门手艺，最苦的是什么？',
        a: '冬天的水。洗银的水冰得刺骨，但手不能抖。',
      },
    ],
  },
  {
    id: 'shen-ruo',
    name: '沈 蕊',
    age: 38,
    craft: '昆曲',
    region: '江苏昆山',
    years: 26,
    imageSeed: 'master',
    photo: photo('young Chinese Kunqu opera actress age 38, stage makeup, elaborate headdress, soft red and white costume, contemplative expression, dim theatrical light, editorial portrait photograph'),
    quote: '水磨的不是腔，是人心。',
    dialogue: [
      {
        q: '十二岁就开始学戏了吗？',
        a: '对。那年考进戏校，离开家。第一节课不是唱，是站——靠墙站一个时辰。',
      },
      {
        q: '昆曲最难的是哪个字？',
        a: '"慢"。大家都觉得慢就是慢，其实是"密"。一个字要转几道弯，急不得。',
      },
      {
        q: '唱《牡丹亭》这么多年，最打动你的是哪一句？',
        a: '"情不知所起，一往而深"。我每次唱到这里，都觉得自己又年轻了一次。',
      },
    ],
  },
]
