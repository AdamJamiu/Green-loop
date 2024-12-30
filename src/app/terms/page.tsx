"use client";

import TopPageName from "../components/TopPageName";
import Image from "next/image";

import Accordion from "../components/ui/Accordion";
import { useState } from "react";

type TActive = "terms" | "privacy";

const Page = () => {
  const [active, setActive] = useState<TActive>("terms");

  return (
    <div className="w-full h-full pb-20">
      <TopPageName title="Privacy & Terms" />

      <section className="md:pt-20 xl:px-28 font-satoshi">
        <div className="custom-scroll">
          <div className="w-full mt-16 flex lg:flex-row flex-col justify-start items-start gap-5 md:gap-10 md:p-0 p-4">
            <div className="rounded-xl shadow-md w-full md:w-[40%] flex flex-col lg:sticky top-36">
              <button
                onClick={() => setActive("terms")}
                className={`${
                  active === "terms"
                    ? "bg-gray-100 font-medium"
                    : "bg-white hover:bg-gray-100 text-[#374151]"
                } px-6 py-3 text-left rounded-t-2xl ease transition-all duration-200`}
              >
                Terms and conditions
              </button>
              <button
                onClick={() => setActive("privacy")}
                className={`${
                  active === "privacy"
                    ? "bg-gray-100 font-medium"
                    : "bg-white hover:bg-gray-100 text-[#374151]"
                } px-6 py-3 text-left rounded-b-2xl ease transition-all duration-200`}
              >
                Privacy policy
              </button>
            </div>

            <div className="w-full p-2">
              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    1. Introduction
                  </h2>
                  <p>
                    At GreenLoop Waste Services Limited, your privacy is of
                    utmost importance to us. This Privacy Policy explains how we
                    collect, use, and protect your personal information when you
                    use our services, including the GreenLoop App and website.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    2. Information We Collect
                  </h2>
                  <p>We may collect the following types of information:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                      <strong>Personal Information:</strong> Name, email
                      address, phone number, and other contact details.
                    </li>
                    <li>
                      <strong>Usage Data:</strong> Information about how you
                      interact with our app and website.
                    </li>
                    <li>
                      <strong>Location Data:</strong> If enabled, your location
                      to suggest nearby recycling hubs.
                    </li>
                    <li>
                      <strong>Recycling Data:</strong> Details of your
                      contributions like materials and weights.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    3. How We Use Your Information
                  </h2>
                  <p>The information we collect is used to:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Provide and improve our services.</li>
                    <li>Track your recycling contributions and rewards.</li>
                    <li>Send notifications and updates.</li>
                    <li>Ensure security and prevent fraud.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    4. How We Share Your Information
                  </h2>
                  <p>
                    Your information will never be sold. However, we may share
                    it under the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                      With recycling partners to process your contributions.
                    </li>
                    <li>
                      When required by law or to comply with legal obligations.
                    </li>
                    <li>
                      With third-party services that help us deliver our app and
                      website functionalities.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    5. Data Security
                  </h2>
                  <p>
                    We take appropriate measures to ensure your data is secure
                    and protected against unauthorized access, alteration,
                    disclosure, or destruction. However, no online system is
                    entirely secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    6. Your Rights
                  </h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Access the information we have about you.</li>
                    <li>Request corrections to your data.</li>
                    <li>Request deletion of your data.</li>
                    <li>Withdraw your consent for data processing.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    7. Changes to This Policy
                  </h2>
                  <p>
                    We may update this Privacy Policy periodically. We encourage
                    you to review this page regularly to stay informed about how
                    we protect your data.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    8. Contact Us
                  </h2>
                  <p>
                    If you have any questions about this Privacy Policy or our
                    practices, please contact us at:
                  </p>
                  <p className="mt-4">
                    <strong>Email:</strong> support@greenloop.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +234 123 456 789
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
