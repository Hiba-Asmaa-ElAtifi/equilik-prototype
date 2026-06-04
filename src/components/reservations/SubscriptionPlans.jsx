import { useState } from 'react'
import subBanner from '../../assets/reservations/subscription-banner.jpg'

/* ── Icons ───────────────────────────────────────────────────────── */
const CrownIcon = () => (
  <svg width="60" height="52" viewBox="0 0 60 52" fill="none">
    <path d="M4 44L13 16L24 32L30 4L36 32L47 16L56 44Z" fill="url(#cg)" stroke="#D4A373" strokeWidth="1.5" strokeLinejoin="round"/>
    <rect x="4" y="44" width="52" height="7" rx="2" fill="url(#cg)" stroke="#D4A373" strokeWidth="1.2"/>
    <circle cx="30" cy="44" r="4" fill="#F0C878"/>
    <circle cx="11" cy="40" r="3" fill="#E8B87A"/>
    <circle cx="49" cy="40" r="3" fill="#E8B87A"/>
    <defs>
      <linearGradient id="cg" x1="4" y1="4" x2="56" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F0D090"/><stop offset="0.5" stopColor="#D4A373"/><stop offset="1" stopColor="#A8723A"/>
      </linearGradient>
    </defs>
  </svg>
)
const HorseshoeIcon = () => <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M7 19v-5a5 5 0 0 1 10 0v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M5 19h4M15 19h4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>
const HorseHeadIcon = () => <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M15.5 3c-1.5 0-2.5.8-3 2L11 8l-2 .5-2 3.5H5l-1.5 3L5 16l.5 3.5H8L9 18h3.5l1 2H16l.5-4 .5-3-1-3V6c0-1.7-1.4-3-3-3h-2.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>
const TrophyIcon    = () => <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M5 3H3v5a4 4 0 0 0 4 4h.5M19 3h2v5a4 4 0 0 1-4 4h-.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M7.5 3h9v7a4.5 4.5 0 0 1-9 0V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M6 21h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
const CheckCircle   = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/><path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
const ArrowRight    = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
const ChevronDown   = ({ open }) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .22s' }}><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
const CalendarIcon  = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="17" rx="3" stroke="currentColor" strokeWidth="1.5"/><path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M9 16l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
const CoachIcon     = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M18 5l1.5 1.5L22 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
const ShieldIcon    = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3L4 7v6c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
const PercentIcon   = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="16" cy="16" r="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M19 5L5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>

/* ── Data ────────────────────────────────────────────────────────── */
const PLANS = [
  { id:'essentiel',   name:'Essentiel',   icon:<HorseshoeIcon />, popular:false, price:490,  tagline:'Pour débuter en toute flexibilité',  features:['4 séances / mois','Accès aux coachs','Report 1 fois / mois'] },
  { id:'performance', name:'Performance', icon:<HorseHeadIcon />, popular:true,  price:890,  tagline:'Pour progresser régulièrement',       features:['8 séances / mois','Accès prioritaire','Report 2 fois / mois','Suivi de progression'] },
  { id:'excellence',  name:'Excellence',  icon:<TrophyIcon />,    popular:false, price:1490, tagline:'Pour atteindre vos objectifs',        features:['12 séances / mois','Accès prioritaire','Report 4 fois / mois','Suivi de progression','Bilan avec coach'] },
]

const FEATURES = [
  { icon:<CalendarIcon />, title:'Report facile',              desc:'Modifiez vos séances en toute simplicité' },
  { icon:<CoachIcon />,    title:'Coachs qualifiés',           desc:"Des experts à votre écoute" },
  { icon:<ShieldIcon />,   title:'Engagement sans contrainte', desc:'Résiliez à tout moment' },
  { icon:<PercentIcon />,  title:'Avantages exclusifs',        desc:'Réductions et offres réservées' },
]

