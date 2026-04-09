export type Language = 'ar' | 'en';

interface TranslationStrings {
  // Header
  home: string;
  about: string;
  services: string;
  solutions: string;
  whyUs: string;
  testimonials: string;
  contact: string;
  langSwitch: string;

  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;

  // About
  aboutTag: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutStat1Value: string;
  aboutStat1Label: string;
  aboutStat2Value: string;
  aboutStat2Label: string;
  aboutStat3Value: string;
  aboutStat3Label: string;

  // Services
  servicesTag: string;
  servicesTitle: string;
  servicesSubtitle: string;
  service1Title: string;
  service1Desc: string;
  service2Title: string;
  service2Desc: string;
  service3Title: string;
  service3Desc: string;
  service4Title: string;
  service4Desc: string;
  service5Title: string;
  service5Desc: string;

  // Problems & Solutions
  problemsTag: string;
  problemsTitle: string;
  problemsSubtitle: string;
  problemsSectionTitle: string;
  problem1: string;
  problem2: string;
  problem3: string;
  solutionsSectionTitle: string;
  solution1: string;
  solution2: string;
  solution3: string;

  // Why Choose Us
  whyTag: string;
  whyTitle: string;
  whySubtitle: string;
  why1Title: string;
  why1Desc: string;
  why2Title: string;
  why2Desc: string;
  why3Title: string;
  why3Desc: string;
  why4Title: string;
  why4Desc: string;

  // Testimonials
  testimonialsTag: string;
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  testimonial1Quote: string;
  testimonial1Name: string;
  testimonial1Role: string;
  testimonial2Quote: string;
  testimonial2Name: string;
  testimonial2Role: string;
  testimonial3Quote: string;
  testimonial3Name: string;
  testimonial3Role: string;

  // CTA
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;

  // Contact
  contactTag: string;
  contactTitle: string;
  contactSubtitle: string;
  contactName: string;
  contactCompany: string;
  contactPhone: string;
  contactEmail: string;
  contactMessage: string;
  contactButton: string;
  contactInfoTitle: string;
  contactInfoDesc: string;
  contactLocation: string;
  contactLocationValue: string;
  contactPhoneLabel: string;
  contactPhoneValue: string;
  contactEmailLabel: string;
  contactEmailValue: string;
  contactSuccess: string;
  contactError: string;

  // Footer
  footerDescription: string;
  footerQuickLinks: string;
  footerServices: string;
  footerContact: string;
  footerRights: string;
  footerPolicy: string;
  footerTerms: string;

  // WhatsApp
  whatsappTooltip: string;
}

