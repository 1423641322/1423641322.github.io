// 日常更新主要修改此文件中的文字与数据；个人信息和联系方式在 index.html 中。
window.resumeData = {
  courses: [
    { name: '系统生物学', score: '98' },
    { name: '智能诊断原理及技术', score: '95.2' },
    { name: '生物医学统计', score: '95.2' },
    { name: '生物化学', score: '92.4' },
    { name: '分子生物学', score: '90.6' },
    { name: '大学外语', score: '95' },
    { name: '微积分 E(1)', score: '90' }
  ],
  research: [
    { title: '机器学习辅助材料设计', description: '参与面向纳米酶性能预测的建模流程与数据分析。', tag: 'MACHINE LEARNING' },
    { title: '纳米酶制备及性质测定', description: '负责纳米酶合成与酶动力学、抗氧化活性等性能表征。', tag: 'NANOZYME CHARACTERIZATION' },
    { title: '水凝胶治疗体系', description: '围绕水凝胶伤口治疗与口腔溃疡治疗，参与材料构建、疾病模型与治疗效果的实验及数据整理。', tag: 'HYDROGEL THERAPEUTICS' }
  ],
  projects: [
    {
      type: '国家级大学生创新创业训练计划项目', date: '2025.10 — 2026.10', role: '项目负责人',
      title: '机器学习辅助的水凝胶基纳米酶构建及其抗氧化性能研究',
      summary: '面向口腔溃疡中“氧化应激失衡 + 药物滞留差”的临床痛点，主导构建机器学习与材料制备结合的数据驱动研发流程。',
      tags: ['随机森林', 'SHAP', 'CeO₂', '抗氧化活性'],
      details: [
        { title: '数据与模型', text: '基于 PubMed 文献构建标准化数据集，建立随机森林回归模型预测纳米酶动力学参数 Km、Vmax 与 Kcat；结合 SHAP 特征重要性分析，识别金属种类、粒径、比表面积等关键因素，通过逆向设计筛选出预测活性突出的 Ce 基纳米酶。' },
        { title: '材料与验证', text: '制备 CeO₂ 纳米酶并完成 TEM、EDS、FRAP 等系统表征。验证其具有类过氧化氢酶活性（Lineweaver–Burk R² = 0.9998，Km = 14.455）与类超氧化物歧化酶活性（IC50 = 102.65 g/L），抗氧化能力约为 MnO₂ 的 6 倍；CCK-8 显示细胞活力 > 80%。' },
        { title: '后续规划', text: '规划大鼠口腔溃疡模型的体内验证，以及“数据—模型—实验”的闭环迭代。' }
      ],
      art: 'nanozyme', artLabel: 'CeO₂ 纳米酶的概念示意，非实验图像',
      visualTitle: 'CeO₂', visualSubtitle: 'DATA → MODEL → EXPERIMENT', visualNote: '纳米酶 · 水凝胶 · 抗氧化'
    },
    {
      type: '第十届全国大学生生物医学工程创新设计竞赛', date: '2025.05', role: '项目负责人',
      title: 'pH 响应型黏膜粘附胃溃疡修复体系',
      summary: '围绕甲基壳聚糖 / 海藻酸钠双网络水凝胶，参与构建 pH 响应、黏膜粘附与药物缓释相结合的胃溃疡修复体系。',
      tags: ['双网络水凝胶', '奥美拉唑', 'NIR-II', 'One-way ANOVA'],
      details: [
        { title: '设计与制备', text: '参与 pH 响应型双网络水凝胶的设计与制备，负载奥美拉唑，实现胃酸环境下稳定、胃黏膜中性环境缓释。' },
        { title: '评价与分析', text: '参与溶血、CCK-8 细胞毒性等生物相容性评价，以及 C57 小鼠急性胃溃疡模型构建与 NIR-II 活体成像疗效监测；协助完成多配方筛选与 One-way ANOVA 统计分析。' }
      ],
      art: 'hydrogel', artLabel: '双网络水凝胶的概念示意，非实验图像',
      visualTitle: 'pH', visualSubtitle: 'RESPONSIVE DOUBLE NETWORK', visualNote: '黏膜粘附 · 稳定负载 · 缓释'
    }
  ],
  skills: [
    { title: 'Python 与机器学习', description: '独立开发机器学习辅助纳米酶设计软件，集成随机森林活性预测、SHAP 特征重要性分析与逆向设计筛选。相关代码已发布至 GitHub。' },
    { title: '纳米酶与性能表征', description: '纳米酶合成、材料表征、酶动力学与抗氧化活性评价，掌握纳米酶合成与全套性能测试方法。' },
    { title: '疾病模型与治疗评价', description: '小鼠全层伤口模型与口腔溃疡模型构建及治疗评价；具备相关实验与数据整理经验。' }
  ],
  awards: [
    { date: '2025 年秋季', title: '人民奖学金单项奖', institution: '哈尔滨工业大学' },
    { date: '2024 年秋季', title: '人民奖学金二等奖', institution: '哈尔滨工业大学' }
  ]
};
