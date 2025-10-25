import { Scene, SceneId } from '../types';

type StoryData = {
  [key in SceneId]: Scene;
};

const RESTAURANT_BG = 'https://picsum.photos/seed/restaurant/1280/720';
const CAMPUS_BG = 'https://picsum.photos/seed/campus/1280/720';
const STATUE_BG = '/sankitizou.jpg';
const ENDING_BG = 'https://picsum.photos/seed/ending/1280/720';

export const storyData: StoryData = {
  START: {
    title: '櫻子と銅像のレゾナンス',
    text: [{ dialogue: 'クリックしてゲームを開始' }],
    nextScene: 'RESTAURANT_INTRO',
    backgroundImage: 'https://picsum.photos/seed/title/1280/720',
  },
  RESTAURANT_INTRO: {
    text: [
      { speaker: 'ナレーション', dialogue: '大学図書館に勤務する櫻子。テーブルに腰掛け、料理を待っていた。' },
      { speaker: '櫻子', dialogue: '（四月に来たものの、周りは偉い方々ばかりで圧倒されるな……）' },
      { speaker: '櫻子', dialogue: '（仲良くしてくれるのは誰だろう……）' },
      { speaker: 'ナレーション', dialogue: 'そばには、お気に入りのぬいぐるみがちょこんと座っている。' },
    ],
    nextScene: 'RESTAURANT_CHOICE_PROMPT',
    backgroundImage: RESTAURANT_BG,
  },
  RESTAURANT_CHOICE_PROMPT: {
    text: [
      { speaker: 'ナレーション', dialogue: 'そのとき、一人の綺麗な女性が現れた。' }
    ],
    choices: [
      { text: '昔の知り合いで、歌と踊りが上手だった。', points: 2, nextScene: 'RESTAURANT_CHOICE_1_SUCCESS' },
      { text: '全く知らない人だった。', points: 0, nextScene: 'RESTAURANT_CHOICE_2_FAIL' },
      { text: '日本のVtuberだった。', points: 0, nextScene: 'RESTAURANT_CHOICE_3_END' },
    ],
    backgroundImage: RESTAURANT_BG,
  },
  RESTAURANT_CHOICE_1_SUCCESS: {
    text: [
      { speaker: '櫻子', dialogue: 'ありあ……？ 歌と踊りが得意なありあだよね？ 高校の同級生だった……久しぶり。' },
      { speaker: 'ありあ', dialogue: 'わあ、懐かしい。櫻子ちゃん！久しぶりね。' },
      { speaker: 'ナレーション', dialogue: '二人はしばらく近況報告を交わした。' },
      { speaker: '櫻子', dialogue: '私、今から銅像めぐりに行くの。ご一緒にいかが？' },
      { speaker: 'ありあ', dialogue: 'もちろん喜んで。あなたについて行くわ。' },
    ],
    nextScene: 'KOGITO_INTRO',
    backgroundImage: RESTAURANT_BG,
  },
  RESTAURANT_CHOICE_2_FAIL: {
    text: [
      { speaker: '櫻子', dialogue: '（知り合いかな？と思ったが……見知らぬ人だった。）' },
      { speaker: 'ナレーション', dialogue: '女性は櫻子に気づくことなく、通り過ぎていった。' },
    ],
    nextScene: 'ENDING_BAD',
    backgroundImage: RESTAURANT_BG,
  },
  RESTAURANT_CHOICE_3_END: {
    text: [
      { speaker: 'ナレーション', dialogue: 'そこには有名なVtuber「歌譜」ちゃんがいた。顔出しはしていないが、メニューを注文する声でわかった。' },
      { speaker: '櫻子', dialogue: '失礼します、あなたは「歌譜」ちゃんですか？ ファンなんです。' },
      { speaker: '歌譜', dialogue: '……！ そうです。' },
      { speaker: 'ナレーション', dialogue: '思い切ってサインをお願いすると、彼女は快く応じてくれた。' },
      { speaker: 'ナレーション', dialogue: '嬉しい出来事だったが、彼女はすぐに去ってしまった。' },
    ],
    nextScene: 'ENDING_NEUTRAL',
    backgroundImage: RESTAURANT_BG,
  },
  KOGITO_INTRO: {
    text: [
      { speaker: 'ナレーション', dialogue: '2025.09.21' },
      { speaker: 'ありあ', dialogue: '今日はどこに行くの？' },
      { speaker: 'ナレーション', dialogue: 'ぬいを背に、櫻子は軽やかに東大病院前の小道を歩いていた。' },
      { speaker: '櫻子', dialogue: '佐藤三吉先生の像だよ。アメリカにも留学してた、医学の先生。' },
    ],
    nextScene: 'KOGITO_SATO_STATUE',
    backgroundImage: STATUE_BG,
  },
  KOGITO_SATO_STATUE: {
    text: [
      { speaker: 'ナレーション', dialogue: 'その銅像は、しっとりと濡れた葉の木陰に立っていた。重みと優しさを併せ持つような静けさ。' },
      { speaker: 'ナレーション', dialogue: '彼女はそっと、ぬいを台座のそばに置き、高カカオチョコレートを取り出す。' },
      { speaker: '櫻子', dialogue: '痩せるって言われてるから、先生も驚くかもね。' },
      { speaker: 'ナレーション', dialogue: 'ありあが微笑んで、像の前に立つ。そして彼女は、そっと鼻歌を歌い始めた。' },
      { speaker: 'ありあ', dialogue: 'hmmm… Popular, I’m gonna be popular…♪' },
      { speaker: 'ナレーション', dialogue: 'ぬいの耳が、ぴくりと動いた。' },
      { speaker: '櫻子', dialogue: '……！ 今、ぬいがふるえた。何か、届いた気がする。' },
      { speaker: 'ナレーション', dialogue: 'ありあが目を丸くし、像をそっと見つめる。そのとき、銅像の頬にやわらかい光が差したように見えた。' },
    ],
    nextScene: 'KOGITO_AOYAMA_STATUE',
    backgroundImage: STATUE_BG,
  },
  KOGITO_AOYAMA_STATUE: {
    text: [
      { speaker: '櫻子', dialogue: 'ねえ、ありあ……隣にもいらっしゃる。' },
      { speaker: 'ナレーション', dialogue: 'そこには、もうひとつの石の人影があった。青山胤通（たねみち）先生。佐藤先生と並び、静かに東大を見守っていた。' },
      { speaker: 'ありあ', dialogue: 'この方は……？' },
      { speaker: '櫻子', dialogue: 'ドイツに留学して、明治の日本で近代医学を育てた人。帝国大学医学部第三内科初代教授で、すごくおだやかな空気を持ってる。' },
      { speaker: 'ナレーション', dialogue: '櫻子はバッグからプレッツェルを取り出した。' },
      { speaker: 'ぬい', dialogue: '（ドイツの空気を……）' },
      { speaker: 'ナレーション', dialogue: 'さらに彼女は、高カカオチョコレートをもうひとつ割り、それを2体の台座のあいだに、半分ずつ並べた。' },
    ],
    nextScene: 'KOGITO_RESONANCE',
    backgroundImage: STATUE_BG,
  },
  KOGITO_RESONANCE: {
    text: [
      { speaker: 'ありあ', dialogue: 'これは、まるで…… メロディのハーモニーだね。 片方だけじゃ完成しない響き。' },
      { speaker: 'ナレーション', dialogue: 'そのとき、風がふっと吹いた。木々のあいだから、青山先生の像にもやわらかい光が落ちた。' },
      { speaker: 'ナレーション', dialogue: 'そして聞こえたような気がした。' },
      { speaker: '？？？', dialogue: '「よくいらっしゃいました。」' },
      { speaker: '？？？', dialogue: '「……この場が、少しにぎやかで、楽しいですな。」' },
      { speaker: 'ナレーション', dialogue: 'ぬいが、くすりと笑った。ありあが、足元の影にバレエの４番のような一歩を踏み出す。' },
      { speaker: 'ナレーション', dialogue: 'そして彼女は、二人の像に向かって深く一礼をした。' },
      { speaker: '櫻子', dialogue: 'おふたりの“静かな会話”に、 少しだけ、ぬいとぬくもりを添えさせていただきました。' },
      { speaker: 'ナレーション', dialogue: 'そこに、風も言葉もいらない、深いレゾナンスの間（ま）が生まれていた。' },
    ],
    nextScene: 'ENDING_GOOD',
    backgroundImage: STATUE_BG,
  },
  ENDING_GOOD: {
    title: '〜END〜',
    // FIX: Type 'string' is not assignable to type 'TextLine'. Converted string array to an array of TextLine objects.
    text: [
      { dialogue: '本郷キャンパスが、光に包まれた庭になった。' },
      { dialogue: 'これからも、櫻子の銅像めぐりは続いていく。' },
    ],
    backgroundImage: ENDING_BG,
  },
  ENDING_NEUTRAL: {
    title: '〜END〜',
    // FIX: Type 'string' is not assignable to type 'TextLine'. Converted string array to an array of TextLine objects.
    text: [{ dialogue: '有名人に会えて少し嬉しかったが、一人きりの銅像めぐりは、少しだけ寂しいものだった。' }],
    backgroundImage: RESTAURANT_BG,
  },
  ENDING_BAD: {
    title: '〜END〜',
    // FIX: Type 'string' is not assignable to type 'TextLine'. Converted string array to an array of TextLine objects.
    text: [
      { dialogue: '結局、誰とも話すことなく、櫻子は一人でレストランを後にした。' },
      { dialogue: '新しい場所での友達作りは、まだ始まったばかりだ。' },
    ],
    backgroundImage: RESTAURANT_BG,
  },
};