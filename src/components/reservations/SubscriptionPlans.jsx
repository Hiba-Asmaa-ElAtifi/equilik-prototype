import { useState } from 'react'
import subBanner from '../../assets/reservations/subscription-banner.jpg'
import coachJulie from '../../assets/reservations/coach-julie.jpg'

const ArrowRight = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
const CheckIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7"/><path d="m8.5 12.2 2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
const XIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
const CrownIcon = () => <svg width="58" height="52" viewBox="0 0 60 52" fill="none"><path d="M4 44 13 16l11 16 6-28 6 28 11-16 9 28H4Z" fill="url(#subCrown)" stroke="#D4A373" strokeWidth="1.5" strokeLinejoin="round"/><rect x="4" y="44" width="52" height="7" rx="2" fill="url(#subCrown)" stroke="#D4A373" strokeWidth="1.2"/><defs><linearGradient id="subCrown" x1="4" y1="4" x2="56" y2="52" gradientUnits="userSpaceOnUse"><stop stopColor="#F0D090"/><stop offset=".55" stopColor="#D4A373"/><stop offset="1" stopColor="#A8723A"/></linearGradient></defs></svg>
const CalendarIcon = () => <svg width="27" height="27" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="17" rx="3" stroke="currentColor" strokeWidth="1.6"/><path d="M3 9h18M8 2v4M16 2v4M8 15l2 2 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
const CoachIcon = () => <svg width="27" height="27" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7M18 5l1.3 1.3L22 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
const ShieldIcon = () => <svg width="27" height="27" viewBox="0 0 24 24" fill="none"><path d="M12 3 4 7v6c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
const GiftIcon = () => <svg width="27" height="27" viewBox="0 0 24 24" fill="none"><path d="M4 11h16v10H4V11ZM3 7h18v4H3V7ZM12 7v14" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M12 7C9 7 8 3.5 10.2 3.2 12 3 12 7 12 7Zm0 0s0-4 1.8-3.8C16 3.5 15 7 12 7Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
const HorseshoeIcon = () => <svg width="31" height="31" viewBox="0 0 24 24" fill="none"><path d="M7 19v-5a5 5 0 0 1 10 0v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M5 19h4M15 19h4" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/></svg>
const HorseHeadIcon = () => <svg width="31" height="31" viewBox="0 0 24 24" fill="none"><path d="M15.5 3c-1.5 0-2.5.8-3 2L11 8l-2 .5-2 3.5H5l-1.5 3L5 16l.5 3.5H8L9 18h3.5l1 2H16l.5-4 .5-3-1-3V6c0-1.7-1.4-3-3-3h-2.5Z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round"/></svg>
const TrophyIcon = () => <svg width="31" height="31" viewBox="0 0 24 24" fill="none"><path d="M8 21h8M12 17v4M5 3H3v5a4 4 0 0 0 4 4h.5M19 3h2v5a4 4 0 0 1-4 4h-.5" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round"/><path d="M7.5 3h9v7a4.5 4.5 0 0 1-9 0V3Z" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round"/></svg>
const PercentIcon = () => <svg width="25" height="25" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.6"/><circle cx="16" cy="16" r="2.5" stroke="currentColor" strokeWidth="1.6"/><path d="M19 5 5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
const StarIcon = () => <svg width="25" height="25" viewBox="0 0 24 24" fill="none"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>

const PLANS = [
  {
    id: 'essentiel',
    name: 'Essentiel',
    icon: <HorseshoeIcon />,
    price: 490,
    tagline: 'Pour débuter en toute flexibilité',
    features: ['4 séances / mois', 'Accès aux coachs', 'Report 1 fois / mois'],
    compare: ['4', false, '1 fois', false, false, false],
  },
  {
    id: 'performance',
    name: 'Performance',
    icon: <HorseHeadIcon />,
    popular: true,
    price: 890,
    tagline: 'Pour progresser régulièrement',
    features: ['8 séances / mois', 'Accès prioritaire', 'Report 2 fois / mois', 'Suivi de progression'],
    compare: ['8', true, '2 fois', true, false, true],
  },
  {
    id: 'excellence',
    name: 'Excellence',
    icon: <TrophyIcon />,
    price: 1490,
    tagline: 'Pour atteindre vos objectifs',
    features: ['12 séances / mois', 'Accès prioritaire', 'Report 4 fois / mois', 'Suivi de progression', 'Bilan coach'],
    compare: ['12', true, '4 fois', true, true, true],
  },
]

const LANDING_BENEFITS = [
  { icon: <CalendarIcon />, title: 'Plus de flexibilité', desc: 'Réservez vos séances facilement selon vos disponibilités.' },
  { icon: <CoachIcon />, title: 'Coachs qualifiés', desc: 'Des experts passionnés pour vous faire progresser.' },
  { icon: <ShieldIcon />, title: 'Engagement sans contrainte', desc: 'Abonnement résiliable à tout moment.' },
  { icon: <GiftIcon />, title: 'Avantages exclusifs', desc: "Réductions, événements privés et surprises toute l'année." },
]

const TOP_BENEFITS = [
  { icon: <PercentIcon />, text: "Économisez jusqu'à 20%" },
  { icon: <ShieldIcon />, text: 'Sans engagement' },
  { icon: <StarIcon />, text: 'Accès prioritaire aux séances' },
]

