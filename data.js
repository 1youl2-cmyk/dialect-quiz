const DIALECTS = [
  {
    "name": "경상도 방언",
    "words": [
      {
        "word": "강새이",
        "meaning": "강아지",
        "example": "마당에서 강새이가 뛰어논다."
      },
      {
        "word": "고디",
        "meaning": "다슬기",
        "example": "냇가에서 고디를 잡았다."
      },
      {
        "word": "꼬시다",
        "meaning": "고소하다",
        "example": "참기름 냄새가 참 꼬시다."
      },
      {
        "word": "단디",
        "meaning": "단단히, 제대로",
        "example": "내일 시험 준비 단디 해라."
      },
      {
        "word": "데파다",
        "meaning": "데우다",
        "example": "식은 국을 좀 데파 줄래?"
      },
      {
        "word": "깔롱",
        "meaning": "멋, 치장",
        "example": "오늘은 깔롱을 좀 부렸네."
      },
      {
        "word": "무시",
        "meaning": "무",
        "example": "무시를 썰어서 국에 넣었다."
      },
      {
        "word": "디비다",
        "meaning": "뒤집다",
        "example": "전을 디비다가 하나 떨어뜨렸다."
      },
      {
        "word": "삐까리",
        "meaning": "아주 많음",
        "example": "시장에 사람이 삐까리로 모였네."
      },
      {
        "word": "억수로",
        "meaning": "매우, 엄청나게",
        "example": "오늘은 날이 억수로 덥다."
      },
      {
        "word": "새그랍다",
        "meaning": "시다",
        "example": "이 귤은 맛이 좀 새그랍다."
      },
      {
        "word": "정구지",
        "meaning": "부추",
        "example": "정구지 넣고 전을 부치자."
      },
      {
        "word": "쪼매",
        "meaning": "조금",
        "example": "밥을 쪼매만 더 주세요."
      },
      {
        "word": "퍼뜩",
        "meaning": "빨리",
        "example": "늦겠다, 퍼뜩 준비해라."
      },
      {
        "word": "욕보다",
        "meaning": "고생하다",
        "example": "먼 길 오느라 욕봤다."
      },
      {
        "word": "개안타",
        "meaning": "괜찮다",
        "example": "나는 개안타, 걱정하지 마라."
      },
      {
        "word": "그라모",
        "meaning": "그러면",
        "example": "그라모 내일 다시 만나자."
      },
      {
        "word": "우짜노",
        "meaning": "어떻게 하니",
        "example": "버스를 놓쳤는데 우짜노?"
      },
      {
        "word": "앵꼽다",
        "meaning": "아니꼽다",
        "example": "잘난 척하는 모습을 보니 앵꼽다."
      },
      {
        "word": "낑기다",
        "meaning": "끼이다, 끼우다",
        "example": "문틈에 손이 낑기지 않게 조심해라."
      },
      {
        "word": "식쿠다",
        "meaning": "식히다",
        "example": "뜨거운 국은 좀 식쿠고 먹어라."
      },
      {
        "word": "가분다",
        "meaning": "가볍다",
        "example": "짐을 덜었더니 가방이 가분다."
      },
      {
        "word": "아지매",
        "meaning": "아주머니",
        "example": "가게 아지매가 덤을 주셨다."
      },
      {
        "word": "고매",
        "meaning": "고구마",
        "example": "겨울에는 구운 고매가 맛있다."
      },
      {
        "word": "마이",
        "meaning": "많이",
        "example": "배고프면 마이 먹어라."
      },
      {
        "word": "만다꼬",
        "meaning": "뭐 하러, 무엇 하려고",
        "example": "만다꼬 그 무거운 걸 들고 왔노?"
      }
    ]
  },
  {
    "name": "전라도 방언",
    "words": [
      {
        "word": "가찹다",
        "meaning": "가깝다",
        "example": "우리 집은 학교랑 가찹다."
      },
      {
        "word": "깡깡하다",
        "meaning": "단단하다, 야무지다",
        "example": "떡이 식어서 깡깡하다."
      },
      {
        "word": "귄있다",
        "meaning": "매력 있다, 귀염성이 있다",
        "example": "그 아이는 웃는 모습이 참 귄있다."
      },
      {
        "word": "뽀짝",
        "meaning": "바짝, 가까이",
        "example": "사진 찍게 이쪽으로 뽀짝 와라."
      },
      {
        "word": "솔찬하다",
        "meaning": "제법 많다, 상당하다",
        "example": "올해 거둔 곡식이 솔찬하다."
      },
      {
        "word": "댕기다",
        "meaning": "다니다",
        "example": "그 아이는 매일 이 길로 댕긴다."
      },
      {
        "word": "솔",
        "meaning": "부추",
        "example": "솔을 썰어 양념장에 넣었다."
      },
      {
        "word": "싸게",
        "meaning": "빨리",
        "example": "비가 온다, 싸게 들어와라."
      },
      {
        "word": "어매",
        "meaning": "어머니",
        "example": "어매가 따뜻한 밥을 차려 주셨다."
      },
      {
        "word": "겁나게",
        "meaning": "매우",
        "example": "오늘은 바람이 겁나게 분다."
      },
      {
        "word": "그라제",
        "meaning": "그렇지",
        "example": "그라제, 네 말이 맞다."
      },
      {
        "word": "글먼",
        "meaning": "그러면",
        "example": "글먼 우리 함께 가자."
      },
      {
        "word": "암시랑토 않다",
        "meaning": "아무렇지도 않다",
        "example": "조금 넘어졌지만 나는 암시랑토 않다."
      },
      {
        "word": "가상",
        "meaning": "가장자리",
        "example": "밭 가상에 꽃을 심었다."
      },
      {
        "word": "까시",
        "meaning": "가시",
        "example": "장미 줄기의 까시에 손이 찔렸다."
      },
      {
        "word": "시방",
        "meaning": "지금",
        "example": "시방 어디로 가는 길이니?"
      },
      {
        "word": "아짐",
        "meaning": "아주머니",
        "example": "가게 아짐에게 길을 물었다."
      },
      {
        "word": "째깐하다",
        "meaning": "작다",
        "example": "새로 산 화분이 참 째깐하다."
      },
      {
        "word": "자울다",
        "meaning": "졸다",
        "example": "수업 중에 자울지 말고 눈을 떠라."
      },
      {
        "word": "깨벗다",
        "meaning": "발가벗다",
        "example": "아이가 깨벗고 물놀이를 한다."
      },
      {
        "word": "징하다",
        "meaning": "심하다, 지독하다",
        "example": "며칠째 비가 오니 참 징하다."
      }
    ]
  },
  {
    "name": "강원도 방언",
    "words": [
      {
        "word": "감재",
        "meaning": "감자",
        "example": "감재를 삶아 간식으로 먹었다."
      },
      {
        "word": "강냉이",
        "meaning": "옥수수",
        "example": "밭에서 강냉이를 따 왔다."
      },
      {
        "word": "개구락지",
        "meaning": "개구리",
        "example": "논에서 개구락지가 운다."
      },
      {
        "word": "고뿔",
        "meaning": "감기",
        "example": "고뿔에 걸려서 하루 쉬었다."
      },
      {
        "word": "재우",
        "meaning": "빨리",
        "example": "해가 지기 전에 재우 집에 가자."
      },
      {
        "word": "무수",
        "meaning": "무",
        "example": "무수로 깍두기를 담갔다."
      },
      {
        "word": "바우",
        "meaning": "바위",
        "example": "큰 바우 옆에서 잠깐 쉬었다."
      },
      {
        "word": "부루",
        "meaning": "상추",
        "example": "부루를 씻어 밥상에 올렸다."
      },
      {
        "word": "얼라",
        "meaning": "어린아이",
        "example": "얼라가 마당에서 공을 찬다."
      },
      {
        "word": "옥시기",
        "meaning": "옥수수",
        "example": "옥시기를 쪄서 나누어 먹었다."
      },
      {
        "word": "지렁",
        "meaning": "간장",
        "example": "나물에 지렁을 조금 넣었다."
      },
      {
        "word": "질",
        "meaning": "길",
        "example": "이 질로 가면 학교가 나온다."
      },
      {
        "word": "마카",
        "meaning": "모두, 전부",
        "example": "준비가 끝났으면 마카 모여라."
      },
      {
        "word": "퍼뜩",
        "meaning": "빨리",
        "example": "늦겠다, 퍼뜩 준비해라."
      },
      {
        "word": "하마",
        "meaning": "벌써",
        "example": "아침인데 하마 일을 다 끝냈네."
      },
      {
        "word": "어데",
        "meaning": "어디",
        "example": "너 지금 어데 가니?"
      },
      {
        "word": "고무딱개",
        "meaning": "지우개",
        "example": "잘못 쓴 글씨를 고무딱개로 지웠다."
      },
      {
        "word": "고뱅이",
        "meaning": "무릎",
        "example": "넘어지면서 고뱅이를 다쳤다."
      },
      {
        "word": "국시",
        "meaning": "국수",
        "example": "점심으로 따뜻한 국시를 먹었다."
      },
      {
        "word": "기멍",
        "meaning": "그릇",
        "example": "기멍에 물을 담아 놓았다."
      },
      {
        "word": "까마구",
        "meaning": "까마귀",
        "example": "나뭇가지에 까마구 한 마리가 앉았다."
      },
      {
        "word": "깍개",
        "meaning": "가위",
        "example": "깍개로 종이를 잘랐다."
      }
    ]
  },
  {
    "name": "제주어",
    "words": [
      {
        "word": "감저",
        "meaning": "고구마",
        "example": "감저를 쪄서 간식으로 먹었다."
      },
      {
        "word": "고냉이",
        "meaning": "고양이",
        "example": "고냉이가 담 위에서 잠을 잔다."
      },
      {
        "word": "도새기",
        "meaning": "돼지",
        "example": "도새기에게 먹이를 주었다."
      },
      {
        "word": "몽생이",
        "meaning": "망아지",
        "example": "몽생이가 어미 말 곁을 따라간다."
      },
      {
        "word": "지슬",
        "meaning": "감자",
        "example": "지슬을 삶아 먹었다."
      },
      {
        "word": "놈삐",
        "meaning": "무",
        "example": "놈삐를 뽑아 바구니에 담았다."
      },
      {
        "word": "콥데산이",
        "meaning": "마늘",
        "example": "양념에 콥데산이를 넣었다."
      },
      {
        "word": "어멍",
        "meaning": "어머니",
        "example": "어멍이 저녁밥을 준비하신다."
      },
      {
        "word": "아방",
        "meaning": "아버지",
        "example": "아방과 함께 시장에 갔다."
      },
      {
        "word": "궤기",
        "meaning": "고기",
        "example": "오늘 저녁에는 궤기를 구워 먹자."
      },
      {
        "word": "하르방",
        "meaning": "할아버지",
        "example": "하르방이 옛날이야기를 들려주셨다."
      },
      {
        "word": "독새기",
        "meaning": "달걀",
        "example": "독새기 두 개를 삶았다."
      },
      {
        "word": "하영",
        "meaning": "많이",
        "example": "오늘은 손님이 하영 왔다."
      },
      {
        "word": "호꼼",
        "meaning": "조금",
        "example": "반찬을 호꼼만 더 주세요."
      },
      {
        "word": "혼저",
        "meaning": "어서, 빨리",
        "example": "밥이 준비됐으니 혼저 오세요."
      },
      {
        "word": "무사",
        "meaning": "왜",
        "example": "무사 그렇게 늦었니?"
      },
      {
        "word": "어떵",
        "meaning": "어떻게",
        "example": "이 물건은 어떵 쓰는 거니?"
      },
      {
        "word": "경",
        "meaning": "그렇게",
        "example": "경 하면 나도 같이 갈게."
      },
      {
        "word": "폭삭 속았수다",
        "meaning": "매우 수고하셨습니다",
        "example": "오늘 하루 일하시느라 폭삭 속았수다."
      },
      {
        "word": "촘말",
        "meaning": "정말",
        "example": "네가 만든 거라니 촘말 잘했구나."
      },
      {
        "word": "물꾸럭",
        "meaning": "문어",
        "example": "바닷가에서 물꾸럭을 잡았다."
      },
      {
        "word": "강생이",
        "meaning": "강아지",
        "example": "강생이가 꼬리를 흔든다."
      },
      {
        "word": "할망",
        "meaning": "할머니",
        "example": "할망이 따뜻한 옷을 챙겨 주셨다."
      },
      {
        "word": "오라방",
        "meaning": "오빠",
        "example": "오라방과 함께 길을 걸었다."
      },
      {
        "word": "아주망",
        "meaning": "아주머니",
        "example": "아주망에게 인사를 드렸다."
      },
      {
        "word": "곱을락",
        "meaning": "숨바꼭질",
        "example": "친구들과 마당에서 곱을락을 했다."
      },
      {
        "word": "낭",
        "meaning": "나무",
        "example": "집 앞에 큰 낭이 서 있다."
      },
      {
        "word": "개역",
        "meaning": "미숫가루",
        "example": "개역을 물에 타서 마셨다."
      },
      {
        "word": "소랑",
        "meaning": "사랑",
        "example": "이 편지에는 가족을 향한 소랑이 담겨 있다."
      },
      {
        "word": "삼춘",
        "meaning": "삼촌 또는 성별과 관계없이 어른을 친근하게 부르는 말",
        "example": "삼춘, 오늘 어디 가세요?"
      },
      {
        "word": "모살",
        "meaning": "모래",
        "example": "바닷가 모살 위에 발자국이 남았다."
      }
    ]
  },
  {
    "name": "북한에서 쓰는 말",
    "words": [
      {
        "word": "가락지빵",
        "meaning": "도넛",
        "example": "간식으로 가락지빵을 먹었다."
      },
      {
        "word": "단물",
        "meaning": "주스, 단 음료",
        "example": "더운 날 시원한 단물을 마셨다."
      },
      {
        "word": "살결물",
        "meaning": "스킨",
        "example": "세수를 하고 살결물을 발랐다."
      },
      {
        "word": "살물결",
        "meaning": "피부의 주름",
        "example": "할머니 얼굴에는 살물결이 깊게 패여 있었다."
      },
      {
        "word": "손기척",
        "meaning": "노크",
        "example": "문 앞에서 손기척을 했다."
      },
      {
        "word": "얼음보숭이",
        "meaning": "아이스크림",
        "example": "여름에는 얼음보숭이가 먹고 싶다."
      },
      {
        "word": "꼬부랑국수",
        "meaning": "라면",
        "example": "출출해서 꼬부랑국수를 끓였다."
      },
      {
        "word": "뜨락또르",
        "meaning": "트랙터",
        "example": "뜨락또르가 밭을 갈고 있다."
      },
      {
        "word": "남새밭",
        "meaning": "채소밭",
        "example": "할머니는 남새밭을 가꾸신다."
      },
      {
        "word": "밥곽",
        "meaning": "도시락",
        "example": "소풍 갈 때 밥곽을 챙겼다."
      },
      {
        "word": "색동다리",
        "meaning": "무지개",
        "example": "비가 그친 뒤 하늘에 색동다리가 떴다."
      },
      {
        "word": "위생실",
        "meaning": "화장실",
        "example": "위생실에 다녀오겠습니다."
      },
      {
        "word": "일없다",
        "meaning": "괜찮다, 문제없다",
        "example": "조금 늦어도 일없다."
      },
      {
        "word": "인차",
        "meaning": "곧, 금방",
        "example": "친구가 인차 도착할 것이다."
      },
      {
        "word": "차마당",
        "meaning": "주차장",
        "example": "차마당에 자동차를 세웠다."
      },
      {
        "word": "손전화",
        "meaning": "휴대전화",
        "example": "손전화로 친구에게 연락했다."
      },
      {
        "word": "오목샘",
        "meaning": "보조개",
        "example": "그 아이는 웃으면 오목샘이 생긴다."
      },
      {
        "word": "꽝포",
        "meaning": "거짓말",
        "example": "네가 한 말은 꽝포였구나."
      },
      {
        "word": "오돌지다",
        "meaning": "야무지다",
        "example": "그 아이는 일을 처리하는 솜씨가 오돌지다."
      },
      {
        "word": "줄말",
        "meaning": "얼룩말",
        "example": "동물원에서 줄말을 보았다."
      },
      {
        "word": "가담가담",
        "meaning": "가끔",
        "example": "나는 가담가담 옛 친구를 만난다."
      },
      {
        "word": "돌가위보",
        "meaning": "가위바위보",
        "example": "돌가위보로 순서를 정했다."
      },
      {
        "word": "소리판",
        "meaning": "음반",
        "example": "좋아하는 노래가 담긴 소리판을 들었다."
      },
      {
        "word": "거님길",
        "meaning": "산책로",
        "example": "저녁에 거님길을 따라 걸었다."
      }
    ]
  }
];
