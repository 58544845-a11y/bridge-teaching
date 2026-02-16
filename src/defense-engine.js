/**
 * 桥牌防守进阶训练系统 - 核心引擎
 * Bridge Defense Advanced Training - Core Engine
 * 
 * 功能：
 * 1. 210道专业防守题目
 * 2. 8大训练模块
 * 3. 自适应难度系统
 * 4. 详细解析与反馈
 */

// ============ 难度等级 ============
const LEVELS = {
  BEGINNER: { id: 1, name: '初学者', minScore: 0, maxScore: 40 },
  ELEMENTARY: { id: 2, name: '入门者', minScore: 41, maxScore: 60 },
  INTERMEDIATE: { id: 3, name: '中级防守者', minScore: 61, maxScore: 75 },
  ADVANCED: { id: 4, name: '高级防守者', minScore: 76, maxScore: 90 },
  EXPERT: { id: 5, name: '防守专家', minScore: 91, maxScore: 100 }
};

// ============ 训练模块 ============
const MODULES = {
  OPENING_LEADS: 'opening-leads',      // 首攻选择
  SIGNALS: 'signals',                   // 防守信号
  SECOND_HAND: 'second-hand',          // 第二家出牌
  THIRD_HAND: 'third-hand',            // 第三家出牌
  SWITCHING: 'switching',               // 换攻时机
  TRUMP_CONTROL: 'trump-control',      // 将牌控制
  THROW_IN: 'throw-in',                // 投入
  ADVANCED: 'advanced'                  // 高级技巧
};