const FAQS = [
  { q:'Puis-je résilier mon abonnement à tout moment ?',  a:"Oui, résiliation possible à tout moment sans frais. L'accès reste actif jusqu'à la fin de la période en cours." },
  { q:'Les séances non utilisées sont-elles reportées ?', a:'Selon votre formule, vous pouvez reporter 1 à 4 séances par mois. Les séances non reportées expirent fin de mois.' },
]

/* ── Plan card ───────────────────────────────────────────────────── */
function PlanCard({ plan, selected, onSelect, onReserve }) {
  return (
    <div className={`sp-plan${plan.popular ? ' sp-plan--popular' : ''}${selected ? ' sp-plan--selected' : ''}`}>
      {plan.popular && <span className="sp-plan__badge">POPULAIRE</span>}
      <div className="sp-plan__icon">{plan.icon}</div>
      <p className="sp-plan__name">{plan.name}</p>
      <p className="sp-plan__tagline">{plan.tagline}</p>
      <div className="sp-plan__price-row">
        <span className="sp-plan__price">{plan.price}</span>
        <span className="sp-plan__suffix">&nbsp;MAD<span className="sp-plan__period">/mois</span></span>
      </div>
      <ul className="sp-plan__features">
        {plan.features.map((f, i) => (
          <li key={i} className="sp-plan__feature">
            <span className="sp-plan__check"><CheckCircle /></span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button
        className={`sp-plan__btn${plan.popular ? ' sp-plan__btn--filled' : ''}`}
        onClick={() => {
          onSelect(plan.id)
          onReserve?.(plan)
        }}
      >
        {selected ? 'Sélectionné' : 'Choisir'}
      </button>
    </div>
  )
}

/* ── Export ──────────────────────────────────────────────────────── */
export default function SubscriptionPlans({ onReserve }) {
  const [openFaq, setOpenFaq] = useState(null)
  const [selectedPlan, setSelectedPlan] = useState('performance')

  return (
    <div className="sp-section">

      {/* Promo banner */}
      <div className="sp-promo">
        <div className="sp-promo__bg" style={{ backgroundImage: `url(${subBanner})` }} />
        <div className="sp-promo__overlay" />
        <div className="sp-promo__content">
          <p className="sp-promo__tag">ÉCONOMISEZ JUSQU'À 20%</p>
          <h2 className="sp-promo__title">Abonnez-vous et progressez</h2>
          <p className="sp-promo__desc">Plus de séances, plus d'avantages.</p>
          <button
            className="sp-promo__btn"
            onClick={() => document.querySelector('.sp-plans')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
          >
            Voir les offres <ArrowRight />
          </button>
        </div>
        <div className="sp-promo__crown"><CrownIcon /></div>
      </div>

      {/* Pricing */}
      <p className="sp-section__title">Nos formules</p>
      <div className="sp-plans">
        {PLANS.map(p => (
          <PlanCard
            key={p.id}
            plan={p}
            selected={selectedPlan === p.id}
            onSelect={setSelectedPlan}
            onReserve={onReserve}
          />
        ))}
      </div>

      {/* Features */}
      <div className="sp-features">
        {FEATURES.map((f, i) => (
          <div key={i} className="sp-feature">
            <div className="sp-feature__icon">{f.icon}</div>
            <p className="sp-feature__title">{f.title}</p>
            <p className="sp-feature__desc">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="sp-faq">
        <p className="sp-faq__title">Questions fréquentes</p>
        {FAQS.map((faq, i) => (
          <div
            key={i}
            className={`sp-faq__item${openFaq === i ? ' sp-faq__item--open' : ''}`}
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
          >
            <div className="sp-faq__row">
              <p className="sp-faq__q">{faq.q}</p>
              <span className="sp-faq__chevron"><ChevronDown open={openFaq === i} /></span>
            </div>
            {openFaq === i && <p className="sp-faq__a">{faq.a}</p>}
          </div>
        ))}
      </div>

    </div>
  )
}
