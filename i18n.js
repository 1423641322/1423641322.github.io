// 界面翻译与英文简历；中文科研资料在 resume-data.js 中维护。
window.resumeI18n = {
  zh: {
    title: '聂荣添｜个人主页',
    description: '聂荣添的个人主页。哈尔滨工业大学生物信息学本科在读，研究兴趣包括机器学习辅助材料设计、纳米酶与水凝胶治疗体系。',
    skip: '跳转到正文', backTop: '返回顶部', mainNav: '主导航',
    navEducation: '教育', navResearch: '科研', navProjects: '项目', navSkills: '技能', navContact: '联系',
    affiliation: '哈尔滨工业大学 · 生物信息学', hello: '你好，我是', name: '聂荣添', namePunctuation: '。',
    heroRole: '生物信息学本科生 / 本科生科研助理',
    heroIntro: '关注机器学习与生物材料的交叉研究，参与纳米酶性能预测、材料制备与水凝胶治疗体系的实验探索。',
    viewProjects: '查看科研项目', downloadDocx: '下载简历 DOCX ↓',
    heroArt: '研究方向装饰图：机器学习、纳米酶与水凝胶',
    educationHeading: '教育背景', university: '哈尔滨工业大学', major: '生物信息学 · 本科在读',
    aboutIntro: '在生物信息学的学习基础上，结合 Python 建模与生物材料实验，探索“数据—模型—实验”的研究路径。',
    languages: '英语水平：CET-4、CET-6 均已通过；雅思 6.5，各单项高于 6.0。',
    rank: '专业排名', ielts: '雅思成绩', coursesHeading: '核心课程', researchHeading: '科研经历',
    researchDate: '2024.09 — 至今', researchGroup: '刘绍琴课题组', researchRole: '本科生科研助理',
    projectsHeading: '竞赛与项目', skillsHeading: '专业技能', awardsHeading: '荣誉奖项',
    details: '研究过程与结果', contactHello: '欢迎交流', contactIdeas: '研究与想法。',
    phone: '电话：18800492025', download: '下载简历 ↓', print: '打印 / 保存 PDF',
    backTopLink: '回到顶部 ↑', themeLight: '切换浅色模式', themeDark: '切换深色模式'
  },
  en: {
    title: 'Nie Rongtian | Personal Homepage',
    description: 'Personal homepage of Nie Rongtian, a bioinformatics undergraduate at Harbin Institute of Technology, exploring machine learning-assisted materials design, nanozymes and hydrogel therapeutics.',
    skip: 'Skip to content', backTop: 'Back to top', mainNav: 'Main navigation',
    navEducation: 'Education', navResearch: 'Research', navProjects: 'Projects', navSkills: 'Skills', navContact: 'Contact',
    affiliation: 'Harbin Institute of Technology · Bioinformatics', hello: "Hello, I’m", name: 'Nie Rongtian', namePunctuation: '.',
    heroRole: 'Bioinformatics Undergraduate / Undergraduate Research Assistant',
    heroIntro: 'Exploring the intersection of machine learning and biomaterials through nanozyme activity prediction, materials synthesis and experimental research on hydrogel therapeutics.',
    viewProjects: 'Explore research', downloadDocx: 'Download CV (Chinese) ↓',
    heroArt: 'Decorative illustration of machine learning, nanozymes and hydrogels',
    educationHeading: 'Education', university: 'Harbin Institute of Technology', major: 'BSc in Bioinformatics · In progress',
    aboutIntro: 'Building on my bioinformatics studies, I combine Python modeling with biomaterials experiments to explore a data–model–experiment research workflow.',
    languages: 'English: CET-4 and CET-6 passed; IELTS 6.5, with every component above 6.0.',
    rank: 'Class rank', ielts: 'IELTS', coursesHeading: 'Selected coursework', researchHeading: 'Research experience',
    researchDate: 'Sep 2024 — Present', researchGroup: 'Shaoqin Liu Research Group', researchRole: 'Undergraduate Research Assistant',
    projectsHeading: 'Projects & competitions', skillsHeading: 'Technical skills', awardsHeading: 'Honors & awards',
    details: 'Methods & results', contactHello: 'Let’s exchange', contactIdeas: 'research & ideas.',
    phone: 'Phone: +86 18800492025', download: 'Download CV (Chinese) ↓', print: 'Print / Save PDF',
    backTopLink: 'Back to top ↑', themeLight: 'Switch to light mode', themeDark: 'Switch to dark mode'
  }
};

