export default function PaymentSummary({ total, participants, shieldIcon }) {
  return (
    <section className="payment-summary">
      <div>
        <h2>Total</h2>
        <p>{participants} cavalier{participants > 1 ? 's' : ''}</p>
      </div>
      <div className="payment-summary__amount">
        <strong>{total} MAD</strong>
        <span>TVA incluse</span>
        <small>{shieldIcon}Paiement sécurisé</small>
      </div>
    </section>
  )
}
