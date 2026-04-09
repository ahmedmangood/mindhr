'use client';

import { useEffect, useCallback, useState, useSyncExternalStore } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/store/language';
import { getTranslation } from '@/lib/translations';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/landing/scroll-reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Users,
  Scale,
  GraduationCap,
  Building2,
  Puzzle,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  XCircle,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  ArrowLeft,
  Star,
  Quote,
  Send,
  Target,
  TrendingUp,
  Award,
  Sparkles,
} from 'lucide-react';

// ============================================
// HEADER COMPONENT
// ============================================
function Header() {
  const { language, toggleLanguage, isRTL } = useLanguage();
  const t = getTranslation(language);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.home, href: '#hero' },
    { label: t.about, href: '#about' },
    { label: t.services, href: '#services' },
    { label: t.solutions, href: '#solutions' },
    { label: t.whyUs, href: '#why-us' },
    { label: t.testimonials, href: '#testimonials' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg shadow-mindhr-purple/5'
          : 'bg-gradient-to-b from-black/30 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 shrink-0">
            <img
              src="/mindhrlogo.png"
              alt="MindHR Logo"
              width={140}
              height={48}
              className="h-10 md:h-12 w-auto brightness-0 invert"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-muted/50 ${
                  scrolled
                    ? 'text-muted-foreground hover:text-foreground'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className={`hidden sm:flex gap-1 text-xs font-bold transition-all ${
                scrolled
                  ? 'border-mindhr-purple/30 hover:bg-mindhr-purple/10 hover:border-mindhr-purple/50 text-foreground'
                  : 'border-white/30 hover:bg-white/10 hover:border-white/50 text-white'
              }`}
            >
              {t.langSwitch}
            </Button>
            <a
              href="#contact"
              className="hidden sm:inline-flex"
            >
              <Button
                size="sm"
                className="bg-gradient-to-r from-mindhr-purple to-mindhr-blue hover:opacity-90 text-white shadow-lg shadow-mindhr-purple/25 transition-all hover:shadow-xl hover:shadow-mindhr-purple/30"
              >
                {t.heroCta}
                {!isRTL ? (
                  <ArrowRight className="ms-2 h-4 w-4" />
                ) : (
                  <ArrowLeft className="ms-2 h-4 w-4" />
                )}
              </Button>
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border/50"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 mt-2 pt-2 border-t border-border/50">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    toggleLanguage();
                    setMobileOpen(false);
                  }}
                  className="flex-1 text-xs font-bold"
                >
                  {t.langSwitch}
                </Button>
                <a href="#contact" className="flex-1" onClick={() => setMobileOpen(false)}>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-mindhr-purple to-mindhr-blue text-white"
                  >
                    {t.heroCta}
                  </Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  const { language, isRTL } = useLanguage();
  const t = getTranslation(language);
  const Chevron = isRTL ? ChevronLeft : ChevronRight;
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover animate-kenburns"
          aria-hidden="true"
        />
      </div>

      {/* Rich gradient overlay */}
      <div className="absolute inset-0 hero-gradient-overlay" />

      {/* Secondary subtle animated gradient */}
      <div className="absolute inset-0 animated-gradient opacity-[0.15]" />

      {/* Light streaks sweeping across */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -start-[10%] w-[40%] h-32 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-light-streak" />
        <div className="absolute top-3/5 -start-[10%] w-[30%] h-20 bg-gradient-to-r from-transparent via-white/8 to-transparent animate-light-streak-delayed" />
      </div>

      {/* Floating luminous particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] start-[10%] w-2 h-2 bg-white/30 rounded-full animate-particle-1" />
        <div className="absolute top-[25%] start-[70%] w-3 h-3 bg-white/20 rounded-full animate-particle-2" />
        <div className="absolute top-[60%] start-[20%] w-1.5 h-1.5 bg-white/40 rounded-full animate-particle-3" />
        <div className="absolute top-[45%] start-[85%] w-2.5 h-2.5 bg-white/25 rounded-full animate-particle-4" />
        <div className="absolute top-[75%] start-[50%] w-2 h-2 bg-white/30 rounded-full animate-particle-5" />
        <div className="absolute top-[10%] start-[45%] w-1 h-1 bg-white/50 rounded-full animate-particle-3" />
        <div className="absolute top-[80%] start-[80%] w-3 h-3 bg-white/15 rounded-full animate-particle-1" />
        <div className="absolute top-[35%] start-[5%] w-1.5 h-1.5 bg-white/35 rounded-full animate-particle-4" />
      </div>

      {/* Soft glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] end-[10%] w-64 sm:w-96 h-64 sm:h-96 bg-mindhr-purple/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[20%] start-[5%] w-48 sm:w-80 h-48 sm:h-80 bg-mindhr-blue/20 rounded-full blur-[80px] animate-float-delayed" />
      </div>

      {/* Decorative geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hidden sm:block absolute top-[15%] start-[8%] w-24 h-24 border border-white/8 rounded-2xl animate-rotate-slow" />
        <div className="hidden sm:block absolute bottom-[25%] end-[12%] w-20 h-20 border border-white/8 rounded-full animate-move-diagonal" />
        <div className="hidden md:block absolute top-[50%] start-[50%] w-32 h-32 border border-white/5 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glass Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full hero-glass mb-8"
          >
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span className="text-sm font-medium text-white/90">
              {language === 'ar'
                ? 'استشارات موارد بشرية منذ ٢٠١٥'
                : 'HR Consulting Since 2015'}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 hero-text-shadow"
          >
            <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">
              {t.heroTitle}
            </span>
          </motion.h1>

          {/* Decorative accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {t.heroSubtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="bg-white text-mindhr-purple-dark hover:bg-white/90 shadow-2xl shadow-black/20 transition-all text-base px-8 py-6 font-bold animate-glow-pulse"
              >
                {t.heroCta}
                <Arrow className="ms-2 h-5 w-5" />
              </Button>
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 hover:bg-white/10 hover:border-white/50 text-white text-base px-8 py-6 transition-all"
              >
                {t.services}
                <Chevron className="ms-1 h-4 w-4" />
              </Button>
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8"
          >
            {[
              { icon: CheckCircle2, text: language === 'ar' ? 'استشارة مجانية' : 'Free Consultation' },
              { icon: CheckCircle2, text: language === 'ar' ? '+٢٠٠ شركة عميلة' : '+200 Client Companies' },
              { icon: CheckCircle2, text: language === 'ar' ? 'نتائج مضمونة' : 'Guaranteed Results' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <item.icon className="h-4 w-4 text-emerald-300" />
                </div>
                <span className="text-sm text-white/75 font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave with gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="30%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,1)" />
            </linearGradient>
          </defs>
          <path
            d="M0 60L60 52C120 44 240 28 360 24C480 20 600 28 720 36C840 44 960 52 1080 52C1200 52 1320 44 1380 40L1440 36V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="url(#wave-gradient)"
          />
        </svg>
      </div>
    </section>
  );
}

// ============================================
// ABOUT SECTION
// ============================================
function AboutSection() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const stats = [
    { value: t.aboutStat1Value, label: t.aboutStat1Label, icon: Award },
    { value: t.aboutStat2Value, label: t.aboutStat2Label, icon: Building2 },
    { value: t.aboutStat3Value, label: t.aboutStat3Label, icon: GraduationCap },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 end-0 w-48 sm:w-96 h-48 sm:h-96 bg-mindhr-purple/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-mindhr-purple/10 text-mindhr-purple text-sm font-semibold mb-4">
            {t.aboutTag}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t.aboutTitle}</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction={language === 'ar' ? 'right' : 'left'}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-mindhr-purple/20 to-mindhr-blue/20 rounded-2xl transform rotate-3" />
              <div className="relative bg-white rounded-2xl p-8 shadow-xl shadow-mindhr-purple/5 border border-border/50">
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  {t.aboutDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    language === 'ar' ? 'استشارات متخصصة' : 'Specialized Consulting',
                    language === 'ar' ? 'تدريب عملي' : 'Practical Training',
                    language === 'ar' ? 'حوكمة مؤسسية' : 'Corporate Governance',
                    language === 'ar' ? 'امتثال قانوني' : 'Legal Compliance',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-mindhr-purple/10 to-mindhr-blue/10 text-mindhr-purple"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <StaggerItem key={stat.label}>
                  <div className="flex items-center gap-4 p-5 rounded-xl bg-white border border-border/50 hover:border-mindhr-purple/20 hover:shadow-lg hover:shadow-mindhr-purple/5 transition-all duration-300 group">
                    <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-mindhr-purple/10 to-mindhr-blue/10 flex items-center justify-center group-hover:from-mindhr-purple/20 group-hover:to-mindhr-blue/20 transition-all">
                      <Icon className="h-7 w-7 text-mindhr-purple" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SERVICES SECTION
// ============================================
function ServicesSection() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const services = [
    {
      icon: Users,
      title: t.service1Title,
      desc: t.service1Desc,
      color: 'from-mindhr-purple to-mindhr-purple-light',
    },
    {
      icon: Scale,
      title: t.service2Title,
      desc: t.service2Desc,
      color: 'from-mindhr-blue to-mindhr-blue-light',
    },
    {
      icon: GraduationCap,
      title: t.service3Title,
      desc: t.service3Desc,
      color: 'from-mindhr-purple to-mindhr-blue',
    },
    {
      icon: Building2,
      title: t.service4Title,
      desc: t.service4Desc,
      color: 'from-mindhr-blue-dark to-mindhr-purple',
    },
    {
      icon: Puzzle,
      title: t.service5Title,
      desc: t.service5Desc,
      color: 'from-mindhr-purple-light to-mindhr-blue-light',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-muted/30 relative">
      <div className="absolute bottom-0 start-0 w-48 sm:w-96 h-48 sm:h-96 bg-mindhr-blue/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-mindhr-blue/10 text-mindhr-blue text-sm font-semibold mb-4">
            {t.servicesTag}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t.servicesTitle}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.servicesSubtitle}
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-2xl p-6 md:p-8 border border-border/50 hover:border-mindhr-purple/20 shadow-sm hover:shadow-xl hover:shadow-mindhr-purple/10 transition-all duration-300 h-full"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-mindhr-purple transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-mindhr-purple to-mindhr-blue rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ============================================
// PROBLEMS & SOLUTIONS SECTION
// ============================================
function SolutionsSection() {
  const { language, isRTL } = useLanguage();
  const t = getTranslation(language);
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const problems = [t.problem1, t.problem2, t.problem3];
  const solutions = [t.solution1, t.solution2, t.solution3];

  return (
    <section id="solutions" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-mindhr-purple/10 text-mindhr-purple text-sm font-semibold mb-4">
            {t.problemsTag}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t.problemsTitle}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.problemsSubtitle}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Problems */}
          <ScrollReveal direction={language === 'ar' ? 'right' : 'left'}>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-red-100 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                  <XCircle className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-red-600">{t.problemsSectionTitle}</h3>
              </div>
              <div className="space-y-4">
                {problems.map((problem, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-50/50 border border-red-100">
                    <XCircle className="h-5 w-5 text-red-400 mt-0.5 shrink-0" />
                    <span className="text-foreground/80 text-sm">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Solutions */}
          <ScrollReveal direction={language === 'ar' ? 'left' : 'right'}>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-green-100 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-600">{t.solutionsSectionTitle}</h3>
              </div>
              <div className="space-y-4">
                {solutions.map((solution, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-green-50/50 border border-green-100">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-foreground/80 text-sm">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Transition arrow */}
        <ScrollReveal className="flex justify-center mt-8">
          <a href="#contact">
            <Button
              variant="outline"
              className="border-mindhr-purple/20 hover:bg-mindhr-purple/5 hover:border-mindhr-purple/40 gap-2"
            >
              {language === 'ar' ? 'احصل على الحل الآن' : 'Get The Solution Now'}
              <Arrow className="h-4 w-4" />
            </Button>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ============================================
// WHY CHOOSE US SECTION
// ============================================
function WhyUsSection() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const reasons = [
    {
      icon: Target,
      title: t.why1Title,
      desc: t.why1Desc,
      gradient: 'from-mindhr-purple/10 to-mindhr-blue/10',
      iconBg: 'bg-mindhr-purple',
    },
    {
      icon: TrendingUp,
      title: t.why2Title,
      desc: t.why2Desc,
      gradient: 'from-mindhr-blue/10 to-mindhr-purple/10',
      iconBg: 'bg-mindhr-blue',
    },
    {
      icon: Puzzle,
      title: t.why3Title,
      desc: t.why3Desc,
      gradient: 'from-mindhr-purple-light/10 to-mindhr-purple/10',
      iconBg: 'bg-mindhr-purple-light',
    },
    {
      icon: Award,
      title: t.why4Title,
      desc: t.why4Desc,
      gradient: 'from-mindhr-blue-light/10 to-mindhr-blue/10',
      iconBg: 'bg-mindhr-blue-light',
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-br from-mindhr-purple/5 to-mindhr-blue/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-mindhr-purple/10 text-mindhr-purple text-sm font-semibold mb-4">
            {t.whyTag}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t.whyTitle}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.whySubtitle}
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6" staggerDelay={0.15}>
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <StaggerItem key={reason.title}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`group bg-gradient-to-br ${reason.gradient} rounded-2xl p-6 md:p-8 border border-border/50 hover:border-mindhr-purple/20 hover:shadow-lg hover:shadow-mindhr-purple/5 transition-all duration-300 h-full`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${reason.iconBg} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ============================================
// TESTIMONIALS SECTION
// ============================================
function TestimonialsSection() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const testimonials = [
    {
      quote: t.testimonial1Quote,
      name: t.testimonial1Name,
      role: t.testimonial1Role,
    },
    {
      quote: t.testimonial2Quote,
      name: t.testimonial2Name,
      role: t.testimonial2Role,
    },
    {
      quote: t.testimonial3Quote,
      name: t.testimonial3Name,
      role: t.testimonial3Role,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-mindhr-blue/10 text-mindhr-blue text-sm font-semibold mb-4">
            {t.testimonialsTag}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t.testimonialsTitle}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.testimonialsSubtitle}
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {testimonials.map((testimonial, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm hover:shadow-lg hover:shadow-mindhr-purple/5 transition-all duration-300 h-full flex flex-col"
              >
                <Quote className="h-10 w-10 text-mindhr-purple/20 mb-4" />
                <p className="text-foreground/80 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mindhr-purple to-mindhr-blue flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                  <div className="ms-auto flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ============================================
// CTA SECTION
// ============================================
function CtaSection() {
  const { language, isRTL } = useLanguage();
  const t = getTranslation(language);
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-95" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hidden sm:block absolute top-10 start-10 w-32 h-32 border border-white/10 rounded-full animate-float" />
        <div className="hidden sm:block absolute bottom-10 end-20 w-24 h-24 border border-white/10 rounded-xl animate-float-delayed" />
        <div className="absolute top-1/2 start-1/3 w-16 h-16 bg-white/5 rounded-full animate-float-slow" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10">
            {t.ctaSubtitle}
          </p>
          <a href="#contact">
            <Button
              size="lg"
              className="bg-white text-mindhr-purple hover:bg-white/90 shadow-2xl shadow-black/20 transition-all hover:scale-[1.02] text-base px-8 py-6 font-bold"
            >
              {t.ctaButton}
              <Arrow className="ms-2 h-5 w-5" />
            </Button>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ============================================
// CONTACT SECTION
// ============================================
function ContactSection() {
  const { language, isRTL } = useLanguage();
  const t = getTranslation(language);
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          toast({ title: t.contactSuccess, variant: 'default' });
          setFormData({ name: '', company: '', phone: '', email: '', message: '' });
        } else {
          toast({ title: t.contactError, variant: 'destructive' });
        }
      } catch {
        toast({ title: t.contactError, variant: 'destructive' });
      } finally {
        setLoading(false);
      }
    },
    [formData, toast, t]
  );

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-mindhr-purple/10 text-mindhr-purple text-sm font-semibold mb-4">
            {t.contactTag}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t.contactTitle}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.contactSubtitle}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <ScrollReveal className="md:col-span-3" direction={language === 'ar' ? 'right' : 'left'}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.contactName}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-border/80 focus:border-mindhr-purple"
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">{t.contactCompany}</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="border-border/80 focus:border-mindhr-purple"
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">{t.contactPhone}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-border/80 focus:border-mindhr-purple"
                    dir="ltr"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t.contactEmail}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-border/80 focus:border-mindhr-purple"
                    dir="ltr"
                  />
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <Label htmlFor="message">{t.contactMessage}</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="border-border/80 focus:border-mindhr-purple resize-none"
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-mindhr-purple to-mindhr-blue text-white shadow-lg shadow-mindhr-purple/25 hover:shadow-xl hover:shadow-mindhr-purple/30 transition-all hover:scale-[1.01] py-6"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    {t.contactButton}
                  </span>
                )}
              </Button>
            </form>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal className="md:col-span-2" direction={language === 'ar' ? 'left' : 'right'}>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm h-full">
              <h3 className="text-lg font-bold mb-2">{t.contactInfoTitle}</h3>
              <p className="text-sm text-muted-foreground mb-8">{t.contactInfoDesc}</p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-mindhr-purple/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-mindhr-purple" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-1">{t.contactLocation}</div>
                    <div className="text-sm text-muted-foreground">{t.contactLocationValue}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-mindhr-blue/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-mindhr-blue" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-1">{t.contactPhoneLabel}</div>
                    <a
                      href="tel:+201001234567"
                      className="text-sm text-muted-foreground hover:text-mindhr-blue transition-colors"
                      dir="ltr"
                    >
                      {t.contactPhoneValue}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-mindhr-purple/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-mindhr-purple" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-1">{t.contactEmailLabel}</div>
                    <a
                      href="mailto:info@mindhr.com"
                      className="text-sm text-muted-foreground hover:text-mindhr-purple transition-colors"
                      dir="ltr"
                    >
                      {t.contactEmailValue}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <a
                  href="https://wa.me/201001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-xl bg-green-500 text-white font-semibold text-sm hover:bg-green-600 transition-colors shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {language === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// ============================================