window.resumeDataEn = {
  ...window.resumeData,
  courses: [
    { name: 'Systems Biology', score: '98' },
    { name: 'Principles & Techniques of Intelligent Diagnosis', score: '95.2' },
    { name: 'Biomedical Statistics', score: '95.2' },
    { name: 'Biochemistry', score: '92.4' },
    { name: 'Molecular Biology', score: '90.6' },
    { name: 'College English', score: '95' },
    { name: 'Calculus E (1)', score: '90' }
  ],
  research: [
    { title: 'Machine learning-assisted materials design', description: 'Participate in modeling workflows and data analysis for predicting nanozyme performance.', tag: 'MACHINE LEARNING' },
    { title: 'Nanozyme synthesis & characterization', description: 'Responsible for nanozyme synthesis and the characterization of enzyme kinetics, antioxidant activity and related properties.', tag: 'NANOZYME CHARACTERIZATION' },
    { title: 'Hydrogel therapeutics', description: 'Contribute to materials development, disease-model experiments, treatment evaluation and data organization for hydrogel-based wound healing and oral ulcer treatment.', tag: 'HYDROGEL THERAPEUTICS' }
  ],
  projects: [
    {
      ...window.resumeData.projects[0],
      type: 'National Undergraduate Innovation and Entrepreneurship Training Program', date: 'Oct 2025 — Oct 2026', role: 'Project Lead',
      title: 'Machine learning-assisted development of hydrogel-based nanozymes and their antioxidant properties',
      summary: 'Addressing oxidative stress imbalance and poor drug retention in oral ulcers, I led a data-driven research workflow combining machine learning and materials synthesis.',
      tags: ['Random forest', 'SHAP', 'CeO₂', 'Antioxidant activity'],
      details: [
        { title: 'Data & modeling', text: 'Built a standardized dataset from PubMed literature and trained random forest regression models to predict nanozyme kinetic parameters (Km, Vmax and Kcat). Used SHAP feature importance to identify key factors, including metal type, particle size and specific surface area, then applied inverse design to select Ce-based nanozymes with particularly high predicted activity.' },
        { title: 'Materials & validation', text: 'Synthesized CeO₂ nanozymes and performed characterization using TEM, EDS and FRAP. Verified catalase-like activity (Lineweaver–Burk R² = 0.9998, Km = 14.455) and superoxide dismutase-like activity (IC50 = 102.65 g/L). Antioxidant capacity was approximately six times that of MnO₂, while CCK-8 assays showed cell viability > 80%.' },
        { title: 'Planned next steps', text: 'Plan in vivo validation using a rat oral ulcer model and further iteration of the data–model–experiment feedback loop.' }
      ],
      artLabel: 'Conceptual illustration of CeO₂ nanozymes, not an experimental image',
      visualNote: 'NANOZYME · HYDROGEL · ANTIOXIDANT'
    },
    {
      ...window.resumeData.projects[1],
      type: '10th National Undergraduate Biomedical Engineering Innovation Design Competition', date: 'May 2025', role: 'Project Lead',
      title: 'A pH-responsive mucoadhesive system for gastric ulcer repair',
      summary: 'Contributed to a methyl chitosan / sodium alginate double-network hydrogel system combining pH responsiveness, mucoadhesion and sustained drug release for gastric ulcer repair.',
      tags: ['Double-network hydrogel', 'Omeprazole', 'NIR-II', 'One-way ANOVA'],
      details: [
        { title: 'Design & synthesis', text: 'Participated in the design and preparation of pH-responsive double-network hydrogels loaded with omeprazole, enabling stability under gastric acid conditions and sustained release in the neutral gastric mucosal environment.' },
        { title: 'Evaluation & analysis', text: 'Contributed to biocompatibility testing, including hemolysis and CCK-8 cytotoxicity assays, the establishment of an acute gastric ulcer model in C57 mice, and treatment monitoring using NIR-II in vivo imaging. Assisted with formulation screening and one-way ANOVA.' }
      ],
      artLabel: 'Conceptual illustration of a double-network hydrogel, not an experimental image',
      visualNote: 'MUCOADHESION · STABILITY · SUSTAINED RELEASE'
    }
  ],
  skills: [
    { title: 'Python & machine learning', description: 'Independently developed software for machine learning-assisted nanozyme design, integrating random forest activity prediction, SHAP feature importance analysis and inverse-design screening. Related code has been published on GitHub.' },
    { title: 'Nanozymes & characterization', description: 'Nanozyme synthesis, materials characterization, enzyme kinetics and antioxidant activity evaluation, covering the full workflow from preparation to performance testing.' },
    { title: 'Disease models & treatment evaluation', description: 'Establishment of mouse full-thickness wound and oral ulcer models, treatment evaluation, related experimental work and data organization.' }
  ],
  awards: [
    { date: 'Autumn 2025', title: 'People’s Scholarship · Special Award', institution: 'Harbin Institute of Technology' },
    { date: 'Autumn 2024', title: 'People’s Scholarship · Second Prize', institution: 'Harbin Institute of Technology' }
  ]
};
