const DIALECTS = [
  {
    "name": "경상도 방언",
    "words": [
      {
        "word": "강새이",
        "meaning": "강아지"
      },
      {
        "word": "고디",
        "meaning": "다슬기"
      },
      {
        "word": "꼬시다",
        "meaning": "고소하다"
      },
      {
        "word": "단디",
        "meaning": "단단히, 제대로"
      },
      {
        "word": "데파다",
        "meaning": "데우다"
      },
      {
        "word": "깔롱",
        "meaning": "멋, 치장"
      },
      {
        "word": "무시",
        "meaning": "무"
      },
      {
        "word": "디비다",
        "meaning": "뒤집다"
      },
      {
        "word": "삐까리",
        "meaning": "아주 많음"
      },
      {
        "word": "억수로",
        "meaning": "매우, 엄청나게"
      },
      {
        "word": "새그랍다",
        "meaning": "시다"
      },
      {
        "word": "정구지",
        "meaning": "부추"
      },
      {
        "word": "쪼매",
        "meaning": "조금"
      },
      {
        "word": "퍼뜩",
        "meaning": "빨리"
      },
      {
        "word": "욕보다",
        "meaning": "고생하다"
      },
      {
        "word": "개안타",
        "meaning": "괜찮다"
      },
      {
        "word": "그라모",
        "meaning": "그러면"
      },
      {
        "word": "우짜노",
        "meaning": "어떻게 하니"
      }
    ]
  },
  {
    "name": "전라도 방언",
    "words": [
      {
        "word": "가찹다",
        "meaning": "가깝다"
      },
      {
        "word": "깡깡하다",
        "meaning": "단단하다, 야무지다"
      },
      {
        "word": "귄있다",
        "meaning": "매력 있다, 귀염성이 있다"
      },
      {
        "word": "뽀짝",
        "meaning": "바짝, 가까이"
      },
      {
        "word": "솔찬하다",
        "meaning": "제법 많다, 상당하다"
      },
      {
        "word": "댕기다",
        "meaning": "다니다"
      },
      {
        "word": "솔",
        "meaning": "부추"
      },
      {
        "word": "싸게",
        "meaning": "빨리"
      },
      {
        "word": "어매",
        "meaning": "어머니"
      },
      {
        "word": "겁나게",
        "meaning": "매우"
      },
      {
        "word": "그라제",
        "meaning": "그렇지"
      },
      {
        "word": "글먼",
        "meaning": "그러면"
      },
      {
        "word": "암시랑토 않다",
        "meaning": "아무렇지도 않다"
      }
    ]
  },
  {
    "name": "강원도 방언",
    "words": [
      {
        "word": "감재",
        "meaning": "감자"
      },
      {
        "word": "강냉이",
        "meaning": "옥수수"
      },
      {
        "word": "개구락지",
        "meaning": "개구리"
      },
      {
        "word": "고뿔",
        "meaning": "감기"
      },
      {
        "word": "재우",
        "meaning": "빨리"
      },
      {
        "word": "무수",
        "meaning": "무"
      },
      {
        "word": "바우",
        "meaning": "바위"
      },
      {
        "word": "부루",
        "meaning": "상추"
      },
      {
        "word": "얼라",
        "meaning": "어린아이"
      },
      {
        "word": "옥시기",
        "meaning": "옥수수"
      },
      {
        "word": "지렁",
        "meaning": "간장"
      },
      {
        "word": "질",
        "meaning": "길"
      },
      {
        "word": "마카",
        "meaning": "모두, 전부"
      },
      {
        "word": "퍼뜩",
        "meaning": "빨리"
      },
      {
        "word": "하마",
        "meaning": "벌써"
      },
      {
        "word": "어데",
        "meaning": "어디"
      }
    ]
  },
  {
    "name": "제주어",
    "words": [
      {
        "word": "감저",
        "meaning": "고구마"
      },
      {
        "word": "고냉이",
        "meaning": "고양이"
      },
      {
        "word": "도새기",
        "meaning": "돼지"
      },
      {
        "word": "몽생이",
        "meaning": "망아지"
      },
      {
        "word": "지슬",
        "meaning": "감자"
      },
      {
        "word": "놈삐",
        "meaning": "무"
      },
      {
        "word": "콥데산이",
        "meaning": "마늘"
      },
      {
        "word": "어멍",
        "meaning": "어머니"
      },
      {
        "word": "아방",
        "meaning": "아버지"
      },
      {
        "word": "궤기",
        "meaning": "고기"
      },
      {
        "word": "하르방",
        "meaning": "할아버지"
      },
      {
        "word": "독새기",
        "meaning": "달걀"
      },
      {
        "word": "하영",
        "meaning": "많이"
      },
      {
        "word": "호꼼",
        "meaning": "조금"
      },
      {
        "word": "혼저",
        "meaning": "어서, 빨리"
      },
      {
        "word": "무사",
        "meaning": "왜"
      },
      {
        "word": "어떵",
        "meaning": "어떻게"
      },
      {
        "word": "경",
        "meaning": "그렇게"
      },
      {
        "word": "폭삭 속았수다",
        "meaning": "매우 수고하셨습니다"
      },
      {
        "word": "촘말",
        "meaning": "정말"
      },
      {
        "word": "물꾸럭",
        "meaning": "문어"
      }
    ]
  },
  {
    "name": "북한에서 쓰는 말",
    "words": [
      {
        "word": "가락지빵",
        "meaning": "도넛"
      },
      {
        "word": "단물",
        "meaning": "주스, 단 음료"
      },
      {
        "word": "살결물",
        "meaning": "스킨"
      },
      {
        "word": "살물결",
        "meaning": "피부의 주름"
      },
      {
        "word": "손기척",
        "meaning": "노크"
      },
      {
        "word": "얼음보숭이",
        "meaning": "아이스크림"
      },
      {
        "word": "꼬부랑국수",
        "meaning": "라면"
      },
      {
        "word": "뜨락또르",
        "meaning": "트랙터"
      },
      {
        "word": "남새밭",
        "meaning": "채소밭"
      },
      {
        "word": "밥곽",
        "meaning": "도시락"
      },
      {
        "word": "색동다리",
        "meaning": "무지개"
      },
      {
        "word": "위생실",
        "meaning": "화장실"
      },
      {
        "word": "일없다",
        "meaning": "괜찮다, 문제없다"
      },
      {
        "word": "인차",
        "meaning": "곧, 금방"
      },
      {
        "word": "차마당",
        "meaning": "주차장"
      },
      {
        "word": "손전화",
        "meaning": "휴대전화"
      }
    ]
  }
];