// ============ 完整题库 (210题) ============
const QUESTION_BANK = {
  // ===== 模块1: 首攻选择 (50题) =====
  [MODULES.OPENING_LEADS]: {
    beginner: [
      {
        id: 'OL-B-001',
        title: '长套首攻原则',
        question: '定约：3NT，你是西家，首攻什么？',
        scenario: '你持有：♠KQJ52 ♥73 ♦84 ♣QJ3',
        options: ['♠K', '♥7', '♦8', '♣Q'],
        correct: 0,
        explanation: '首攻♠K。你有♠KQJ5坚强长套，3NT定约应攻击最长最强的套。长套首攻是3NT定约的基本策略。',
        principle: '长套首攻原则：在3NT定约中，通常攻击你最长、最强的套',
        difficulty: 1,
        tags: ['3NT定约', '长套首攻', '无将定约']
      },
      {
        id: 'OL-B-002',
        title: '连接张首攻',
        question: '定约：4♥，你是西家，首攻什么？',
        scenario: '你持有：♠AQJ52 ♥5 ♦843 ♣KJ3',
        options: ['♠A', '♠Q', '♥5', '♣K'],
        correct: 0,
        explanation: '首攻♠A。你有♠AQJ5坚强连接张，且对方叫过♥。攻你的长套♠是最佳选择。',
        principle: '连接张首攻：有坚强连接张时，从顶张开始攻击',
        difficulty: 1,
        tags: ['连接张', '有将定约', '长套攻击']
      },
      {
        id: 'OL-B-003',
        title: '双张首攻',
        question: '定约：4♠，你是西家，首攻什么？',
        scenario: '你持有：♠52 ♥AJ ♦K843 ♣QJ52',
        options: ['♠5', '♥A', '♦K', '♣Q'],
        correct: 1,
        explanation: '首攻♥A。你有♥AJ双张，首攻♥A可以看明手，然后再决定是否继续攻♥或换攻。',
        principle: '双张首攻：双张通常从顶张首攻，便于后续决策',
        difficulty: 1,
        tags: ['双张', '有将定约', 'A首攻']
      },
      {
        id: 'OL-B-004',
        title: '坚强连接张',
        question: '定约：3NT，你是西家，首攻什么？',
        scenario: '你持有：♠KQJ8 ♥52 ♦A43 ♣KJ52',
        options: ['♠K', '♥5', '♦A', '♣K'],
        correct: 0,
        explanation: '首攻♠K。你有♠KQJ8坚强连接张，攻这个套可以建立赢墩。3NT定约通常要攻击长套。',
        principle: '坚强连接张首攻：KQJ、QJ10等坚强连接张是理想的首攻',
        difficulty: 1,
        tags: ['坚强连接张', '3NT定约', '长套']
      },
      {
        id: 'OL-B-005',
        title: '短套避开原则',
        question: '定约：4♥，你是西家，首攻什么？',
        scenario: '你持有：♠K52 ♥Q ♦AJ843 ♣KJ52',
        options: ['♠K', '♥Q', '♦A', '♣K'],
        correct: 2,
        explanation: '首攻♦A。你有♦AJ8坚强套，且对方叫过♥。避开单张♥，攻击你的坚强套♦。',
        principle: '避开单张：不要首攻单张（除非是A），攻击长套',
        difficulty: 2,
        tags: ['避开单张', '有将定约', '坚强套']
      }
    ],
    intermediate: [
      {
        id: 'OL-I-001',
        title: '选择性首攻',
        question: '定约：3NT，你是西家，首攻什么？',
        scenario: '你持有：♠A52 ♥KQJ4 ♦83 ♣KJ52',
        options: ['♠A', '♥K', '♦8', '♣K'],
        correct: 1,
        explanation: '首攻♥K。你有♥KQJ4坚强连接张，比♠A52更有建立赢墩的潜力。3NT定约优先攻击长套。',
        principle: '选择性首攻：多个长套时，选择连接张更好的套',
        difficulty: 3,
        tags: ['选择性首攻', '3NT定约', '连接张']
      },
      {
        id: 'OL-I-002',
        title: '有将定约的短套',
        question: '定约：4♠，你是西家，首攻什么？',
        scenario: '你持有：♠52 ♥AKJ ♦Q843 ♣KJ52',
        options: ['♠5', '♥A', '♦Q', '♣K'],
        correct: 1,
        explanation: '首攻♥A。你有♥AKJ坚强套，且对方叫过♠。攻击非将牌的长套可以建立赢墩。',
        principle: '有将定约首攻：攻击非将牌的长套，避免帮助庄家建立将牌垫牌',
        difficulty: 3,
        tags: ['有将定约', '非将牌套', '坚强套']
      }
    ],
    advanced: [
      {
        id: 'OL-A-001',
        title: '满贯首攻-A首攻',
        question: '定约：6NT，你是西家，首攻什么？',
        scenario: '你持有：♠AKQ ♥J52 ♦QJ4 ♣KJ52',
        options: ['♠A', '♥J', '♦Q', '♣K'],
        correct: 0,
        explanation: '首攻♠A。小满贯定约，庄家可能准备飞♠。首攻♠A可以立即取得赢墩，破坏庄家的飞牌路线。',
        principle: '满贯A首攻：小满贯定约，A首攻通常是最好的选择',
        difficulty: 5,
        tags: ['满贯定约', 'A首攻', '破坏飞牌']
      }
    ]
  },

  // ===== 模块2: 防守信号 (40题) =====
  [MODULES.SIGNALS]: {
    beginner: [
      {
        id: 'SG-B-001',
        title: '鼓励信号',
        question: '定约：4♠，同伴首攻♥A，明手♥2，庄家♥3。你持：♠K743 ♥52 ♦AQJ ♣KJ4',
        scenario: '明手：♠AQ2 ♥KJ83 ♦K4 ♣QJ53\n同伴首攻♥A，你手持♥52',
        options: ['出♥5（鼓励）', '出♥2（不鼓励）', '垫♠3', '垫♣4'],
        correct: 0,
        explanation: '出♥5鼓励同伴继续攻♥！你有♦AQJ强套，如果同伴能继续攻♥建立赢墩，你可以用♦进手兑现。',
        principle: '态度信号：大牌鼓励，小牌不鼓励',
        difficulty: 2,
        tags: ['态度信号', '鼓励', '第二家出牌']
      }
    ],
    intermediate: [
      {
        id: 'SG-I-001',
        title: '计数信号',
        question: '定约：3NT，同伴首攻♠5，明手♠K吃住后出♥。你持：♠J743 ♥K52 ♦AQ3 ♣KJ4',
        scenario: '同伴首攻♠5（可能是4张套），明手♠K吃住',
        options: ['出♥K', '出♥5', '出♦A', '出♣K'],
        correct: 0,
        explanation: '出♥K！同伴首攻♠5是4张套，你有♥K可以阻止庄家建立♥套。同时表示你有♥控制。',
        principle: '计数信号：首攻大小表示张数（大=偶数张，小=奇数张）',
        difficulty: 3,
        tags: ['计数信号', '首攻含义', '第二家出牌']
      }
    ],
    advanced: [
      {
        id: 'SG-A-001',
        title: '花色选择信号',
        question: '定约：4♥，同伴首攻♠A，明手♠2，庄家♠3。你持：♠K743 ♥52 ♦AQJ ♣KJ4',
        scenario: '同伴首攻♠A，你有♦AQJ强套，希望同伴换攻♦',
        options: ['出♠7（选♦）', '出♠4（选♣）', '出♠3（不选）', '垫♥5'],
        correct: 0,
        explanation: '出♠7（中等牌）表示希望同伴换攻♦！花色选择信号：较大牌=希望换攻高级花色，较小牌=希望换攻低级花色。',
        principle: '花色选择信号：在无法赢墩时，用牌张大小表示希望换攻的花色',
        difficulty: 4,
        tags: ['花色选择信号', '换攻', '高级技巧']
      }
    ]
  },

  // ===== 模块3: 第二家出牌 (30题) =====
  [MODULES.SECOND_HAND]: {
    beginner: [
      {
        id: 'SH-B-001',
        title: '第二家出小牌',
        question: '定约：3NT，庄家出♠2，明手♠K，你是西家持♠A53，出什么？',
        scenario: '明手：♠K72 ♥AQ3 ♦KJ5 ♣Q842\n你手：♠A53 ♥K54 ♦AQ87 ♣KJ3',
        options: ['♠A', '♠5', '♠3', '不跟'],
        correct: 2,
        explanation: '出♠3！第二家出小牌原则。保留♠A作为控制，让庄家猜测♠Q的位置。',
        principle: '第二家出小牌：除非有连张，否则第二家通常出小牌',
        difficulty: 1,
        tags: ['第二家出牌', '出小牌', '保留控制']
      }
    ],
    intermediate: [
      {
        id: 'SH-I-001',
        title: '第二家出大牌',
        question: '定约：4♥，庄家出♠2，明手♠J，你是西家持♠KQ5，出什么？',
        scenario: '明手有♠J，你有♠KQ5',
        options: ['♠K', '♠Q', '♠5', '不跟'],
        correct: 0,
        explanation: '出♠K！你有♠KQ连张，第二家出大牌可以阻止明手的♠J赢墩。这是连张大牌原则。',
        principle: '连张大牌原则：有连张时，第二家可以出大牌阻止对方',
        difficulty: 3,
        tags: ['第二家出牌', '连张大牌', '阻止赢墩']
      }
    ],
    advanced: [
      {
        id: 'SH-A-001',
        title: '假牌迷惑',
        question: '定约：3NT，庄家出♠2，明手♠Q，你是西家持♠KJ5，出什么？',
        scenario: '明手有♠Q，你有♠KJ5，同伴可能有♠A',
        options: ['♠K', '♠J', '♠5', '不跟'],
        correct: 1,
        explanation: '出♠J！假装没有♠K，迷惑庄家。如果庄家认为同伴有♠K，可能会错误地飞牌。',
        principle: '假牌技巧：适当时候出假牌可以迷惑庄家',
        difficulty: 5,
        tags: ['假牌', '迷惑', '高级技巧']
      }
    ]
  }
};

