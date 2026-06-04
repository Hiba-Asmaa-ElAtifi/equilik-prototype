import BookingHero from '../../components/booking/BookingHero'
import BookingSummaryCard from '../../components/booking/BookingSummaryCard'
import BookingDetails from '../../components/booking/BookingDetails'
import ParticipantSelector from '../../components/booking/ParticipantSelector'
import UserInfoForm from '../../components/booking/UserInfoForm'
import PaymentSummary from '../../components/booking/PaymentSummary'
import ConfirmBookingButton from '../../components/booking/ConfirmBookingButton'
import './Booking.css'

const ClockIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7"/><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
const RidersIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M16 11a4 4 0 1 0-8 0M4 20c0-4 3-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/><path d="M19 8a3 3 0 1 0-3-3M21 18c0-2.5-1.8-4.5-4.4-5.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
const PinIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8"/></svg>
const CalendarIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="17" rx="3" stroke="currentColor" strokeWidth="1.6"/><path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
const UserIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
const ShieldIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3 4 7v6c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4Z" stroke="currentColor" strokeWidth="1.7"/><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
const LockIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
const ArrowIcon = () => <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>

export default function BookingPage({
  booking,
  heroImage,
  location,
  dateLabel,
  participants,
  onParticipantsChange,
  userInfo,
  onUserInfoChange,
  notes,
  onNotesChange,
  onBack,
  onEditLocation,
  onEditDate,
  backIcon,
  bellIcon,
}) {
  const total = booking.price * participants
  const icons = {
    clock: <ClockIcon />,
    riders: <RidersIcon />,
    pin: <PinIcon />,
    calendar: <CalendarIcon />,
    clockLarge: <ClockIcon />,
  }

  return (
    <div className="booking-page">
      <BookingHero
        image={heroImage || booking.image}
        onBack={onBack}
        backIcon={backIcon}
        bellIcon={bellIcon}
      />

      <main className="booking-content">
        <BookingSummaryCard booking={booking} icons={icons} />

        <BookingDetails
          booking={booking}
          location={location}
          dateLabel={dateLabel}
          onEditLocation={onEditLocation}
          onEditDate={onEditDate}
          icons={icons}
        />

        <ParticipantSelector
          count={participants}
          max={booking.maxRiders || 1}
          onChange={onParticipantsChange}
        />

        <UserInfoForm
          values={userInfo}
          onChange={onUserInfoChange}
          userIcon={<UserIcon />}
        />

        <section className="booking-section">
          <h2 className="booking-form-title">Informations complémentaires <span>(optionnel)</span></h2>
          <textarea
            className="booking-notes"
            value={notes}
            onChange={(event) => onNotesChange(event.target.value)}
            placeholder="Précisions, demandes spécifiques..."
          />
        </section>

        <PaymentSummary total={total} participants={participants} shieldIcon={<ShieldIcon />} />
        <ConfirmBookingButton arrowIcon={<ArrowIcon />} />

        <p className="booking-reassurance">
          <LockIcon />
          Annulation gratuite jusqu'à 24h avant la séance
        </p>
        <div className="booking-home-indicator" />
      </main>
    </div>
  )
}
