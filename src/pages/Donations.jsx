import { useState } from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { Link } from "react-router-dom";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const DonationSection = () => {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");

  const config = {
    public_key: "FLWPUBK_TEST-xxxxxxxx-X",  // Replace with your actual public key
    tx_ref: Date.now(),
    amount: amount,  // Donation amount
    currency: "NGN",  // Nigerian Naira
    payment_options: "card, banktransfer, ussd",
    customer: {
      email: email,
      name: "Donor",  // You can add more donor details here
    },
    customizations: {
      title: "Donate for Orthopedic Surgeries",
      description: "Support life-saving orthopedic surgeries",
      logo: "https://your-organization-logo-url.com",  // Optional logo URL
    },
  };

  const handleFlutterwaveSuccess = (response) => {
    console.log(response);
    if (response.status === "successful") {
      alert("Donation Successful! Thank you for your support.");
    }
    closePaymentModal(); // Close payment modal
  };

  const fwConfig = {
    ...config,
    callback: handleFlutterwaveSuccess,
    onClose: () => console.log("Payment modal closed"),
  };

  return (
    <section className="relative bg-gray-100 py-10">
      {/* Back to Home Link */}
      <Link
        to="/"
        className="absolute top-4 left-4 bg-blue-400 text-gray-800 py-2 px-4 rounded-md font-semibold hover:bg-gray-300 transition duration-300"
      >
        <HiOutlineArrowSmLeft />
      </Link>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Support Orthopedic Surgeries</h2>
          <p className="mt-4 text-lg text-gray-600">
            Your donations help provide life-saving orthopedic surgeries to those in need.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <form
            className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="donationAmount">
                Donation Amount (₦)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="donationAmount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <FlutterWaveButton
                {...fwConfig}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Donate Now
              </FlutterWaveButton>
            </div>
          </form>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            All donations are tax-deductible and go directly to patient care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