const translations: Record<Language, TranslationStrings> = {
  ar: {
    // Header
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدماتنا',
    solutions: 'الحلول',
    whyUs: 'لماذا نحن',
    testimonials: 'آراء العملاء',
    contact: 'تواصل معنا',
    langSwitch: 'EN',

    // Hero
    heroTitle: 'طوّر نظام شركتك الإداري بثقة واحترافية',
    heroSubtitle:
      'نساعد الشركات في تحقيق الامتثال القانوني والكفاءة التشغيلية والنمو المستدام من خلال استشارات موارد بشرية متخصصة وبرامج تدريب عملية',
    heroCta: 'احجز استشارة مجانية',

    // About
    aboutTag: 'من نحن',
    aboutTitle: 'شريكك الموثوق في تطوير الأنظمة الإدارية',
    aboutDescription:
      'منذ تأسيسنا عام ٢٠١٥، نقدم حلولاً متكاملة في استشارات الموارد البشرية والتدريب المؤسسي. نركز على بناء أنظمة إدارية قوية تضمن الامتثال القانوني وتحسن الأداء المؤسسي وتدفع عجلة النمو.',
    aboutStat1Value: '+٩',
    aboutStat1Label: 'سنوات خبرة',
    aboutStat2Value: '+٢٠٠',
    aboutStat2Label: 'شركة عميلة',
    aboutStat3Value: '+٥٠٠',
    aboutStat3Label: 'برنامج تدريبي',

    // Services
    servicesTag: 'خدماتنا',
    servicesTitle: 'حلول متكاملة لتطوير أعمالك',
    servicesSubtitle: 'نقدم باقة شاملة من الخدمات المصممة خصيصاً لتلبية احتياجات شركتك',
    service1Title: 'استشارات الموارد البشرية',
    service1Desc:
      'بناء أنظمة موارد بشرية فعالة تحسن أداء فريقك وتزيد الإنتاجية مع الحفاظ على بيئة عمل محفزة',
    service2Title: 'قانون العمل والامتثال',
    service2Desc:
      'ضمان التزام شركتك الكامل بالتشريعات العمالية المصرية وتجنب المخاطر القانونية والغرامات',
    service3Title: 'برامج التدريب',
    service3Desc:
      'برامج تدريبية عملية ومخصصة تأخذ فريقك من المعرفة النظرية إلى التطبيق الفعلي في بيئة العمل',
    service4Title: 'الحوكمة المؤسسية',
    service4Desc:
      'تأسيس هياكل حوكمة قوية توضح الأدوار والمسؤوليات وتضمن الشفافية والكفاءة في اتخاذ القرارات',
    service5Title: 'برامج بناء الفرق',
    service5Desc:
      'ورش عمل تفاعلية تقوي الروابط بين أعضاء الفريق وتعزز التعاون والإبداع وتحسن التواصل الداخلي',

    // Problems & Solutions
    problemsTag: 'الحلول',
    problemsTitle: 'مشاكل حقيقية تحتاج حلولاً حقيقية',
    problemsSubtitle:
      'هل تواجه هذه التحديات في شركتك؟ نحن هنا لمساعدتك في التغلب عليها',
    problemsSectionTitle: 'تحديات شائعة تواجه الشركات',
    problem1: 'مشاكل في تطبيق قانون العمل والتشريعات العمالية',
    problem2: 'أخطاء متكررة في الرواتب والتأمينات والحقوق القانونية',
    problem3: 'ضعف الأداء الإداري وغياب الهيكل التنظيمي الواضح',
    solutionsSectionTitle: 'حلولنا تضمن لك النتائج',
    solution1: 'نظام إداري متكامل يغطي جميع جوانب الموارد البشرية',
    solution2: 'التزام قانوني كامل مع تحديثات مستمرة للتشريعات',
    solution3: 'تحسين ملموس في الأداء والإنتاجية بمنهجية مثبتة',

    // Why Choose Us
    whyTag: 'لماذا نحن',
    whyTitle: 'ما يميزنا عن غيرنا',
    whySubtitle: 'نحن لا نقدم نظريات - نقدم نتائج ملموسة تُحدث فرقاً حقيقياً في أعمالك',
    why1Title: 'تدريب عملي وليس نظري',
    why1Desc:
      'جميع برامجنا تعتمد على التطبيق العملي والسيناريوهات الحقيقية من بيئة الأعمال المصرية',
    why2Title: 'خبرة عملية حقيقية',
    why2Desc:
      'فريقنا يضم خبراء عملوا في كبرى الشركات المصرية والعربية ويفهمون تحديات السوق المحلي',
    why3Title: 'حلول مخصصة وليس جاهزة',
    why3Desc:
      'نصمم كل حل بناءً على احتياجات شركتك المحددة وأهدافها الاستراتيجية وحجم عملياتها',
    why4Title: 'منهجية مثبتة النتائج',
    why4Desc:
      'نستخدم منهجيات عالمية معدّلة لتتناسب مع السوق المصري مع ضمان نتائج قابلة للقياس',

    // Testimonials
    testimonialsTag: 'آراء العملاء',
    testimonialsTitle: 'ماذا يقول عملاؤنا عنّا',
    testimonialsSubtitle:
      'ثقة مئات الشركات في مصر والمنطقة العربية تعكس جودة خدماتنا ونتائجنا الملموسة',
    testimonial1Quote:
      'ساعدتنا MindHR في إعادة هيكلة قسم الموارد البشرية بالكامل. النتائج كانت واضحة خلال أول ٣ أشهر - انخفاض ملحوظ في المشاكل العمالية وتحسين كبير في الأداء.',
    testimonial1Name: 'أحمد محمود',
    testimonial1Role: 'مدير الموارد البشرية - شركة النيل للتكنولوجيا',
    testimonial2Quote:
      'برامج التدريب التي قدمتها MindHR كانت مختلفة تماماً. الفريق استطاع تطبيق ما تعلمه مباشرة في العمل، وهذا ما مكّننا من تحسين إنتاجيتنا بنسبة ٣٥٪.',
    testimonial2Name: 'سارة حسن',
    testimonial2Role: 'المدير التنفيذي - مجموعة الإبداع',
    testimonial3Quote:
      'بفضل MindHR، أصبحنا ملتزمين تماماً بقانون العمل المصري وتجنبنا غرامات كانت تكلفنا ملايين سنوياً. الاستثمار معهم كان من أفضل القرارات التي اتخذناها.',
    testimonial3Name: 'محمد عبد الرحمن',
    testimonial3Role: 'مالك - شركة البناء الحديث',

    // CTA
    ctaTitle: 'ابدأ الآن وطور شركتك بدون مخاطر',
    ctaSubtitle:
      'احصل على استشارة مجانية مع خبرائنا واكتشف كيف يمكننا مساعدتك في بناء نظام إداري أقوى',
    ctaButton: 'احجز استشارتك المجانية',

    // Contact
    contactTag: 'تواصل معنا',
    contactTitle: 'دعنا نساعدك في تحقيق أهدافك',
    contactSubtitle:
      'أرسل لنا بياناتك وسيتواصل معك أحد خبرائنا خلال ٢٤ ساعة',
    contactName: 'الاسم الكامل',
    contactCompany: 'اسم الشركة',
    contactPhone: 'رقم الهاتف',
    contactEmail: 'البريد الإلكتروني',
    contactMessage: 'رسالتك (اختياري)',
    contactButton: 'أرسل طلب الاستشارة',
    contactInfoTitle: 'تواصل مباشر',
    contactInfoDesc: 'يمكنك التواصل معنا مباشرة عبر أي من القنوات التالية',
    contactLocation: 'الموقع',
    contactLocationValue: 'القاهرة، مصر',
    contactPhoneLabel: 'الهاتف',
    contactPhoneValue: '+20 100 123 4567',
    contactEmailLabel: 'البريد الإلكتروني',
    contactEmailValue: 'info@mindhr.com',
    contactSuccess: 'تم إرسال طلبك بنجاح! سيتواصل معك فريقنا قريباً',
    contactError: 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.',

    // Footer
    footerDescription:
      'شركة متخصصة في استشارات الموارد البشرية والتدريب المؤسسي. نساعد الشركات في تحقيق الامتثال وتحسين الأداء منذ ٢٠١٥.',
    footerQuickLinks: 'روابط سريعة',
    footerServices: 'خدماتنا',
    footerContact: 'تواصل',
    footerRights: 'جميع الحقوق محفوظة',
    footerPolicy: 'سياسة الخصوصية',
    footerTerms: 'الشروط والأحكام',

    // WhatsApp
    whatsappTooltip: 'تواصل عبر واتساب',
  },

  en: {
    // Header
    home: 'Home',
    about: 'About',
    services: 'Services',
    solutions: 'Solutions',
    whyUs: 'Why Us',
    testimonials: 'Testimonials',
    contact: 'Contact',
    langSwitch: 'عربي',

    // Hero
    heroTitle: 'Transform Your Management Systems with Confidence',
    heroSubtitle:
      'We help businesses achieve legal compliance, operational efficiency, and sustainable growth through specialized HR consulting and practical training programs',
    heroCta: 'Book Free Consultation',

    // About
    aboutTag: 'About Us',
    aboutTitle: 'Your Trusted Partner in Management Development',
    aboutDescription:
      'Since 2015, we have been delivering integrated solutions in HR consulting and corporate training. We focus on building strong management systems that ensure legal compliance, improve organizational performance, and drive growth.',
    aboutStat1Value: '+9',
    aboutStat1Label: 'Years of Experience',
    aboutStat2Value: '+200',
    aboutStat2Label: 'Client Companies',
    aboutStat3Value: '+500',
    aboutStat3Label: 'Training Programs',

    // Services
    servicesTag: 'Our Services',
    servicesTitle: 'Comprehensive Solutions for Your Business Growth',
    servicesSubtitle:
      'We offer a complete suite of services tailored to meet your company\'s unique needs',
    service1Title: 'HR Consulting',
    service1Desc:
      'Build effective HR systems that improve your team\'s performance and boost productivity while maintaining a motivating work environment',
    service2Title: 'Labor Law & Compliance',
    service2Desc:
      'Ensure your company\'s full compliance with Egyptian labor regulations and avoid legal risks and penalties',
    service3Title: 'Training Programs',
    service3Desc:
      'Practical, customized training programs that take your team from theoretical knowledge to real-world application',
    service4Title: 'Corporate Governance',
    service4Desc:
      'Establish strong governance structures that clarify roles and responsibilities while ensuring transparency and efficiency',
    service5Title: 'Team Building Programs',
    service5Desc:
      'Interactive workshops that strengthen team bonds, enhance collaboration and creativity, and improve internal communication',

    // Problems & Solutions
    problemsTag: 'Solutions',
    problemsTitle: 'Real Problems Need Real Solutions',
    problemsSubtitle:
      'Are you facing these challenges in your company? We\'re here to help you overcome them',
    problemsSectionTitle: 'Common Challenges Companies Face',
    problem1: 'Struggling to implement labor law and employment regulations',
    problem2: 'Recurring errors in payroll, insurance, and legal rights management',
    problem3: 'Weak administrative performance and lack of clear organizational structure',
    solutionsSectionTitle: 'Our Solutions Guarantee Results',
    solution1: 'Integrated management system covering all aspects of human resources',
    solution2: 'Full legal compliance with continuous legislative updates',
    solution3: 'Measurable improvement in performance and productivity with proven methodology',

    // Why Choose Us
    whyTag: 'Why Us',
    whyTitle: 'What Sets Us Apart',
    whySubtitle:
      'We don\'t offer theories - we deliver tangible results that make a real difference in your business',
    why1Title: 'Practical, Not Theoretical Training',
    why1Desc:
      'All our programs rely on hands-on application and real-world scenarios from the Egyptian business environment',
    why2Title: 'Real Business Experience',
    why2Desc:
      'Our team includes experts who have worked in major Egyptian and Arab companies and understand local market challenges',
    why3Title: 'Customized, Not Ready-Made Solutions',
    why3Desc:
      'We design every solution based on your company\'s specific needs, strategic goals, and operational scale',
    why4Title: 'Proven Methodology',
    why4Desc:
      'We use global methodologies adapted for the Egyptian market with guaranteed measurable results',

    // Testimonials
    testimonialsTag: 'Testimonials',
    testimonialsTitle: 'What Our Clients Say About Us',
    testimonialsSubtitle:
      'The trust of hundreds of companies in Egypt and the Arab region reflects the quality of our services and tangible results',
    testimonial1Quote:
      'MindHR helped us completely restructure our HR department. The results were clear within the first 3 months - a noticeable decrease in labor issues and significant performance improvement.',
    testimonial1Name: 'Ahmed Mahmoud',
    testimonial1Role: 'HR Director - Nile Technology',
    testimonial2Quote:
      'The training programs provided by MindHR were completely different. The team was able to apply what they learned directly at work, which enabled us to improve productivity by 35%.',
    testimonial2Name: 'Sarah Hassan',
    testimonial2Role: 'CEO - Al Ibdaa Group',
    testimonial3Quote:
      'Thanks to MindHR, we became fully compliant with Egyptian labor law and avoided fines that were costing us millions annually. Investing with them was one of the best decisions we made.',
    testimonial3Name: 'Mohamed Abdel Rahman',
    testimonial3Role: 'Owner - Modern Construction',

    // CTA
    ctaTitle: 'Start Now and Transform Your Business Risk-Free',
    ctaSubtitle:
      'Get a free consultation with our experts and discover how we can help you build a stronger management system',
    ctaButton: 'Book Your Free Consultation',

    // Contact
    contactTag: 'Contact Us',
    contactTitle: 'Let Us Help You Achieve Your Goals',
    contactSubtitle:
      'Send us your details and one of our experts will contact you within 24 hours',
    contactName: 'Full Name',
    contactCompany: 'Company Name',
    contactPhone: 'Phone Number',
    contactEmail: 'Email Address',
    contactMessage: 'Your Message (optional)',
    contactButton: 'Send Consultation Request',
    contactInfoTitle: 'Direct Contact',
    contactInfoDesc:
      'You can reach us directly through any of the following channels',
    contactLocation: 'Location',
    contactLocationValue: 'Cairo, Egypt',
    contactPhoneLabel: 'Phone',
    contactPhoneValue: '+20 100 123 4567',
    contactEmailLabel: 'Email',
    contactEmailValue: 'info@mindhr.com',
    contactSuccess:
      'Your request has been sent successfully! Our team will contact you soon',
    contactError:
      'An error occurred while sending. Please try again.',

    // Footer
    footerDescription:
      'A specialized company in HR consulting and corporate training. We help companies achieve compliance and improve performance since 2015.',
    footerQuickLinks: 'Quick Links',
    footerServices: 'Services',
    footerContact: 'Contact',
    footerRights: 'All rights reserved',
    footerPolicy: 'Privacy Policy',
    footerTerms: 'Terms & Conditions',

    // WhatsApp
    whatsappTooltip: 'Chat on WhatsApp',
  },
};

export function getTranslation(lang: Language): TranslationStrings {
  return translations[lang];
}
