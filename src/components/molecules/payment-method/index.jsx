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
                <a href="/">
                    <img key={index} src={`/images/payment-method/${payments}.png`} alt="" />
                </a>
            ))}
        </div>
    )
}