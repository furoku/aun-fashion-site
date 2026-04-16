export const AUN_CONTENT = {
  brand: {
    name: "AUN",
    location: "Tokyo / Kyoto",
    label: "2026 Capsule Collection",
    tagline: "静けさの輪郭をまとう、東京発の独立系レーベル。",
    summary:
      "静かに見えて、視線は長く残る。AUN は、素材の余韻と揺れで印象をつくる独立系ファッションレーベルです。今季は、纏った瞬間に輪郭が立ち上がる主役ルックを揃えました。",
    themeTitle: "静かな残響 / 第1章",
    seasonHeading: "歩くたびに陰影が揺れ、静かなのに目を離せない。",
    seasonCopy:
      "今季は強い装飾ではなく、揺れ、重なり、布の反射で印象をつくります。ラックでは静かに映え、袖を通すと輪郭が立ち上がる服を揃えました。",
    audience:
      "独立系セレクト、スタイリスト、展示会キュレーター、カルチャー誌のファッション担当。",
    priceCue:
      "コンテンポラリー後半からクワイエット・ラグジュアリー手前を想定。ラインシートで個別共有。",
    studio:
      "東京を拠点に、京都の仕上げパートナーと連携して制作。",
    contactEmail: "partners@aun-studio.example",
    footerNote:
      "掲載中のコンセプトビジュアルは、最終撮影前に構図、シルエット、色調を確認するための仮素材です。",
    partnerItems: [
      {
        title: "取扱のご相談",
        text: "主役ルックからご提案しやすいラインシートをお送りします。",
        href: "mailto:partners@aun-studio.example?subject=AUN%20Stockist%20Inquiry",
      },
      {
        title: "掲載・取材",
        text: "仕立てや素材の魅力が伝わるブランドノートをお送りします。",
        href: "mailto:press@aun-studio.example?subject=AUN%20Press%20Request",
      },
      {
        title: "協業のご相談",
        text: "スタイリングや展示で空気が映える企画をご一緒できます。",
        href: "mailto:hello@aun-studio.example?subject=AUN%20Collaboration",
      },
    ],
  },
  hero: {
    visual: {
      src: "./assets/generated/hero-concept.png",
      alt: "低彩度のテキスタイルと細長いシルエットを主題にした AUN のコンセプトビジュアル",
      caption: "コンセプトビジュアル / シルエットとトーンの確認",
    },
    stats: [
      { label: "構成", value: "3ページのご案内" },
      { label: "想定先", value: "取扱先 / スタイリスト / エディター" },
      { label: "資料", value: "ラインシートは個別共有" },
    ],
  },
  home: {
    gallery: [
      {
        src: "./assets/generated/home-strip-01.png",
        alt: "AUN のロングコートルックを捉えた縦長のエディトリアルビジュアル",
        caption: "参考ビジュアル 01 / シルエット確認",
        tone: "tall",
      },
      {
        src: "./assets/generated/home-strip-02.png",
        alt: "レイヤードした布の質感を近接で見せる AUN のエディトリアルビジュアル",
        caption: "参考ビジュアル 02 / 素材と艶",
        tone: "wide",
      },
      {
        src: "./assets/generated/home-strip-03.png",
        alt: "灰青のコートルックを横向きで見せる AUN のエディトリアルビジュアル",
        caption: "参考ビジュアル 03 / 逆光のトーン",
        tone: "tall",
      },
    ],
    reasons: [
      {
        title: "静かに映えて、記憶に残る",
        text: "色や装飾を足しすぎず、それでも一目で印象が残るシルエットに仕上げています。",
      },
      {
        title: "一枚でスタイリングが決まる",
        text: "主役になるアウターやボトムを軸に、着こなしの空気がすっと決まります。",
      },
      {
        title: "撮影でも売場でも映える",
        text: "近くでは素材差が、遠くでは輪郭が効き、誌面にもラックにも自然になじみます。",
      },
    ],
    representativeLook: {
      title: "代表ルック / ロングバイアスコートを軸にした構成",
      summary:
        "肩線を固定せず、歩くたびに輪郭が揺れるロングコートを軸にした代表ルックです。静かなのに視線を引き寄せる、AUN らしい空気を一体で伝えます。",
      image: {
        src: "./assets/generated/look-02.png",
        alt: "AUN の代表ルックを抽象化した縦長ビジュアル",
        caption: "代表ルック / 視線を引き寄せるシルエット",
      },
      details: [
        "アウターを主役に据えるだけで、全身の空気がすっと整います。",
        "ロゴや装飾に頼らず、素材差だけで奥行きが生まれます。",
        "撮影でも店頭でも、静かな強さがそのまま映ります。",
      ],
    },
  },
  collections: [
    {
      id: "resonant-quiet",
      label: "主力カプセル",
      title: "今季主力 / 第1章",
      summary:
        "AUN の核となるカプセル。色数を絞り、布の反射と重なりだけで立体感をつくるシリーズです。",
      noteTitle: "主力ライン / 今季主力",
      note:
        "静かな見た目の奥で、着用時の揺れと層の重なりが印象を大きく変えます。写真では抑制的に見えても、実際には一段深い存在感が残るシリーズです。",
      looks: [
        {
          id: "look-01",
          name: "ルック 01",
          title: "細身トラウザーに重ねるバイアスシャツ",
          text: "最初の一体として手に取りやすく、それでいて AUN の空気がしっかり残る基準ルックです。",
          price: 340000,
          image: "./assets/generated/look-01.png",
          alt: "シャツとトラウザーのルックを抽象化したコンセプトビジュアル",
        },
        {
          id: "look-02",
          name: "ルック 02",
          title: "柔らかな仕立てに重ねるロングバイアスコート",
          text: "ライン全体の温度を決めるロングコート。纏った瞬間に印象を決める主軸ピースです。",
          price: 960000,
          image: "./assets/generated/look-02.png",
          alt: "ロングコートのルックを抽象化したコンセプトビジュアル",
        },
        {
          id: "look-03",
          name: "ルック 03",
          title: "ラップスカートに重ねる低音のニット",
          text: "レイヤーの揺れと身体との距離が美しく出るルック。スタイリングでも印象がつくりやすい一体です。",
          price: 420000,
          image: "./assets/generated/look-03.png",
          alt: "ニットとラップスカートのルックを抽象化したコンセプトビジュアル",
        },
      ],
      selectedPieces: [
        {
          name: "主力バイアスコート",
          descriptor: "流れる前端と低い重心で、ひと目で印象を残す主力アウターです。",
          price: 680000,
        },
        {
          name: "ヴェールシャツ",
          descriptor: "薄い反射を持つシャツ。セット提案にも単品編集にも寄せやすい中核。",
          price: 180000,
        },
        {
          name: "テーパードラップスカート",
          descriptor: "女性像を限定せずに見せられる可変的なボトム。エディトリアル用途に強い。",
          price: 260000,
        },
      ],
    },
    {
      id: "counterlight",
      label: "補助ライン",
      title: "広がりのあるルック / 第1章",
      summary:
        "少しだけ温度を上げる編集ライン。黒だけで締めず、灰青や鈍い白を使ってコントラストをずらします。",
      noteTitle: "主力ライン / 広がりのあるルック",
      note:
        "灰青や鈍い白を差し込み、静かな輪郭はそのままに、見た瞬間のやわらかさを足したエディットです。主力ラインの魅力を、より広いスタイリングへ広げます。",
      looks: [
        {
          id: "look-04",
          name: "ルック 04",
          title: "灰青のコートで空気を変えるルック",
          text: "色をひと差しするだけで印象がほどける、やわらかな主役ルックです。",
          price: 820000,
          image: "./assets/generated/look-04.png",
          alt: "灰青のコートルックを抽象化したコンセプトビジュアル",
        },
        {
          id: "look-05",
          name: "ルック 05",
          title: "ドライベストとトラウザーでまとめる低艶の構成",
          text: "素材差と艶差を静かに重ね、性別を問わず美しく映るルックです。",
          price: 360000,
          image: "./assets/generated/look-05.png",
          alt: "ベストとトラウザーのルックを抽象化したコンセプトビジュアル",
        },
      ],
      selectedPieces: [
        {
          name: "灰青コート",
          descriptor: "シリーズの空気を変える色差の主役。ひと差しで印象をやわらげます。",
          price: 620000,
        },
        {
          name: "ドライベスト",
          descriptor: "レイヤードの幅を広げ、着こなしに軽やかな余韻をつくる一枚です。",
          price: 100000,
        },
      ],
    },
  ],
  about: {
    intro:
      "AUN は大きな声で主張する服ではありません。けれど、触れた瞬間の納得感と、纏ったときに残る輪郭の美しさで、静かに印象を残します。",
    principles: [
      {
      title: "装飾より先に、シルエットで惹きつける",
        text: "装飾やロゴより先に、身体との距離と布の落ち方を設計します。",
      },
      {
      title: "商材でありながら声を荒げない",
        text: "商品として成立しながら、見た瞬間の静かな緊張感を失わないようにします。",
      },
      {
      title: "近くで見ても、遠くで見ても美しい",
        text: "素材の表情と全体の輪郭、そのどちらも印象に残るように整えています。",
      },
    ],
    story: {
      title: "売場でも撮影でも、空気を変える小さなライン。",
      copy:
        "東京を基点に、京都の縫製・仕上げパートナーと連携しながら少量で制作します。大量生産では出しにくい揺れや落ち感を残し、スタイリングでも売場でも印象が立つ服を目指しています。",
      image: {
        src: "./assets/generated/detail-01.png",
        alt: "AUN のスタジオノートを抽象化したコンセプトビジュアル",
        caption: "制作ノート / 素材と手元の確認",
      },
      points: [
        "ラインシートは、主役の魅力が伝わる順に整えて個別共有します。",
        "掲載や貸出で使いやすい、短く強い紹介文もご用意します。",
        "仮ビジュアルの段階から、素材差と落ち感の美しさを優先しています。",
      ],
    },
    gallery: [
      {
        src: "./assets/generated/studio-01.png",
        alt: "コートやレイヤードピースが並ぶ AUN のスタジオラック",
        caption: "制作風景 01 / ラックと輪郭",
      },
      {
        src: "./assets/generated/studio-02.png",
        alt: "裁断台の上で布とパターンを整える AUN の制作風景",
        caption: "制作風景 02 / 手元と素材",
      },
    ],
  },
};
