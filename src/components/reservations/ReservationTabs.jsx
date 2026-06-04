export default function ReservationTabs({ activeTab, onTabChange }) {
  const tabs = [
    {
      id: 'balades',
      label: 'Balades',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M19 9c0 4-3.5 7-7 9-3.5-2-7-5-7-9a7 7 0 0 1 14 0Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M12 5v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="18" cy="17" r="3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M15.5 19.5 14 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      id: 'seances',
      label: 'Séances',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M3 9h18" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M7 13h4M7 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      id: 'abonnements',
      label: 'Abonnements',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M3 9.5 5.5 4l2 3.5h7L16.5 4 19 9.5H3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M3 9.5h18v2H3z" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="6" y="11.5" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="res-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`res-tabs__tab${activeTab === tab.id ? ' res-tabs__tab--active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          <span className="res-tabs__icon">{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  )
}