// FOOTER COMPONENT
// ============================================
function Footer() {
  const { language, isRTL } = useLanguage();
  const t = getTranslation(language);

  const navItems = [
    { label: t.home, href: '#hero' },
    { label: t.about, href: '#about' },
    { label: t.services, href: '#services' },
    { label: t.whyUs, href: '#why-us' },
    { label: t.contact, href: '#contact' },
  ];

  const serviceItems = [
    t.service1Title,
    t.service2Title,
    t.service3Title,
    t.service4Title,
    t.service5Title,
  ];

  return (
    <footer className="bg-gradient-to-br from-mindhr-purple-dark to-mindhr-purple text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 end-0 w-48 sm:w-96 h-48 sm:h-96 bg-mindhr-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 start-0 w-48 sm:w-72 h-48 sm:h-72 bg-mindhr-purple-light/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/mindhrlogo.png"
              alt="MindHR Logo"
              width={140}
              height={48}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              {t.footerDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">{t.footerQuickLinks}</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">{t.footerServices}</h4>
            <ul className="space-y-2">
              {serviceItems.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">{t.footerContact}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 shrink-0 text-white/50" />
                <span className="text-white/70 text-sm">{t.contactLocationValue}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 shrink-0 text-white/50" />
                <a
                  href="tel:+201001234567"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                  dir="ltr"
                >
                  {t.contactPhoneValue}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 shrink-0 text-white/50" />
                <a
                  href="mailto:info@mindhr.com"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                  dir="ltr"
                >
                  {t.contactEmailValue}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>
            © {new Date().getFullYear()} MindHR — {t.footerRights}
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              {t.footerPolicy}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t.footerTerms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// FLOATING WHATSAPP BUTTON
// ============================================
function FloatingWhatsApp() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <motion.a
      href="https://wa.me/201001234567"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 end-6 z-50 group"
      aria-label={t.whatsappTooltip}
    >
      <span className="absolute bottom-full end-0 mb-3 px-3 py-1.5 bg-white rounded-lg shadow-lg text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {t.whatsappTooltip}
        <span className="absolute top-full end-4 border-4 border-transparent border-t-white" />
      </span>
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse-ring" />
        <div className="relative w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-xl shadow-green-500/30 hover:bg-green-600 transition-colors group-hover:scale-110 transform duration-300">
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
}

// ============================================
// MAIN PAGE
// ============================================
// Hydration-safe mounted check using useSyncExternalStore
const emptySubscribe = () => () => {};
function useIsMounted() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

export default function MindHRPage() {
  const { language } = useLanguage();
  const mounted = useIsMounted();

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-2 border-mindhr-purple/30 border-t-mindhr-purple rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SolutionsSection />
        <WhyUsSection />
        <TestimonialsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
