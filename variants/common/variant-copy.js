const partnerItems = (stockists, press, collaboration) => [
  {
    title: "取扱のご相談",
    text: stockists,
    href: "mailto:partners@aun-studio.example?subject=AUN%20Stockist%20Inquiry",
  },
  {
    title: "掲載・取材",
    text: press,
    href: "mailto:press@aun-studio.example?subject=AUN%20Press%20Request",
  },
  {
    title: "協業のご相談",
    text: collaboration,
    href: "mailto:hello@aun-studio.example?subject=AUN%20Collaboration",
  },
];

const pieces = (coat, shirt, skirt) => [
  { name: "Bias Coat", descriptor: coat, price: 680000 },
  { name: "Veil Shirt", descriptor: shirt, price: 180000 },
  { name: "Taper Wrap Skirt", descriptor: skirt, price: 260000 },
];

const counterlightPieces = (coat, vest) => [
  { name: "Grey-Blue Coat", descriptor: coat, price: 620000 },
  { name: "Dry Vest", descriptor: vest, price: 100000 },
];

export const VARIANT_COPY = {
  "01-obsidian-runway": {
    brand: {
      label: "Runway buyer dossier",
      tagline: "夜の輪郭だけを残す、硬質な編集ライン。",
      summary:
        "黒の余韻だけで視線を止める、AUN の最もシャープなラインです。ひと目で空気を変える主役ルックが揃います。",
      themeTitle: "After Hours / Capsule 01",
      seasonHeading: "Cut the noise, keep the silhouette, let the coat do the talking.",
      seasonCopy:
        "曖昧さよりも、ひと目で残る決定力を優先しています。素材差は静かに抑え、重心と陰影、歩行時の切れ味で魅力を立ち上げます。",
      audience: "高感度な黒基調の売場、撮影用貸出を重視するスタイリスト、強い一体感を求める編集者。",
      priceCue: "静かなラグジュアリー寄り。主役アウターから先に会話が始まる価格感。",
      partnerItems: partnerItems(
        "買付判断に必要な主力アウター中心のラインシートを、最短距離で共有します。",
        "誌面や特集に転用しやすい短いブランドノートとルック解説をまとめて案内します。",
        "展示、スタイリング、夜間イベント向けの限定編集を前提に会話を開きます。",
      ),
    },
    home: {
      reasons: [
        { title: "Built for a decisive rack", text: "強い主役が必要な売場で、迷わず先頭に置ける密度があります。" },
        { title: "Low SKU, high pressure", text: "型数を増やさず、印象の圧を保ったまま取扱の検討を進めやすくします。" },
        { title: "Editorial, without softness", text: "撮影でも接客でも、輪郭の強さがそのまま印象になります。" },
      ],
      representativeLook: {
        title: "Look 02 / Black coat with a narrow afterimage",
        summary:
          "ロングコートを単なる外套ではなく、売場全体のトーンを決める装置として扱う代表ルックです。主役を一本に絞りたい相手に向いています。",
        details: [
          "アウター一点で空気を変える設計です。",
          "差し色は最小限に抑え、シルエットの圧を優先します。",
          "接客でも誌面でも、主役の魅力がまっすぐ伝わります。",
        ],
      },
    },
    collections: [
      {
        id: "resonant-quiet",
        title: "After Hours / Capsule 01",
        summary: "低い照度の中でだけ輪郭が強く立つ、黒主体の主力カプセルです。",
        noteTitle: "Collection note / After Hours",
        note: "写真では静かでも、実物では裾の揺れと重心差が印象を決めます。短い会話でも記憶に残る主力ラインです。",
        selectedPieces: pieces(
          "ラックの先頭に置いて温度を決める一本。",
          "黒の中に薄い差をつくる補助ピース。",
          "身体から少し離れて見えることで緊張感を残す可変ボトム。",
        ),
      },
      {
        id: "counterlight",
        title: "Counterlight / strict extension",
        summary: "黒の圧は保ったまま、鈍い光だけを差し込む補助ラインです。",
        noteTitle: "Collection note / Counterlight",
        note: "店頭の黒一辺倒を避けたいときに使う中間色エディットです。温度は上げず、読みやすさだけを少し足します。",
        selectedPieces: counterlightPieces(
          "主力カプセルに抜けをつくる冷たい色差のコート。",
          "全体の硬さを崩さずレイヤーを増やせる中継ピース。",
        ),
      },
    ],
    about: {
      intro: "大きな声ではなく、最後に残る像を整えるためのブランドです。印象は重く、運用は明快に保つことを重視します。",
      story: {
        title: "A line intended to enter the room before the explanation does.",
        copy: "制作は少量でも、印象の強度を落とさないことを優先します。全型を並べるより、主役が先に立ち上がる見せ方を大切にしています。",
        points: [
          "営業資料も lookbook も、主役の一体を起点に再編集します。",
          "掲載用テキストは長く書かず、短い断定文で構成します。",
          "仮ビジュアルの段階でも、光量と重心だけは最終像に近づけます。",
        ],
      },
    },
  },
  "02-parchment-salon": {
    brand: {
      label: "Salon reading dossier",
      tagline: "紙の温度で輪郭を伝える、静かな読後感のあるライン。",
      summary:
        "紙をめくるように魅力が深まる、静かな余韻のあるラインです。ルックと物語の両方で惹きつけます。",
      themeTitle: "Margin Notes / Capsule 01",
      seasonHeading: "A line that unfolds in paragraphs rather than statements.",
      seasonCopy:
        "布の落ち方や制作背景が、読むほど魅力になる編集です。静かなのに印象が深まるラインとして仕上げています。",
      audience: "文脈を重視するセレクト、展示企画者、ブランドストーリーごと拾いたいエディター。",
      priceCue: "静かな上質感が先に立つ価格帯。ルック全体で奥行きのある魅力が伝わります。",
      partnerItems: partnerItems(
        "什器や売場文脈に合わせて、説明文付きのラインシートを落ち着いた体裁で共有します。",
        "掲載用には、短い引用文とシーズンノートをセットで案内します。",
        "朗読会、展示、冊子企画のような文脈を伴う協業に向いています。",
      ),
    },
    home: {
      reasons: [
        { title: "Readability before impact", text: "強い一撃より、読み返したくなる整い方で判断を支えます。" },
        { title: "Context travels with product", text: "ルックだけでなく、制作背景まで含めて魅力が深まります。" },
        { title: "Warmth without sweetness", text: "やわらかいが甘くない温度で、会話を長く保てます。" },
      ],
      representativeLook: {
        title: "Look 02 / Long coat, low voice, warm margin",
        summary:
          "ロングコートの余白が美しく残る代表ルックです。強く押し切らずとも、静かに心をつかみます。",
        details: [
          "動いたときにだけ出る柔らかい差を重視します。",
          "素材の反射を紙面のように静かに扱います。",
          "文章のある誌面でも、服の魅力が自然に引き立ちます。",
        ],
      },
    },
    collections: [
      {
        id: "resonant-quiet",
        title: "Margin Notes / Capsule 01",
        summary: "余白、反射、沈黙の順で読ませる基幹カプセルです。",
        noteTitle: "Collection note / Margin Notes",
        note: "売場での即効性より、接客での説明と誌面での再読性を優先したラインです。空気の静けさそのものが価値になります。",
        selectedPieces: pieces(
          "導入什器でも文脈をつくりやすい静かな主役。",
          "コートの強さを受け止める透明度の高い中核。",
          "重さを増やさず編集の幅だけを足せる可変ボトム。",
        ),
      },
      {
        id: "counterlight",
        title: "Counterlight / reading extension",
        summary: "紙の白場のような抜けを足す、やや明るい補助ラインです。",
        noteTitle: "Collection note / Reading Extension",
        note: "見せ場を増やすためではなく、呼吸をつくるための中間色です。重い売場の中で静かな緩急をつくれます。",
        selectedPieces: counterlightPieces(
          "黒主体の編成に余白を足すための色差コート。",
          "文章量の多い編集でもうるさくならない軽いレイヤー。",
        ),
      },
    ],
    about: {
      intro: "勢いで押すブランドではなく、読み進めるほど輪郭が定まるブランドでありたいと考えています。",
      story: {
        title: "A studio line composed like an annotated essay.",
        copy: "東京と京都をまたぐ少量制作を前提に、制作背景も商品価値の一部として扱います。数字だけでなく、どのように読ませるかも同時に設計します。",
        points: [
          "営業向けには、短文の注釈を添えたラインシートを想定しています。",
          "掲載用には、引用しやすい短い文章を別で用意します。",
          "仮ビジュアルでも紙と布の温度差が分かるように構成します。",
        ],
      },
    },
  },
  "03-gallery-minimal": {
    brand: {
      label: "Gallery wall dossier",
      tagline: "情報量を削ぎ、ひとつずつの輪郭を深く残すギャラリーライン。",
      summary: "余白そのものが美しく映る、静かな存在感のあるラインです。ひとつずつの輪郭が深く残ります。",
      themeTitle: "White Room / Capsule 01",
      seasonHeading: "Silence, spacing, and one piece at a time.",
      seasonCopy: "情報を足すより削ぐことで、服そのものの魅力を際立たせています。相手の速度で見ても、ひとつずつの輪郭が深く残ります。",
      audience: "ミニマルな空間を好むセレクト、展示空間で服を見せたいキュレーター、静物寄りの編集者。",
      priceCue: "量感より精度で納得させる価格帯。多くを語らず、質で通す想定です。",
      partnerItems: partnerItems(
        "型数を絞った見せ方に合う、静かな体裁のラインシートを共有します。",
        "誌面で余白を残せるよう、情報を整理した press 用の短文を案内します。",
        "展示やインスタレーション寄りの協業に向く導線です。",
      ),
    },
    home: {
      reasons: [
        { title: "Space does the persuasion", text: "装飾ではなく余白そのもので、服の輪郭を立たせます。" },
        { title: "Each piece gets a wall", text: "要素同士を近づけず、一体ごとに視線を止められます。" },
        { title: "Less language, more certainty", text: "説明文を減らしても判断できるよう、構成そのものを整えています。" },
      ],
      representativeLook: {
        title: "Look 02 / Coat as object, not as noise",
        summary: "ロングコートをひとつの作品のように印象づける代表ルックです。静止した瞬間の美しさが際立ちます。",
        details: [
          "余白を前提にした売場や誌面で強く機能します。",
          "動きより静止時の輪郭を重視しています。",
          "言葉を減らしても、服そのものの魅力が残ります。",
        ],
      },
    },
    collections: [
      {
        id: "resonant-quiet",
        title: "White Room / Capsule 01",
        summary: "静物として成立する輪郭を優先した、最小編集のカプセルです。",
        noteTitle: "Collection note / White Room",
        note: "接客で多くを語らなくても、物としての完成度がしっかり伝わります。誌面でも空白そのものが魅力になります。",
        selectedPieces: pieces(
          "一体で成立する静かな重心の主役アウター。",
          "空気を濁さずにレイヤーをつくる薄い核。",
          "性別や役割を限定しない、余白のあるボトム。",
        ),
      },
      {
        id: "counterlight",
        title: "Counterlight / pale extension",
        summary: "白場を壊さず、わずかな色差だけを足す拡張ラインです。",
        noteTitle: "Collection note / Pale Extension",
        note: "色を増やすためではなく、展示空間の呼吸を整えるための補助カプセルです。",
        selectedPieces: counterlightPieces(
          "石のような静けさを持つ、導入向けの色差コート。",
          "主役を邪魔せず、印象に奥行きを足す軽やかな層。",
        ),
      },
    ],
    about: {
      intro: "言葉を重ねなくても輪郭が残る、静かな存在感のためのラインです。余白ごと魅力に変えます。",
      story: {
        title: "A studio line edited with the logic of an exhibition wall.",
        copy: "制作背景も必要最小限に留め、代わりに布の落ち方と間合いで価値を伝えます。売場でも誌面でも、物の周囲に空気があることを優先しています。",
        points: [
          "営業資料は情報を足すより、削る順番を重視します。",
          "掲載用には短い説明文と静かなキャプションを想定します。",
          "仮ビジュアルも、空間の白さを崩さないことを優先します。",
        ],
      },
    },
  },
  "04-editorial-grid": {
    brand: {
      label: "Magazine spread dossier",
      tagline: "誌面の強度で読み切らせる、出版物のような営業編集。",
      summary: "誌面をめくるように魅力が立ち上がる、編集強度の高いラインです。情報が多くても主役の印象がぶれません。",
      themeTitle: "Proof Sheet / Capsule 01",
      seasonHeading: "Every module earns its place, every line lands on the grid.",
      seasonCopy: "感覚だけでなく誌面の強さでも惹きつけるラインです。売場でも媒体でも、主役の魅力が同じ熱量で伝わります。",
      audience: "出版文脈の強い編集者、表現と情報の両方を求めるセレクト、比較しながら判断する買付担当。",
      priceCue: "編集価値も込みで納得させる価格感。主役だけでなく紙面全体で強度をつくる想定。",
      partnerItems: partnerItems(
        "売場資料としてそのまま使える、見出し付きのラインシートを共有します。",
        "特集ページやルック記事に転用しやすい press テキストを整理して案内します。",
        "誌面企画、特設ページ、編集協業に向けた会話を開きます。",
      ),
    },
    home: {
      reasons: [
        { title: "The layout already explains", text: "説明文を増やさなくても、読む順番そのものが判断を支えます。" },
        { title: "Good for comparison", text: "複数ブランドを見比べる場でも、輪郭の違いがきちんと残ります。" },
        { title: "Editorial by construction", text: "感覚的な雰囲気だけでなく、誌面の精度で信頼を足します。" },
      ],
      representativeLook: {
        title: "Look 02 / Lead look for the opening spread",
        summary: "全体のトーンを一枚で決める lead look として設計した代表ルックです。誌面の一段目に置いたときの強さを基準にしています。",
        details: [
          "見出しの横に置いても負けない輪郭を持たせています。",
          "説明の多い媒体でも、服の魅力がすっきり立ち上がります。",
          "比較文脈に入っても空気が散らないのが利点です。",
        ],
      },
    },
    collections: [
      {
        id: "resonant-quiet",
        title: "Proof Sheet / Capsule 01",
        summary: "誌面の一面を任せられる強度で組んだ基幹ラインです。",
        noteTitle: "Collection note / Proof Sheet",
        note: "情報量が多いページでも、先頭の一体が印象をしっかり決めます。写真とテキストの両方で魅力が伸びるラインです。",
        selectedPieces: pieces(
          "特集の扉として使える密度の高い主力アウター。",
          "全体の音量を整えるための中核シャツ。",
          "比較カットでも見え方がぶれにくい可変ボトム。",
        ),
      },
      {
        id: "counterlight",
        title: "Counterlight / print extension",
        summary: "誌面の中盤で呼吸を変えるための、少し明るい補助ラインです。",
        noteTitle: "Collection note / Print Extension",
        note: "黒主体の連続にわずかな抜けをつくるための色差で、誌面全体の温度を整えます。",
        selectedPieces: counterlightPieces(
          "特集の第二章に置きやすい、温度差づくりのコート。",
          "文章量が増えても整理して見える軽い補助ピース。",
        ),
      },
    ],
    about: {
      intro: "ブランドの言葉まで含めて、誌面のように美しく読ませるラインです。何を先に見せるかまで魅力として設計しています。",
      story: {
        title: "A studio line built to survive dense pages and busy comparisons.",
        copy: "取扱先にも媒体にも、短時間で整理して伝わることを優先しています。だからこそ、印象だけでなく、段組みのような明快さも同時に設計します。",
        points: [
          "ご案内資料は見出しと本文の役割を明確に分けて共有します。",
          "press 用には抜粋しやすい短文単位でテキストを整えます。",
          "仮ビジュアルでも誌面上の視認性を確かめる前提です。",
        ],
      },
    },
  },
  "05-midnight-system": {
    brand: {
      label: "System deck dossier",
      tagline: "冷たい精度で組み上げた、夜間運用のためのモード編集。",
      summary: "構造の美しさで視線を引き寄せる、精度の高いラインです。冷たい光の中でも輪郭が鮮明に残ります。",
      themeTitle: "Control Room / Capsule 01",
      seasonHeading: "Precise interfaces, cold light, and garments that behave like systems.",
      seasonCopy: "曖昧な余韻よりも、制御された美しさを重視しています。店頭でもご相談の場でも、輪郭の魅力が迷わず伝わります。",
      audience: "テック寄りの感性を持つバイヤー、構造差に反応するスタイリスト、整然とした資料を好む編集者。",
      priceCue: "技術感と静かな高級感が同居する価格帯。素材と構造差で納得させる想定。",
      partnerItems: partnerItems(
        "型番感覚で見やすい、整理されたラインシートを共有します。",
        "構造差や素材差が伝わる press 用の短文をシステム的に案内します。",
        "テック展示、インスタレーション、夜間イベント向けの協業に向きます。",
      ),
    },
    home: {
      reasons: [
        { title: "Readable under pressure", text: "情報量が多くても、どこを見るべきかがすぐに分かります。" },
        { title: "Structure over sentiment", text: "気分より構造差で価値を伝えたい相手に向いています。" },
        { title: "Cold, but not sterile", text: "冷たい印象を保ちながら、服としての体温は失いません。" },
      ],
      representativeLook: {
        title: "Look 02 / Long coat with calibrated volume",
        summary: "重心のズレまで美しく見せる、最も精度の高い代表ルックです。接客でも写真でも輪郭の魅力がぶれません。",
        details: [
          "重心差の美しさが、そのまま魅力として伝わります。",
          "ライトや背景が変わっても輪郭が崩れにくいのが利点です。",
          "感覚的なコピーに頼らず会話を組み立てられます。",
        ],
      },
    },
    collections: [
      {
        id: "resonant-quiet",
        title: "Control Room / Capsule 01",
        summary: "静けさを保ちながら、構造差を明確に見せる基幹カプセルです。",
        noteTitle: "Collection note / Control Room",
        note: "見た目の派手さではなく、パネルのように整理された理解のしやすさで価値を出すラインです。",
        selectedPieces: pieces(
          "全体の制御感を決める精度の高い主力コート。",
          "主役の輪郭を支える薄い中核シャツ。",
          "可変性を持ちながら説明しやすいボトム。",
        ),
      },
      {
        id: "counterlight",
        title: "Counterlight / cool extension",
        summary: "冷たい色差でレイヤーを足す、制御系の補助ラインです。",
        noteTitle: "Collection note / Cool Extension",
        note: "空気を温めるのではなく、視認性だけを少し上げるための編集です。",
        selectedPieces: counterlightPieces(
          "黒主体の制御感を壊さない冷色コート。",
          "組み合わせの自由度だけを足す中間レイヤー。",
        ),
      },
    ],
    about: {
      intro: "感性だけに頼らず、構造の美しさまで伝わるラインです。理解の速さもそのまま魅力になります。",
      story: {
        title: "A studio line written like a technical memo, not a moodboard.",
        copy: "制作は少量でも、ラインの見え方は明快に保ちます。形状と順序の美しさが、そのまま印象の強さになります。",
        points: [
          "ラインシートは比較しやすい並びで編集します。",
          "press 用の説明も、構造差を中心に短く整理します。",
          "仮ビジュアルでも、光と素材の冷たさは先に検証します。",
        ],
      },
    },
  },
  "06-atelier-cream": {
    brand: {
      label: "Atelier board dossier",
      tagline: "制作途中の空気まで魅力に変える、やわらかなアトリエ編集。",
      summary: "工房の気配まで魅力になる、やわらかなアトリエラインです。手仕事の余韻がそのまま印象に残ります。",
      themeTitle: "Soft Assembly / Capsule 01",
      seasonHeading: "Pinned notes, cut fabric, and a line that still feels hand-touched.",
      seasonCopy: "均一に整えすぎず、手仕事の気配がほのかに残る美しさを大切にしています。人の手が宿ることで、服の魅力がいっそう深まります。",
      audience: "クラフト感を好むセレクト、制作背景まで売場で伝えたいバイヤー、手仕事の気配を拾いたい媒体。",
      priceCue: "クラフト寄りのコンテンポラリー。量産感のなさが価値になる価格帯です。",
      partnerItems: partnerItems(
        "素材メモや制作コメントを添えたラインシートを共有できます。",
        "制作背景が伝わる短いノートを press 用にまとめて案内します。",
        "展示やワークショップ寄りの協業と相性がよい導線です。",
      ),
    },
    home: {
      reasons: [
        { title: "Process adds value", text: "完成品だけでなく、作られ方そのものが説得力になります。" },
        { title: "Warm without nostalgia", text: "やわらかいが古びない温度で、今の売場にも馴染みます。" },
        { title: "Tactile first", text: "触りたくなる印象を、資料段階から残しておけます。" },
      ],
      representativeLook: {
        title: "Look 02 / Coat with a hand-finished aftertone",
        summary: "輪郭は整えつつ、どこか手で仕上げた気配が残る代表ルックです。厳しすぎない mode を求める相手に向いています。",
        details: [
          "素材の柔らかい差がそのまま会話の入口になります。",
          "工房の温度がそのまま魅力として伝わります。",
          "誌面より接客で効く良さを先に渡せます。",
        ],
      },
    },
    collections: [
      {
        id: "resonant-quiet",
        title: "Soft Assembly / Capsule 01",
        summary: "手触りと輪郭の両立を目指した、穏やかな主力カプセルです。",
        noteTitle: "Collection note / Soft Assembly",
        note: "整い過ぎた均一さではなく、少しだけ手仕事の余白が残る見え方を価値にしています。",
        selectedPieces: pieces(
          "アトリエ感を残しつつ売場でも成立する主力コート。",
          "素材差をやさしく受け止める中核シャツ。",
          "レイヤーに柔らかい揺れを足す可変ボトム。",
        ),
      },
      {
        id: "counterlight",
        title: "Counterlight / atelier extension",
        summary: "制作途中の紙片のような軽さを足す補助ラインです。",
        noteTitle: "Collection note / Atelier Extension",
        note: "重い色だけで構成せず、明るい余白を少し混ぜるためのエディットです。",
        selectedPieces: counterlightPieces(
          "工房の空気を軽く見せるための明るい導入コート。",
          "主役の横で柔らかい差をつくる中継ピース。",
        ),
      },
    ],
    about: {
      intro: "AUN の裏側にある手の感触まで魅力として残すラインです。説明より先に、手仕事の余韻が伝わります。",
      story: {
        title: "A studio line that keeps the pins, tape, and traces in view.",
        copy: "少量制作だからこそ、均一さよりも手触りの差が美しく残ります。制作途中の気配まで、そのまま魅力として伝えます。",
        points: [
          "ラインシートにも素材メモや短い注釈を添える想定です。",
          "press 向けには process 写真と短文を組み合わせます。",
          "仮ビジュアルでもアトリエの空気感を優先します。",
        ],
      },
    },
  },
  "07-monochrome-pill": {
    brand: {
      label: "Soft module dossier",
      tagline: "丸みのある静けさで、緊張をほどきながら見せるライン。",
      summary: "やわらかな入口から静かな強さが残るラインです。近づきやすさと輪郭の美しさを両立します。",
      themeTitle: "Cloud Tone / Capsule 01",
      seasonHeading: "A quiet line softened at the edges, not diluted at the core.",
      seasonCopy: "強さを丸ごと消さず、触れやすい輪郭へ整え直しています。初見の距離が自然に縮まり、静かな魅力が残ります。",
      audience: "緊張感の強すぎる mode を避けたいセレクト、やわらかな接客導線を作りたい売場、柔らかい静けさを好む媒体。",
      priceCue: "静かな上質感を保ちながら入口を広く取る価格帯。怖くないラグジュアリー寄り。",
      partnerItems: partnerItems(
        "導入しやすいやわらかな構成で、基本情報をまとめたラインシートを共有します。",
        "硬すぎない tone の press テキストを短く整理して案内します。",
        "空間演出や体験設計を含む、やさしい協業文脈に向いています。",
      ),
    },
    home: {
      reasons: [
        { title: "Soft entrance, strong core", text: "最初の印象はやわらかく、会話の中で静かな強さが残ります。" },
        { title: "Good for gentle retail", text: "接客導線を固くしすぎずに世界観を渡せます。" },
        { title: "Calm over intimidation", text: "近寄りやすく、それでいて輪郭はしっかり残ります。" },
      ],
      representativeLook: {
        title: "Look 02 / Softened coat with low-noise balance",
        summary: "代表ルックも威圧感より整い方で見せます。売場の入口に置いても緊張を上げすぎないのが利点です。",
        details: [
          "輪郭の強さを角ではなく面で伝えます。",
          "接客の最初の一言から、やわらかな魅力が伝わります。",
          "媒体でも生活圏に近い距離で扱いやすくなります。",
        ],
      },
    },
    collections: [
      {
        id: "resonant-quiet",
        title: "Cloud Tone / Capsule 01",
        summary: "静けさをやわらかな面で包み直した基幹カプセルです。",
        noteTitle: "Collection note / Cloud Tone",
        note: "怖さを減らしても輪郭は残る、というバランスを目指したラインです。導入のしやすさが価値になります。",
        selectedPieces: pieces(
          "売場の入口でも強すぎない主力コート。",
          "全体を静かにまとめる柔らかな核シャツ。",
          "動きに余白をつくる、穏やかな可変ボトム。",
        ),
      },
      {
        id: "counterlight",
        title: "Counterlight / pale comfort",
        summary: "さらに入口を広げるための、軽い中間色ラインです。",
        noteTitle: "Collection note / Pale Comfort",
        note: "見はじめのハードルを下げたいときに使う補助エディットで、空気感を崩さずに親しみだけを足します。",
        selectedPieces: counterlightPieces(
          "黒主体の構成をやわらげるための淡い導入コート。",
          "着地を軽く見せるための補助レイヤー。",
        ),
      },
    ],
    about: {
      intro: "AUN の静けさをやわらかく開いたラインです。距離の近い売場でも、自然に手を伸ばしたくなります。",
      story: {
        title: "A studio line adjusted for ease, without losing its backbone.",
        copy: "少量制作の精度はそのままに、見せ方だけをやさしく調整します。強さの出し方を変えることで、手に取られやすさを上げる狙いです。",
        points: [
          "営業資料は硬い断定より、安心感のある書き方を優先します。",
          "press 向けにも、生活圏に近い距離で読める短文を用意します。",
          "仮ビジュアルでも、丸い光と柔らかな面を優先します。",
        ],
      },
    },
  },
  "08-acid-signal": {
    brand: {
      label: "Poster attack dossier",
      tagline: "貼り紙の勢いで視線を奪う、最も鮮烈なエディトリアルライン。",
      summary: "一瞬で視線を奪う、AUN で最も鮮烈なラインです。若い文脈でも輪郭の強さがそのまま残ります。",
      themeTitle: "Signal Burst / Capsule 01",
      seasonHeading: "Short words, hard light, immediate attention.",
      seasonCopy: "短い視線でまず惹きつけ、あとからディテールで深く残すラインです。勢いそのものが最初の魅力になります。",
      audience: "ポスター的な訴求が効く売場、カルチャー寄りの媒体、瞬発力を重視するスタイリスト。",
      priceCue: "若い熱量でも成立する高感度帯。主役の見え方で納得をつくる価格感。",
      partnerItems: partnerItems(
        "短く強い説明文を添えた、スピード重視のラインシートを共有します。",
        "見出しで抜ける press 用の短文とキャプションを優先して案内します。",
        "イベント、ポスター、音楽文脈の企画と相性のよい導線です。",
      ),
    },
    home: {
      reasons: [
        { title: "Seen in one second", text: "最初の一瞥で、印象がはっきり残ります。" },
        { title: "Good for loud contexts", text: "周囲の情報量が多い場でも埋もれにくいのが利点です。" },
        { title: "Youth, not chaos", text: "勢いは強いですが、服としての輪郭は崩しません。" },
      ],
      representativeLook: {
        title: "Look 02 / Coat as poster hit",
        summary: "視線が止まる強さを最優先にした代表ルックです。強い第一印象が必要な場で鮮やかに映えます。",
        details: [
          "一瞬で輪郭が焼きつく見え方を重視します。",
          "撮影やイベント告知への転用に向いています。",
          "細部の説明は後追いで足せる前提です。",
        ],
      },
    },
    collections: [
      {
        id: "resonant-quiet",
        title: "Signal Burst / Capsule 01",
        summary: "静けさを保持しつつ、視線の止まり方だけを鋭くしたカプセルです。",
        noteTitle: "Collection note / Signal Burst",
        note: "接客より先に視認性で掴むことを優先しています。若いカルチャー文脈でも埋もれないのが利点です。",
        selectedPieces: pieces(
          "一瞬で全体の温度を変える先頭コート。",
          "主役の圧を受け止める薄い補助シャツ。",
          "動きに切れを足すためのシャープなボトム。",
        ),
      },
      {
        id: "counterlight",
        title: "Counterlight / afterglow",
        summary: "勢いのあとに残る余熱として使う補助ラインです。",
        noteTitle: "Collection note / Afterglow",
        note: "派手さを足すためではなく、強い一撃のあとに呼吸を残すための中間色です。",
        selectedPieces: counterlightPieces(
          "主力の信号感を受け流すための冷色コート。",
          "動きを抑えずに全体のノイズを整える補助レイヤー。",
        ),
      },
    ],
    about: {
      intro: "AUN の中で最も loud な読み口です。黙っていても届くようにするのではなく、届く距離まで一気に引き寄せます。",
      story: {
        title: "A studio line rewritten as a poster, flyer, and late-night notice.",
        copy: "少量制作の精度はそのままに、伝わり方だけを速く鋭く整えます。短い接点でも、はっきり印象が残るラインです。",
        points: [
          "ラインシートも一読で抜ける見出しを優先します。",
          "press 用には短い断片文とキャプションを整えます。",
          "仮ビジュアルでも、光量と色の衝突を先に検証します。",
        ],
      },
    },
  },
  "09-engineered-blue": {
    brand: {
      label: "Blueprint dossier",
      tagline: "設計図のような精度で組み上げた、工業的な静けさのライン。",
      summary: "構造の美しさまで伝わる、設計精度の高いラインです。感性と納得感の両方で惹きつけます。",
      themeTitle: "Measured Drift / Capsule 01",
      seasonHeading: "Measured spacing, technical calm, and garments with visible logic.",
      seasonCopy: "雰囲気の良さだけでなく、構造の美しさまで伝わるラインです。仕様と余韻が同時に残ります。",
      audience: "構造差に反応するバイヤー、工業寄りの美意識を持つ編集者、精度で納得したいスタイリスト。",
      priceCue: "技巧と静かな高級感が先に立つ価格感。精度の高さで判断を支えます。",
      partnerItems: partnerItems(
        "仕様の見えやすい構成で、比較しやすいラインシートを共有します。",
        "構造差を短く説明した press 用テキストを整理して案内します。",
        "設計、什器、技術展示寄りの協業と相性がよい導線です。",
      ),
    },
    home: {
      reasons: [
        { title: "Precision is visible", text: "空気だけでなく、作りの精度そのものが見えます。" },
        { title: "Useful for comparison", text: "他ブランドと並んでも、輪郭の違いが際立ちます。" },
        { title: "Industrial, not cold", text: "技術感はありますが、服としての余韻は失いません。" },
      ],
      representativeLook: {
        title: "Look 02 / Long coat with measured drift",
        summary: "重さと流れの設計が最も美しく伝わる代表ルックです。感覚だけでなく、見た瞬間の納得感まで残します。",
        details: [
          "重心差が説明しやすく、会話の組み立てが速いです。",
          "店頭でも誌面でも、輪郭の美しさが安定して残ります。",
          "素材差を数値でなく視覚で理解させることができます。",
        ],
      },
    },
    collections: [
      {
        id: "resonant-quiet",
        title: "Measured Drift / Capsule 01",
        summary: "静けさを保ちながら、構造差をもっとも理解しやすくした基幹ラインです。",
        noteTitle: "Collection note / Measured Drift",
        note: "見た瞬間の感覚だけでなく、説明の再現性を重視したラインです。比較対象がある場で強く機能します。",
        selectedPieces: pieces(
          "構造差をもっとも説明しやすい主力コート。",
          "全体の精度を整える静かな中核シャツ。",
          "可変性を持ちつつ理解しやすいボトム。",
        ),
      },
      {
        id: "counterlight",
        title: "Counterlight / spec extension",
        summary: "図面の白場のような抜けを足す、冷色寄りの補助ラインです。",
        noteTitle: "Collection note / Spec Extension",
        note: "黒主体の編成に対して、視認性と理解のしやすさだけを少し加えるための編集です。",
        selectedPieces: counterlightPieces(
          "仕様差を穏やかに見せるための冷色コート。",
          "比較文脈で機能する補助レイヤー。",
        ),
      },
    ],
    about: {
      intro: "感覚の強さを保ちながら、構造の美しさまで伝わるラインです。見た瞬間の納得感を深めます。",
      story: {
        title: "A studio line documented with the calm of a blueprint.",
        copy: "少量制作でも、説明の順序は明確にします。どこが違いで、なぜ価値になるかを短く伝えられることを重視しています。",
        points: [
          "ラインシートは比較しやすい順番で整えます。",
          "press 用にも、構造差が拾いやすい短文を用意します。",
          "仮ビジュアルでも縫い目と重心の見え方を確認します。",
        ],
      },
    },
  },
  "10-soft-hospitality": {
    brand: {
      label: "Hospitality brochure",
      tagline: "やわらかな歓迎ムードで迎え入れる、親しみのある静けさ。",
      summary: "構えずに手を伸ばしたくなる、親しみのある静けさのラインです。やわらかな空気の中で上質さが残ります。",
      themeTitle: "Open Table / Capsule 01",
      seasonHeading: "Warm light, easy pacing, and a line that invites conversation.",
      seasonCopy: "強い緊張感よりも、会話が始まりやすい空気を大切にしています。売場でも資料でも、相手が自然に一歩近づけるラインです。",
      audience: "接客導線をやわらかくしたいセレクト、生活圏に近い媒体、親しみやすい空気感を求めるスタイリスト。",
      priceCue: "入りやすさのある上質帯。ラグジュアリーすぎず、親しみを保つ価格感です。",
      partnerItems: partnerItems(
        "温度のやわらかい言葉で整えたラインシートを共有します。",
        "媒体にそのまま載せやすい、やさしい tone の press 文を案内します。",
        "空間演出や hospitality 文脈の協業に向いています。",
      ),
    },
    home: {
      reasons: [
        { title: "Easy first contact", text: "最初の一歩を軽くし、会話に入りやすくします。" },
        { title: "Softens the rack", text: "緊張感の強い売場にも、やわらかな入口をつくれます。" },
        { title: "Human before abstract", text: "概念より先に、着たときの魅力が素直に伝わります。" },
      ],
      representativeLook: {
        title: "Look 02 / Long coat with welcoming balance",
        summary: "親しみやすさの中に静かな品が残る代表ルックです。接客や紹介の最初の一言から好印象が立ち上がります。",
        details: [
          "生活圏に近い媒体でも扱いやすい印象です。",
          "売場の入口に置いても緊張を上げすぎません。",
          "静かな上質感を保ちながら距離を縮めます。",
        ],
      },
    },
    collections: [
      {
        id: "resonant-quiet",
        title: "Open Table / Capsule 01",
        summary: "静けさを保ちつつ、人の気配を感じやすくした基幹ラインです。",
        noteTitle: "Collection note / Open Table",
        note: "強く押し切るより、長く会話を続けられる空気を重視したラインです。接客の柔らかさがそのまま価値になります。",
        selectedPieces: pieces(
          "入口に置きやすい、やさしい主力コート。",
          "全体を親しみやすく整える核シャツ。",
          "動きに軽さを足す、扱いやすいボトム。",
        ),
      },
      {
        id: "counterlight",
        title: "Counterlight / warm extension",
        summary: "さらに親しみを足すための、明るい補助ラインです。",
        noteTitle: "Collection note / Warm Extension",
        note: "売場の温度を少しだけ上げたいときに使う中間色で、会話の始まりを助けます。",
        selectedPieces: counterlightPieces(
          "導入の一体として置きやすい暖色寄りのコート。",
          "硬さをほぐしてレイヤーを増やせる補助ピース。",
        ),
      },
    ],
    about: {
      intro: "人との距離が自然に縮まる、親しみのあるラインです。服の前に会話が生まれ、そのあとに静かな上質感が残ります。",
      story: {
        title: "A studio line arranged like a calm invitation, not a closed room.",
        copy: "少量制作の精度は保ちながら、見え方だけをやわらかく整えます。初見でも好印象が残るように仕立てています。",
        points: [
          "営業資料は安心感のある書き方で整えます。",
          "press 用にもやわらかい tone の短文を用意します。",
          "仮ビジュアルでも、人が近づきやすい温度を優先します。",
        ],
      },
    },
  },
  "11-washi-minimal": {
    brand: {
      label: "Japanese editorial note",
      tagline: "和紙の余白のように静かで、輪郭だけが長く残るライン。",
      summary: "日本語の余白のように静かで、輪郭だけが長く残るラインです。近づくほど質感の美しさが深まります。",
      themeTitle: "Paper Grain / Capsule 01",
      seasonHeading: "Less contrast, more grain, and a quieter kind of certainty.",
      seasonCopy: "華やかさよりも、紙と布のきめが残す静かな美しさを重視しています。売場でも、強い色ではなく密度で印象が立ち上がります。",
      audience: "和の感覚を現代的に扱いたいセレクト、静かな誌面を好む媒体、日本的な余白を拾いたいキュレーター。",
      priceCue: "派手さではなく質感で納得させる価格帯。静かな工芸性に近い印象です。",
      partnerItems: partnerItems(
        "余白を保った体裁で、落ち着いたラインシートを共有します。",
        "日本語の組版に馴染む短い press 文を整理して案内します。",
        "展示、冊子、工芸寄りの文脈との協業に向いています。",
      ),
    },
    home: {
      reasons: [
        { title: "Quietly Japanese", text: "和の語彙を直接使わずに、日本的な呼吸だけを残します。" },
        { title: "Texture before color", text: "色数を増やさず、紙と布のきめで価値をつくります。" },
        { title: "Stillness that travels", text: "売場でも誌面でも、静かな密度がそのまま届きます。" },
      ],
      representativeLook: {
        title: "Look 02 / Long coat with paper-grain stillness",
        summary: "主張しすぎず、近づいたときに質感の美しさが立ち上がる代表ルックです。",
        details: [
          "紙のような余白をまとう静かな美しさを重視します。",
          "色差より質感差で、印象が深まっていきます。",
          "静かな売場や展示空間に強く馴染みます。",
        ],
      },
    },
    collections: [
      {
        id: "resonant-quiet",
        title: "Paper Grain / Capsule 01",
        summary: "和紙のきめのような静けさが長く残る主力カプセルです。",
        noteTitle: "Collection note / Paper Grain",
        note: "大きく語らず、触れたときに理解が深まる構成を目指しています。静かな場所ほど価値が立ち上がります。",
        selectedPieces: pieces(
          "余白の広い売場で映える静かな主力コート。",
          "きめの細かい印象を支える中核シャツ。",
          "身体と布の間合いを保つ可変ボトム。",
        ),
      },
      {
        id: "counterlight",
        title: "Counterlight / pale grain",
        summary: "わずかな白場をつくるための、淡い補助ラインです。",
        noteTitle: "Collection note / Pale Grain",
        note: "温度を上げず、紙の白さのような抜けだけを足すエディットです。",
        selectedPieces: counterlightPieces(
          "墨の濃さを和らげるための淡い導入コート。",
          "静かな密度を崩さずに層を増やす補助ピース。",
        ),
      },
    ],
    about: {
      intro: "日本語の余白のように静かな呼吸が残るラインです。説明を削っても、質感の美しさがしっかり伝わります。",
      story: {
        title: "A studio line arranged with the patience of paper, grain, and pause.",
        copy: "少量制作の精度を前提に、見せ方だけを静かな和の呼吸へ寄せます。直接的な記号よりも、間合いそのものを価値として扱います。",
        points: [
          "営業資料も余白を保ち、読み急がせない構成にします。",
          "press 用には短い日本語の断片文を整えます。",
          "仮ビジュアルでも紙肌のような質感を優先します。",
        ],
      },
    },
  },
  "12-tokyo-culture": {
    brand: {
      label: "Culture board dossier",
      tagline: "東京の貼り紙と誌面感を混ぜた、若い速度のあるカルチャーライン。",
      summary: "街の速度の中でも目を引く、カルチャー感のあるラインです。静けさを保ったまま、若い熱量が立ち上がります。",
      themeTitle: "Night Flyer / Capsule 01",
      seasonHeading: "Street energy, zine pacing, and a line that still edits cleanly.",
      seasonCopy: "若い視線速度に合いながら、服そのものは静かに輪郭が残るラインです。貼り紙の勢いを借りても、品のある切れ味が残ります。",
      audience: "カルチャー誌、若いセレクト、イベントや展示と地続きの売場、都市的な編集を好むスタイリスト。",
      priceCue: "感度の高い都市型コンテンポラリー。若い熱量でも無理なく入れる価格帯を想定。",
      partnerItems: partnerItems(
        "カルチャー寄りの見出し感で整えたラインシートを共有します。",
        "誌面、Web 特集、SNS でも使いやすい press 用短文を案内します。",
        "イベント、展示、カルチャー企画との協業に向いた導線です。",
      ),
    },
    home: {
      reasons: [
        { title: "Urban without shouting", text: "東京的な速度は出しつつ、服の輪郭は冷静に保ちます。" },
        { title: "Works in culture media", text: "誌面、フライヤー、SNSでも輪郭の強さがそのまま映えます。" },
        { title: "Young, but edited", text: "若さを出しても散らからないよう、読み順を硬く整えています。" },
      ],
      representativeLook: {
        title: "Look 02 / Coat with flyer energy",
        summary: "代表ルックも街の速度に合わせて少し強めに見せます。イベントや若い誌面で先に目に入ることを重視しています。",
        details: [
          "都市的な背景でも埋もれにくい輪郭です。",
          "告知ビジュアルや誌面扉でも、主役として映えます。",
          "うるさくしすぎず、編集感だけを残します。",
        ],
      },
    },
    collections: [
      {
        id: "resonant-quiet",
        title: "Night Flyer / Capsule 01",
        summary: "静けさを保ちながら、都市の速度に合わせて sharpen した主力ラインです。",
        noteTitle: "Collection note / Night Flyer",
        note: "若いカルチャー文脈でも見劣りしない視認性を持ちながら、服自体は冷静に保つことを狙っています。",
        selectedPieces: pieces(
          "カルチャー誌の扉に置いても立つ主力コート。",
          "主役の速度を整える薄い中核シャツ。",
          "動きのある撮影にも向く可変ボトム。",
        ),
      },
      {
        id: "counterlight",
        title: "Counterlight / city extension",
        summary: "ネオンの反射のような抜けを少し加える補助ラインです。",
        noteTitle: "Collection note / City Extension",
        note: "黒主体の編成に都市的な軽さを足し、カルチャー誌面での呼吸を整えます。",
        selectedPieces: counterlightPieces(
          "夜景の反射のような抜けをつくる導入コート。",
          "動きと温度差を足すための補助レイヤー。",
        ),
      },
    ],
    about: {
      intro: "街の速度に合いながら、静けさも残るラインです。見つけた瞬間に気になり、そのあとで魅力が深まります。",
      story: {
        title: "A studio line rewritten for flyers, zines, and culture pages.",
        copy: "少量制作の姿勢はそのままに、伝わり方だけを都市の速さへ寄せています。カルチャー文脈でも自然に目を引くラインです。",
        points: [
          "営業資料も見出しの抜けを重視して編集します。",
          "press 用には引用しやすい短文とキャプションを用意します。",
          "仮ビジュアルでも都市光の反射感を優先して検証します。",
        ],
      },
    },
  },
  "13-indigo-corporate": {
    brand: {
      label: "Executive dossier",
      tagline: "藍色の静けさで信頼を積む、落ち着いた品格のライン。",
      summary: "落ち着いた信頼感の中で、静かな美しさが残るラインです。丁寧に見せたい場でも感度が沈みません。",
      themeTitle: "Board Review / Capsule 01",
      seasonHeading: "Formal calm, executive clarity, and fabric that holds its posture.",
      seasonCopy: "ブランドの空気を崩さず、信頼感まで美しく積み上げるラインです。感性と落ち着きの両方が伝わります。",
      audience: "百貨店系の視点を持つ買付、丁寧な説明を求める取扱先、 formal な tone を好む媒体。",
      priceCue: "信頼感のある上質帯。過度に尖らず、安心してご検討いただきやすい価格感です。",
      partnerItems: partnerItems(
        "説明責任を果たしやすい、整然としたラインシートを共有します。",
        "press 向けには formal な tone のブランドノートを案内します。",
        "百貨店催事や上質な共同企画に向いた導線です。",
      ),
    },
    home: {
      reasons: [
        { title: "Trustworthy by design", text: "見え方だけでなく、説明の整い方がそのまま信頼になります。" },
        { title: "Formal, not stiff", text: "堅さはありますが、服としての余韻は失いません。" },
        { title: "Easy to approve", text: "ご検討に必要な要素が、過不足なく整っています。" },
      ],
      representativeLook: {
        title: "Look 02 / Coat with executive balance",
        summary: "安定感の中に静かな美しさが残る代表ルックです。formal な売場でも自然に品格が立ち上がります。",
        details: [
          "色気より先に、静かな品格が伝わります。",
          "什器や資料の tone を崩しにくいのが利点です。",
          "会話の中で細部を丁寧に積み上げられます。",
        ],
      },
    },
    collections: [
      {
        id: "resonant-quiet",
        title: "Board Review / Capsule 01",
        summary: "静けさを formal な信頼感へ寄せた基幹カプセルです。",
        noteTitle: "Collection note / Board Review",
        note: "導入のしやすさと説明の丁寧さを重視したラインで、感度と安定感を両立させることを狙っています。",
        selectedPieces: pieces(
          "信頼感のある第一印象をつくる主力コート。",
          "全体を整然とまとめる中核シャツ。",
          "柔らかさを残しつつ、上品な緊張感を添えるボトム。",
        ),
      },
      {
        id: "counterlight",
        title: "Counterlight / indigo extension",
        summary: "藍の濃淡だけで緩急をつくる穏やかな補助ラインです。",
        noteTitle: "Collection note / Indigo Extension",
        note: "大きく温度を変えず、導入のしやすさだけを少し高めるための色差エディットです。",
        selectedPieces: counterlightPieces(
          "重すぎない formal 感をつくる導入コート。",
          "全体の tone を乱さない補助レイヤー。",
        ),
      },
    ],
    about: {
      intro: "静かな美しさに信頼感を重ねたラインです。導入しやすく、それでいて感度はしっかり残ります。",
      story: {
        title: "A studio line framed with the composure of an executive note.",
        copy: "少量制作の機動力を持ちながら、見せ方は formal に整えます。感覚的な良さが、落ち着いた品格として伝わるラインです。",
        points: [
          "ラインシートは安定感のある順で編集します。",
          "press 用にも formal な言い回しの短文を用意します。",
          "仮ビジュアルでも、落ち着いた信頼感を先に確認します。",
        ],
      },
    },
  },
  "14-soft-service": {
    brand: {
      label: "Service guide dossier",
      tagline: "やさしい案内のように読める、親切設計のモード編集。",
      summary: "迷わず魅力が伝わる、ひらかれた静けさのラインです。初めて触れる相手にも好印象が残ります。",
      themeTitle: "Gentle Route / Capsule 01",
      seasonHeading: "Clear steps, soft wording, and a line that never feels closed off.",
      seasonCopy: "理解のしやすさそのものが魅力になるよう整えています。感度は保ちながら、初見でも自然に惹かれるラインです。",
      audience: "新しい客層を広げたいセレクト、わかりやすさを重視する売場、親切な tone を求める媒体。",
      priceCue: "入りやすさのある上質帯。説明しやすく、紹介しやすい価格感です。",
      partnerItems: partnerItems(
        "導入しやすい順で並べた、分かりやすいラインシートを共有します。",
        "press 向けには難しさを抑えた短文を整理して案内します。",
        "案内設計や体験設計を含む協業と相性のよい導線です。",
      ),
    },
    home: {
      reasons: [
        { title: "Easy to understand", text: "何を見るべきかが自然に伝わり、魅力がすっと入ります。" },
        { title: "Helpful for teams", text: "接客経験の差があっても、服の魅力を揃えて伝えやすいラインです。" },
        { title: "Open, not diluted", text: "分かりやすさを足しても、ブランドの輪郭は残します。" },
      ],
      representativeLook: {
        title: "Look 02 / Coat with a guided balance",
        summary: "見るべきポイントが自然に伝わる代表ルックです。紹介しやすく、入口としても美しく機能します。",
        details: [
          "接客導線を揃えやすいのが利点です。",
          "媒体でも読み手に負荷をかけにくい印象です。",
          "ブランドの入口として、好印象が残るラインです。",
        ],
      },
    },
    collections: [
      {
        id: "resonant-quiet",
        title: "Gentle Route / Capsule 01",
        summary: "静けさを保ちつつ、理解のしやすさを高めた基幹カプセルです。",
        noteTitle: "Collection note / Gentle Route",
        note: "感度の高さを保ちながら、初見の迷いを減らすことを狙ったラインです。紹介や説明がしやすいのが価値になります。",
        selectedPieces: pieces(
          "入口として機能しやすい、分かりやすい主力コート。",
          "主役の説明を支える整然とした核シャツ。",
          "着地を軽やかに整える、引き立て役のボトム。",
        ),
      },
      {
        id: "counterlight",
        title: "Counterlight / helpful extension",
        summary: "理解のしやすさをさらに高めるための明るい補助ラインです。",
        noteTitle: "Collection note / Helpful Extension",
        note: "黒主体の構成に少しだけ入口を足し、接客のしやすさを高める補助エディットです。",
        selectedPieces: counterlightPieces(
          "最初の一体として薦めやすい導入コート。",
          "主役の横で会話を軽くする補助レイヤー。",
        ),
      },
    ],
    about: {
      intro: "初めて触れる相手にも魅力が届きやすい、ひらかれたラインです。何を伝えるかが自然に立ち上がります。",
      story: {
        title: "A studio line arranged like a calm handbook, not a closed statement.",
        copy: "少量制作の精度は保ったまま、見せ方だけをやさしい案内へ変えます。理解のしやすさが、そのまま導入のしやすさにつながると考えています。",
        points: [
          "ラインシートも初見で追いやすい順に編集します。",
          "press 用には平易な短文を整えます。",
          "仮ビジュアルでも安心感のある温度を先に確認します。",
        ],
      },
    },
  },
  "15-market-layer": {
    brand: {
      label: "Marketplace board dossier",
      tagline: "情報量が多くても、主役の魅力がすっと伝わる高密度ライン。",
      summary: "情報量があっても主役の魅力がすぐ伝わる、高密度なラインです。役割の違いがひと目で見えて印象が残ります。",
      themeTitle: "Layered Offer / Capsule 01",
      seasonHeading: "Practical grouping, visible hierarchy, and style that still sells with dignity.",
      seasonCopy: "空気感を保ちながら、主役と支えるピースの魅力が自然に伝わるラインです。売場の景色まで思い描きやすく整えています。",
      audience: "比較のしやすさを重視するバイヤー、編集意図が伝わりやすい売場、短時間で要点をつかみたい相手。",
      priceCue: "実需も見据えた高感度コンテンポラリー。主役と回転要素の会話が成立する価格帯。",
      partnerItems: partnerItems(
        "主役と支えるピースの関係が伝わる構成でラインシートを共有します。",
        "媒体向けにも、空気感と要点の両方が伝わる短文を案内します。",
        "販促、特設、共同販売企画に向いた導線です。",
      ),
    },
    home: {
      reasons: [
        { title: "Commercial without flattening", text: "動きの見えやすさを伝えながら、ブランドの空気も残せます。" },
        { title: "Useful for fast buying", text: "比較と判断が速い場でも、主役の魅力が埋もれません。" },
        { title: "Dense, but readable", text: "情報量は多くても、主役と補助がすぐに分かります。" },
      ],
      representativeLook: {
        title: "Look 02 / Lead coat with market clarity",
        summary: "ムードだけでなく、主役と支えるピースの魅力がすぐ伝わる代表ルックです。",
        details: [
          "売場の景色まで自然に思い描ける設計です。",
          "主役と補助の役割を短く説明できます。",
          "売場の会話と誌面の印象を両立しやすいラインです。",
        ],
      },
    },
    collections: [
      {
        id: "resonant-quiet",
        title: "Layered Offer / Capsule 01",
        summary: "空気感を保ちながら、主役と補助の役割が見えやすい基幹ラインです。",
        noteTitle: "Collection note / Layered Offer",
        note: "感覚だけでなく、見はじめの分かりやすさや売場での編集のしやすさまで含めて判断できるように構成しています。",
        selectedPieces: pieces(
          "回遊の起点をつくる主力コート。",
          "セット提案と単品提案の両方を支える核シャツ。",
          "バリエーション提案に厚みを足す可変ボトム。",
        ),
      },
      {
        id: "counterlight",
        title: "Counterlight / practical extension",
        summary: "提案幅を広げるための、明るい補助ラインです。",
        noteTitle: "Collection note / Practical Extension",
        note: "主役カプセルの隣で回遊を生みやすくするための中間色エディットです。",
        selectedPieces: counterlightPieces(
          "最初の提案を開きやすい軽やかなコート。",
          "セット提案の幅を増やすための軽いレイヤー。",
        ),
      },
    ],
    about: {
      intro: "情報量があっても主役の魅力がすっと伝わるラインです。雰囲気とわかりやすさの両方を美しく整えています。",
      story: {
        title: "役割の階層がひと目で見える、整理の効いたスタジオライン。",
        copy: "少量制作の魅力を保ちながら、見せ方は実務的に整えます。主役と支えるピースの役割が見えることで、会話の入口をつくりやすくします。",
        points: [
          "ラインシートは役割ごとに編集して共有します。",
          "press 用にも空気感と要点の両方が伝わる短文を用意します。",
          "仮ビジュアルでも、売場での立ち方を先に確かめます。",
        ],
      },
    },
  },
};
