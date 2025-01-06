"use client";

import Accordion from "./ui/Accordion";

const StickyFaq = () => {
  return (
    <div className="w-full md:space-y-4 space-y-2">
      <Accordion
        label="What is GreenLoop Waste Services?"
        content="GreenLoop Waste Services is a waste management and recycling company in Nigeria. We use innovative technology and sustainable practices to help individuals, businesses, and communities monetize waste materials like plastics, e-waste, and metals through our GreenLoop App."
      />
      <Accordion
        label="How does the GreenLoop App work?"
        content="The GreenLoop App connects waste contributors with our recycling network. Users can submit recyclable materials, track their contributions, and earn rewards that can be redeemed for cash or other benefits."
      />
      <Accordion
        label="What types of waste does GreenLoop accept?"
        content="The GreenLoop App connects waste contributors with our recycling network. Users can submit recyclable materials, track their contributions, and earn rewards that can be redeemed for cash or other benefits."
      />
      <Accordion
        label="How can I contribute waste to GreenLoop?"
        ContentElement={
          <>
            <p className="font-satoshi">You can contribute waste by:</p>
            <ul className="mt-2 list-decimal space-y-2 pl-4">
              <li>Downloading the GreenLoop App. </li>
              <li>Locating the nearest recycling hub through the app.</li>
              <li>Dropping off your recyclable materials at the hub.</li>
            </ul>
            <p className="mt-3">
              Our team will weigh and assess the materials to ensure fair
              rewards.
            </p>
          </>
        }
      />
      <Accordion
        label="Where are GreenLoop recycling hubs located?"
        content="We are working to establish a network of recycling hubs across Nigeria. You can find the nearest hub through the GreenLoop App or on our website."
      />
      <Accordion
        label="What rewards do I get for recycling?"
        content="Rewards include cash incentives, discounts, and other benefits depending on the type and quantity of materials recycled. Details are available in the app."
      />
      <Accordion
        label="Can businesses partner with GreenLoop?"
        content="Yes, we partner with businesses to supply recycled materials and collaborate on waste management solutions. For partnership inquiries, contact us through our website or email."
      />
      <Accordion
        label="How does GreenLoop ensure the quality of recycled materials?"
        content="We follow strict quality control processes to ensure that all recycled materials meet industry standards, making them suitable for reuse in manufacturing and other applications."
      />
      <Accordion
        label="How do I contact GreenLoop for support?"
        // content="We follow strict quality control processes to ensure that all recycled materials meet industry standards, making them suitable for reuse in manufacturing and other applications."
        ContentElement={
          <>
            <p className="font-satoshi">
              For inquiries or support, you can reach us through:
            </p>

            <ul className="mt-2 list-decimal space-y-2 pl-4">
              <li>The GreenLoop App (support section).</li>
              <li>Email: [Insert Email Address]</li>
              <li>Phone: [Insert Phone Number]</li>
            </ul>
          </>
        }
      />
    </div>
  );
};

export default StickyFaq;
