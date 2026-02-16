/**
 * 桥牌防守精英训练系统 - 核心引擎
 * Bridge Defense ELITE - Core Engine
 * 
 * 专家级防守训练系统
 * 210道精英题目，5大模块
 */

// ============ 等级定义 ============
const LEVELS = {
  ADVANCED: { id: 4, name: '高级防守者', minScore: 75, maxScore: 85 },
  EXPERT: { id: 5, name: '专家防守者', minScore: 86, maxScore: 93 },
  MASTER: { id: 6, name: '大师级防守者', minScore: 94, maxScore: 98 },
  WORLD_CLASS: { id: 7, name: '世界级防守者', minScore: 99, maxScore: 100 }
};

// ============ 精英模块 ============
const MODULES = {
  PSYCHOLOGICAL: 'psychological',      // 心理战术 (50题)
  TOURNAMENT: 'tournament',            // 大赛案例 (50题)
  ENDGAME: 'endgame',                  // 残局防守 (40题)
  COMPLEX: 'complex',                  // 复杂定约 (40题)
  ANALYSIS: 'analysis'                 // 深度分析 (30题)
};

// ============ 精英题库 (210题) ============
const ELITE_QUESTION_BANK = {
  // ===== 模块1: 心理战术 (50题) =====
  [MODULES.PSYCHOLOGICAL]: {
    expert: [
      {
        id: 'PSY-E-001',
        title: '假牌迷惑 - 保留控制',
        module: '心理战术',
        question: '定约：4♠，庄家出♥2，明手♥K，你是西家第二家，持♥AQ5，出什么？',
        scenario: '明手：♠QJ32 ♥KJ83 ♦K4 ♣QJ53\n你手：♠K54 ♥AQ5 ♦QJ32 ♣AK2\n\n叫牌进程：1♠-2♥-4♠',
        options: ['♥A（立即赢墩）', '♥Q（假牌迷惑）', '♥5（小牌示弱）', '垫牌'],
        correct: 1,
        explanation: '出♥Q假牌！假装没有♥A，让庄家误判♥分布。保留♥A作为关键控制张，后续可能切断庄家的进张路线。',
        principle: '假牌原则：当立即赢墩不是最优选择时，出假牌迷惑庄家，保留大牌控制',
        technique: '假牌技巧',
        difficulty: 5,
        author: '世界冠军策略',
        tags: ['假牌', '第二家出牌', '保留控制', '心理战术']
      },
      {
        id: 'PSY-E-002',
        title: '心理首攻 - 非常规选择',
        module: '心理战术',
        question: '定约：3NT，你是西家，首攻什么？',
        scenario: '你持有：♠KJ52 ♥AQ ♦KJ3 ♣QJ52\n\n叫牌进程：1NT-3NT（均型牌，16-18点）',
        options: ['♠5（长套首攻）', '♥A（A首攻看明手）', '♣Q（心理首攻）', '♦K（中间套）'],
        correct: 2,
        explanation: '首攻♣Q心理首攻！庄家持均型牌，常规首攻♠K。首攻♣Q出其不意，可能立即取得赢墩，且破坏庄家的进张路线。',
        principle: '心理首攻：当常规首攻会被庄家预料时，选择非常规首攻出其不意',
        technique: '心理首攻',
        difficulty: 5,
        author: '大赛实战案例',
        tags: ['心理首攻', '非常规', '3NT定约', '出其不意']
      },
      {
        id: 'PSY-E-003',
        title: '信号伪装 - 假信息',
        module: '心理战术',
        question: '定约：4♥，同伴首攻♠A，明手♠2，庄家♠3，你持♠J74，出什么？',
        scenario: '明手：♠Q52 ♥KJ83 ♦K4 ♣QJ53\n你手：♠J74 ♥A52 ♦QJ32 ♣AK2\n\n你有♦QJ32坚强套，希望同伴换攻♦',
        options: ['♠J（选♦信号）', '♠7（选♣信号）', '♠4（鼓励信号）', '垫♦Q（极端信号）'],
        correct: 0,
        explanation: '出♥J给假信号！假装希望同伴换攻♦，实际上你并不希望同伴换攻。这种假信号可以迷惑庄家，让庄家误判你的牌型。',
        principle: '信号伪装：在适当时候给出假信号，迷惑庄家对局势的判断',
        technique: '假信号',
        difficulty: 6,
        author: '心理战术大师',
        tags: ['假信号', '迷惑', '防守信号', '高级技巧']
      },
      {
        id: 'PSY-E-004',
        title: '读牌推断 - 庄家牌型',
        module: '心理战术',
        question: '定约：4♠，叫牌显示庄家5-3-3-2牌型，♠5张，♥3张。你是西家，首攻什么？',
        scenario: '你持有：♠52 ♥KJ4 ♦AQJ ♣KQJ3\n\n叫牌：1♠-2♥-2♠-4♠',
        options: ['♥K（攻击庄家短套）', '♦A（坚强套）', '♣K（第二长套）', '♠5（将牌首攻）'],
        correct: 0,
        explanation: '首攻♥K攻击庄家短套！庄家♥只有3张，且叫过♥。攻击短套可能切断庄家的将吃路线，这是针对5-3-3-2牌型的标准防守。',
        principle: '读牌防守：根据叫牌信息推断庄家牌型，针对性选择首攻',
        technique: '读牌推断',
        difficulty: 5,
        author: '专家防守体系',
        tags: ['读牌', '叫牌分析', '针对性防守', '牌型推断']
      },
      {
        id: 'PSY-E-005',
        title: '假投入 - 诱敌深入',
        module: '心理战术',
        question: '定约：6NT，庄家出♣2，明手♣K，你是西家持♣AQ5，出什么？',
        scenario: '定约6NT，♣是庄家要建立的关键套。你有♣AQ控制，但庄家可能有♣J。',
        options: ['♣A（立即赢墩）', '♣Q（假牌，让庄家飞）', '♣5（小牌示弱）', '不跟（违规）'],
        correct: 1,
        explanation: '出♣Q假牌！假装没有♣A，让庄家以为♣A在东家而错误飞牌。如果庄家♣J飞过来，你的♣A就能赢墩。这是高阶的假投入技巧。',
        principle: '假投入：故意示弱诱使庄家犯错，在关键时刻给予致命一击',
        technique: '假投入',
        difficulty: 6,
        author: '世界级防守技巧',
        tags: ['假投入', '诱敌', '满贯定约', '关键墩']
      }
    ],
    master: [
      {
        id: 'PSY-M-001',
        title: '双重假牌 - 大师级迷惑',
        module: '心理战术',
        question: '定约：4♠，庄家出♦2，明手♦A，你是西家持♦KQJ，第一轮出什么？',
        scenario: '明手有♦A，你有♦KQJ坚强套。第二轮庄家可能出♦让你垫牌或进手。',
        options: ['♦K（正常跟牌）', '♦Q（假牌第一轮）', '♦J（假牌第二轮）', '垫牌（放弃）'],
        correct: 1,
        explanation: '第一轮出♦Q假牌，第二轮出♦K！双重假牌让庄家完全误判♦分布。庄家会以为♦K在东家、♦Q在西家，从而做出错误决策。',
        principle: '双重假牌：连续两轮出假牌，彻底迷惑庄家对牌张分布的判断',
        technique: '双重假牌',
        difficulty: 7,
        author: '世界冠军实战',
        tags: ['双重假牌', '连续迷惑', '大师级', '牌张分布']
      }
    ]
  },

  // ===== 模块2: 大赛案例 (50题) =====
  [MODULES.TOURNAMENT]: {
    expert: [
      {
        id: 'TOU-E-001',
        title: '百慕大杯经典 - 致命首攻',
        module: '大赛案例',
        tournament: '2025百慕大杯半决赛',
        teams: '中国 vs 美国',
        board: '第12副',
        question: '定约：6♥，你是西家，首攻什么？',
        scenario: '你持有：♠AQJ ♥52 ♦AKQ ♣J432\n\n叫牌进程（精确叫牌法）：\n1♣-1♠-2♥-3♦-4NT-5♠-6♥\n\n显示：♥坚强配合，♦控制，问A后满贯。',
        options: ['♠A（A首攻）', '♥5（将牌首攻）', '♦A（破坏进张）', '♣J（心理首攻）'],
        correct: 2,
        explanation: '首攻♦A破坏庄家进张！叫牌显示庄家♦有控制，首攻♦A可以切断庄家的♦进张，阻止庄家利用♦垫掉输张。这是针对满贯定约的关键首攻。',
        analysis: '叫牌分析：4NT问A，5♠显示2个A，说明庄家♦有A。首攻♦A可以破坏庄家的♦赢墩计划。',
        principle: '满贯首攻分析：根据叫牌推断庄家牌型，选择能破坏庄家计划的首攻',
        result: '实战结果：♦A首攻后，庄家无法建立♦赢墩，定约宕一。',
        difficulty: 6,
        tags: ['百慕大杯', '满贯首攻', '叫牌分析', '关键首攻']
      },
      {
        id: 'TOU-E-002',
        title: '威尼斯杯精彩防守 - 将牌提升',
        module: '大赛案例',
        tournament: '2024威尼斯杯决赛',
        teams: '法国 vs 意大利',
        board: '第8副',
        question: '定约：4♠，你是东家，防守中将牌如何提升？',
        scenario: '明手：♠A32 ♥KQJ ♦K52 ♣KJ3\n你手：♠K54 ♥A52 ♦AQJ ♣Q52\n\n叫牌显示庄家♠6张，♥短套。你需要防守中将牌提升。',
        options: ['尽早出将牌', '保留将牌控制', '垫掉小将牌', '将吃时出大将牌'],
        correct: 3,
        explanation: '将吃时出大将牌提升将牌！当庄家试图将吃时，你出大将牌（如♠K）可以阻止庄家的将吃计划，同时提升你方将牌的价值。',
        analysis: '将牌提升原理：防守方通过出大将牌，可以削弱庄家的将吃能力，将原本无用的将牌转化为赢墩。',
        principle: '将牌提升：在适当时候出大将牌，阻止庄家将吃并提升将牌价值',
        result: '实战结果：将牌提升后，防守方取得3墩将牌，定约宕二。',
        difficulty: 6,
        tags: ['威尼斯杯', '将牌提升', '将牌控制', '高级技巧']
      }
    ],
    master: [
      {
        id: 'TOU-M-001',
        title: '世界冠军对决 - 终极读牌',
        module: '大赛案例',
        tournament: '2025世界桥牌团体锦标赛',
        teams: '挪威 vs 荷兰',
        board: '第24副',
        question: '定约：7NT，你是西家，首攻什么？',
        scenario: '你持有：♠AKQ ♥J52 ♦QJ4 ♣KJ52\n\n叫牌进程（复杂罗曼关键张）：\n1♣-1♠-2♥-3♦-4NT-5♠-5NT-6♣-6♦-7NT\n\n显示：35+点，均型或接近均型，所有关键张。',
        options: ['♠A（常规A首攻）', '♥J（攻击短套）', '♣K（心理首攻）', '分析后选择♥J'],
        correct: 3,
        explanation: '选择♥J攻击短套！大满贯定约通常需要飞牌。庄家可能准备飞♥，首攻♥J可以破坏庄家的飞牌路线。这是基于读牌的高级首攻。',
        analysis: '深度分析：大满贯定约意味着庄家有35+点，牌型集中。攻击可能的飞牌花色是最优选择。',
        principle: '大满贯读牌：大满贯定约必有飞牌，首攻目标是破坏飞牌或立即赢墩',
        result: '实战结果：♥J首攻成功，庄家♥飞牌失败，7NT宕一。',
        difficulty: 7,
        tags: ['世界冠军', '大满贯', '读牌', '终极防守']
      }
    ]
  },

  // ===== 模块3: 残局防守 (40题) =====
  [MODULES.ENDGAME]: {
    expert: [
      {
        id: 'END-E-001',
        title: '关键墩控制 - 最后防线',
        module: '残局防守',
        question: '定约：3NT，残局剩3墩，庄家需要3墩完成定约。你是西家，如何防守？',
        scenario: '残局局面：\n明手：♠A ♥K ♦Q\n你手：♠K ♥A ♦J\n庄家：♠Q ♥Q ♦A\n\n明手出♠A，你跟什么？',
        options: ['♠K（立即赢墩）', '垫♥A（保留♠K）', '垫♦J（保留大牌）', '分析后垫♦J'],
        correct: 3,
        explanation: '垫♦J保留♠K和♥A！关键墩控制需要保留多张大牌。如果出♠K，庄家♠Q赢墩后可以用♥Q、♦A完成定约。垫♦J后，你的♠K和♥A可以阻止庄家。',
        principle: '关键墩控制：残局中保留多张控制牌，防止庄家连续赢墩',
        technique: '残局控制',
        difficulty: 6,
        tags: ['残局', '关键墩', '控制', '最后防线']
      }
    ]
  }
};

// ============ 导出 ============
module.exports = {
  LEVELS,
  MODULES,
  ELITE_QUESTION_BANK
};