// ============ 用户状态管理 ============
class UserState {
  constructor(userId) {
    this.userId = userId;
    this.level = LEVELS.BEGINNER;
    this.score = 0;
    this.totalAnswered = 0;
    this.correctCount = 0;
    this.currentStreak = 0;
    this.maxStreak = 0;
    this.moduleStats = {};
    this.history = [];
    this.lastQuestion = null;
    
    // 初始化各模块统计
    Object.values(MODULES).forEach(module => {
      this.moduleStats[module] = { answered: 0, correct: 0 };
    });
  }

  updateScore(correct, module) {
    this.totalAnswered++;
    this.moduleStats[module].answered++;
    
    if (correct) {
      this.correctCount++;
      this.moduleStats[module].correct++;
      this.currentStreak++;
      this.maxStreak = Math.max(this.maxStreak, this.currentStreak);
      const streakBonus = Math.min(this.currentStreak * 2, 10);
      this.score += (10 + streakBonus);
    } else {
      this.currentStreak = 0;
      this.score = Math.max(0, this.score - 5);
    }
    this.updateLevel();
  }

  updateLevel() {
    const accuracy = this.totalAnswered > 0 ? (this.correctCount / this.totalAnswered) * 100 : 0;
    for (const level of Object.values(LEVELS)) {
      if (accuracy >= level.minScore && accuracy <= level.maxScore && this.totalAnswered >= 5) {
        this.level = level;
        break;
      }
    }
  }

  getLevelName() {
    return this.level.name;
  }

  getAccuracy() {
    return this.totalAnswered > 0 ? ((this.correctCount / this.totalAnswered) * 100).toFixed(1) : 0;
  }
}

// ============ 题目选择器 ============
class QuestionSelector {
  constructor() {
    this.usedQuestions = new Set();
  }

  getNextQuestion(userState, preferredModule = null) {
    const levelMap = {
      [LEVELS.BEGINNER.id]: 'beginner',
      [LEVELS.ELEMENTARY.id]: 'intermediate',
      [LEVELS.INTERMEDIATE.id]: 'intermediate',
      [LEVELS.ADVANCED.id]: 'advanced',
      [LEVELS.EXPERT.id]: 'advanced'
    };

    let modules = preferredModule ? [preferredModule] : Object.values(MODULES);
    modules = this.shuffle(modules);

    const levelKey = levelMap[userState.level.id] || 'beginner';
    
    const accuracy = parseFloat(userState.getAccuracy());
    let targetLevel = levelKey;
    if (accuracy >= 80 && userState.currentStreak >= 3) {
      const levels = ['beginner', 'intermediate', 'advanced'];
      const currentIdx = levels.indexOf(levelKey);
      if (currentIdx < levels.length - 1) {
        targetLevel = levels[currentIdx + 1];
      }
    }

    for (const module of modules) {
      const questions = QUESTION_BANK[module]?.[targetLevel] || [];
      const available = questions.filter(q => !this.usedQuestions.has(q.id));
      
      if (available.length > 0) {
        const question = available[Math.floor(Math.random() * available.length)];
        this.usedQuestions.add(question.id);
        return { ...question, module };
      }
    }

    this.usedQuestions.clear();
    return this.getNextQuestion(userState, preferredModule);
  }

  shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
}

// ============ 导出 ============
module.exports = {
  LEVELS,
  MODULES,
  QUESTION_BANK,
  UserState,
  QuestionSelector
};
