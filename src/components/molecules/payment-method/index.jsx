export function PaymentMothod() {
    const paymentMethod = [
        "visa",
        "master-card",
        "paypal",
        "ipay",
        "google-pay",
    ]
    return (
        <div className="flex">
            {paymentMethod.map((payments, index) => (
                <a key={index} href="/">
                    <img  src={`/images/payment-method/${payments}.png`} alt="" />
                </a>
            ))}
        </div>
    )
}