const COMPARISON_ROWS = [
  ['Séances / mois', 0],
  ['Accès prioritaire', 1],
  ['Report de séances', 2],
  ['Suivi de progression', 3],
  ['Bilan coach', 4],
  ['Offres exclusives', 5],
]

function SubscriptionLanding({ onShowOffers }) {
  return (
    <div className="sub-flow sub-flow--landing">
      <section className="sub-promo-card">
        <div className="sub-promo-card__bg" style={{ backgroundImage: `url(${subBanner})` }} />
        <div className="sub-promo-card__content">
          <p className="sub-eyebrow">ÉCONOMISEZ JUSQU'À 20%</p>
          <h2>Abonnez-vous et progressez</h2>
          <p>Plus de séances, plus d'avantages, un accompagnement sur mesure.</p>
          <button onClick={onShowOffers}>Voir les offres <ArrowRight /></button>
        </div>
        <div className="sub-promo-card__crown"><CrownIcon /></div>
      </section>

      <section className="sub-section">
        <h2>Pourquoi s'abonner à Écline ?</h2>
        <div className="sub-benefits">
          {LANDING_BENEFITS.map((benefit) => (
            <article className="sub-benefit-card" key={benefit.title}>
              <div className="sub-benefit-card__icon">{benefit.icon}</div>
              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sub-testimonial">
        <img src={coachJulie} alt="" />
        <div>
          <p className="sub-testimonial__stars">★★★★★</p>
          <blockquote>“L'abonnement m'a permis de progresser avec régularité, sans perdre cette sensation de club premium.”</blockquote>
          <span>Sarah M. · Cavalière Écline</span>
        </div>
      </section>
    </div>
  )
}

function PricingCard({ plan, selected, onSelect, onReserve }) {
  return (
    <article className={`sub-price-card${plan.popular ? ' sub-price-card--popular' : ''}${selected ? ' sub-price-card--selected' : ''}`}>
      {plan.popular && <span className="sub-price-card__badge">POPULAIRE</span>}
      <div className="sub-price-card__icon">{plan.icon}</div>
      <h3>{plan.name}</h3>
      <p>{plan.tagline}</p>
      <div className="sub-price-card__price">
        <strong>{plan.price}</strong>
        <span>MAD<br />/mois</span>
      </div>
      <ul>
        {plan.features.map((feature) => (
          <li key={feature}><CheckIcon /> {feature}</li>
        ))}
      </ul>
      <button onClick={() => { onSelect(plan.id); onReserve?.(plan) }}>
        {selected ? 'Sélectionnée' : 'Choisir'}
      </button>
    </article>
  )
}

function ComparisonValue({ value }) {
  if (value === true) return <span className="sub-compare__check">✓</span>
  if (value === false) return <span className="sub-compare__dash">—</span>
  return <span>{value}</span>
}

function SubscriptionOffers({ selectedPlan, onSelectPlan, onReserve }) {
  const selected = PLANS.find((plan) => plan.id === selectedPlan) || PLANS[1]

  return (
    <div className="sub-flow sub-flow--offers">
      <header className="sub-offers-header">
        <h2>Nos formules</h2>
        <div className="sub-title-deco"><span /><i /><span /></div>
        <p>Choisissez l'abonnement qui vous correspond</p>
      </header>

      <div className="sub-top-benefits">
        {TOP_BENEFITS.map((benefit) => (
          <div key={benefit.text}>{benefit.icon}<span>{benefit.text}</span></div>
        ))}
      </div>

      <section className="sub-price-grid">
        {PLANS.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            selected={selectedPlan === plan.id}
            onSelect={onSelectPlan}
            onReserve={onReserve}
          />
        ))}
      </section>

      <section className="sub-compare">
        <h3>Comparez les formules</h3>
        <div className="sub-compare__table">
          <div className="sub-compare__head">
            <span />
            {PLANS.map((plan) => <strong key={plan.id}>{plan.name}</strong>)}
          </div>
          {COMPARISON_ROWS.map(([label, index]) => (
            <div className="sub-compare__row" key={label}>
              <span>{label}</span>
              {PLANS.map((plan) => <ComparisonValue key={plan.id} value={plan.compare[index]} />)}
            </div>
          ))}
        </div>
      </section>

      <section className="sub-reassurance">
        <div className="sub-reassurance__icon"><ShieldIcon /></div>
        <div>
          <h3>Sérénité garantie</h3>
          <p>Paiement sécurisé, abonnement sans engagement et support premium.</p>
        </div>
        <button onClick={() => onReserve?.(selected)}>Choisir {selected.name} <ArrowRight /></button>
      </section>
    </div>
  )
}

export default function SubscriptionPlans({ onReserve }) {
  const [screen, setScreen] = useState('landing')
  const [selectedPlan, setSelectedPlan] = useState('performance')

  if (screen === 'offers') {
    return (
      <SubscriptionOffers
        selectedPlan={selectedPlan}
        onSelectPlan={setSelectedPlan}
        onReserve={onReserve}
      />
    )
  }

  return <SubscriptionLanding onShowOffers={() => setScreen('offers')} />
}
