import { useState } from 'react'

/* ── Icons ─────────────────────────────── */
function CrownIcon({ size = 56 }) {
  return (
    <svg width={size} height={size * 0.78} viewBox="0 0 56 44" fill="none">
      <path
        d="M4 38 L12 14 L22 28 L28 4 L34 28 L44 14 L52 38 Z"
        fill="url(#cg)" stroke="#D4A373" strokeWidth="1.5" strokeLinejoin="round"
      />
      <rect x="4" y="38" width="48" height="6" rx="2" fill="url(#cg)" stroke="#D4A373" strokeWidth="1.2"/>
      <circle cx="28" cy="38" r="3.5" fill="#E8B87A"/>
      <circle cx="10"  cy="35" r="2.5" fill="#E8B87A"/>
      <circle cx="46"  cy="35" r="2.5" fill="#E8B87A"/>
      <defs>
        <linearGradient id="cg" x1="4" y1="4" x2="52" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E8C080"/>
          <stop offset="0.5" stopColor="#D4A373"/>
          <stop offset="1" stopColor="#B8864A"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

function HorseshoeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M7 19v-5a5 5 0 0 1 10 0v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M5 19h4M15 19h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function HorseIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M16 3c-1.1 0-2 .5-2.5 1.3L12 7l-2.5.8L8 11H6l-1.5 3 1.5.7.5 3H9l.5-1.5H13l1 1.5H17l.5-3.5.5-2.5L17 7V5c0-1.1-.9-2-2-2h-1Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
      />
    </svg>
  )
}

function TrophyIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M5 3H3v5a4 4 0 0 0 4 4h.5M19 3h2v5a4 4 0 0 1-4 4h-.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7.5 3h9v7a4.5 4.5 0 0 1-9 0V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M6 21h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ArrowRightSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ChevronDown({ open }) {
  return (
    <svg
      width="18" height="18" viewBox="0 0 24 24" fill="none"
      style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.22s' }}
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

/* Feature icons */
function CalendarArrowIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="17" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 16l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function CoachIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 5l1.5 1.5L22 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L4 7v6c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function PercentIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="16" cy="16" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M19 5L5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

/* ── Data ───────────────────────────────── */
const PLANS = [
  {
    id: 'essentiel',
    name: 'Essentiel',
    tagline: 'Pour débuter en toute flexibilité',
    price: 490,
    popular: false,
    icon: <HorseshoeIcon />,
    features: [
      '4 séances / mois',
      'Accès aux coachs',
      'Report 1 fois / mois',
    ],
  },
  {
    id: 'performance',
    name: 'Performance',
    tagline: 'Pour progresser régulièrement',
    price: 890,
    popular: true,
    icon: <HorseIcon />,
    features: [
      '8 séances / mois',
      'Accès prioritaire',
      'Report 2 fois / mois',
      'Suivi de progression',
    ],
  },
  {
    id: 'excellence',
    name: 'Excellence',
    tagline: 'Pour atteindre vos objectifs',
    price: 1490,
    popular: false,
    icon: <TrophyIcon />,
    features: [
      '12 séances / mois',
      'Accès prioritaire',
      'Report 4 fois / mois',
      'Suivi de progression',
      'Bilan avec coach',
    ],
  },
]

const FEATURES = [
  { icon: <CalendarArrowIcon />, title: 'Report facile', desc: 'Modifiez vos séances en toute simplicité' },
  { icon: <CoachIcon />,         title: 'Coachs qualifiés', desc: "Des experts à votre écoute" },
  { icon: <ShieldIcon />,        title: 'Engagement sans contrainte', desc: 'Résiliez à tout moment' },
  { icon: <PercentIcon />,       title: 'Avantages exclusifs', desc: 'Réductions et offres réservées' },
]

const FAQS = [
  {
    q: 'Puis-je résilier mon abonnement à tout moment ?',
    a: "Oui, vous pouvez résilier à tout moment sans frais supplémentaires. L'accès reste actif jusqu'à la fin de la période payée.",
  },
  {
    q: 'Les séances non utilisées sont-elles reportées ?',
    a: "Selon votre formule, vous pouvez reporter 1 à 4 séances par mois. Les séances non reportées expirent en fin de mois.",
  },
]

/* ── Plan card ──────────────────────────── */
function PlanCard({ plan }) {
  return (
    <div className={`ab-plan${plan.popular ? ' ab-plan--popular' : ''}`}>
      {plan.popular && <span className="ab-plan__badge">POPULAIRE</span>}
      <div className="ab-plan__icon">{plan.icon}</div>
      <p className="ab-plan__name">{plan.name}</p>
      <p className="ab-plan__tagline">{plan.tagline}</p>
      <div className="ab-plan__price-row">
        <span className="ab-plan__price">{plan.price}</span>
        <span className="ab-plan__currency"> MAD<span className="ab-plan__period">/mois</span></span>
      </div>
      <ul className="ab-plan__features">
        {plan.features.map((f, i) => (
          <li key={i} className="ab-plan__feature">
            <span className="ab-plan__check"><CheckIcon /></span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button className={`ab-plan__btn${plan.popular ? ' ab-plan__btn--active' : ''}`}>
        Choisir
      </button>
    </div>
  )
}

/* ── Main component ─────────────────────── */
export default function AbonnementsSection() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="ab-section">

      {/* Promo banner */}
      <div className="ab-promo">
        <div className="ab-promo__content">
          <p className="ab-promo__tag">ÉCONOMISEZ JUSQU'À 20%</p>
          <h2 className="ab-promo__title">Abonnez-vous et progressez</h2>
          <p className="ab-promo__desc">Plus de séances, plus d'avantages.</p>
          <button className="ab-promo__btn">
            Voir les offres <ArrowRightSmall />
          </button>
        </div>
        <div className="ab-promo__crown">
          <CrownIcon size={64} />
        </div>
      </div>

      {/* Pricing cards */}
      <p className="ab-formules__title">Nos formules</p>
      <div className="ab-plans">
        {PLANS.map(plan => <PlanCard key={plan.id} plan={plan} />)}
      </div>

      {/* Feature highlights */}
      <div className="ab-features">
        {FEATURES.map((f, i) => (
          <div key={i} className="ab-feature">
            <div className="ab-feature__icon">{f.icon}</div>
            <p className="ab-feature__title">{f.title}</p>
            <p className="ab-feature__desc">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="ab-faq">
        <p className="ab-faq__title">Questions fréquentes</p>
        {FAQS.map((faq, i) => (
          <div
            key={i}
            className={`ab-faq__item${openFaq === i ? ' ab-faq__item--open' : ''}`}
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
          >
            <div className="ab-faq__row">
              <p className="ab-faq__q">{faq.q}</p>
              <span className="ab-faq__chevron"><ChevronDown open={openFaq === i} /></span>
            </div>
            {openFaq === i && <p className="ab-faq__a">{faq.a}</p>}
          </div>
        ))}
      </div>

    </div>
  )
}
