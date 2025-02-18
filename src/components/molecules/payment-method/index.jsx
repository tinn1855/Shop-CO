export function PaymentMothod() {
    const paymentMethod = [
        "visa",
        "master-card",
        "paypal",
        "ipay",
        "google-pay",
    ]
    return (
        <div className="flex justify-center lg:justify-end mt-3 lg:mt-0">
            {paymentMethod.map((payments, index) => (
                <a key={index} href="/">
                    <img  src={`/images/payment-method/${payments}.png`} alt="" />
                </a>
            ))}
        </div>
    )
}