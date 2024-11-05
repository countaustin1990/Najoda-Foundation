import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

const FlutterwaveDonate = () => {
  const config = {
    public_key: "YOUR_FLUTTERWAVE_PUBLIC_KEY", // replace with your public key
    tx_ref: Date.now(),
    amount: 10000, // Amount in Naira (NGN)
    currency: "NGN",
    payment_options: "card, banktransfer, ussd",
    customer: {
      email: "donor@example.com",
      phonenumber: "08012345678",
      name: "Donor Name",
    },
    customizations: {
      title: "Donate to Orthopedic Surgery Foundation",
      description: "Thank you for supporting our cause",
      logo: "https://example.com/logo.png", // add your logo
    },
  };

  const fwConfig = {
    ...config,
    text: "Donate Now",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // Close the modal after payment is made
      alert("Thank you for your donation!");
    },
    onClose: () => {
      console.log("Payment modal closed");
    },
  };

  return (
    <div className="donation-section">
      <h2>Support Our Cause</h2>
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
};

export default FlutterwaveDonate;

