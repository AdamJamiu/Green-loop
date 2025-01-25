"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";

const LocationMap = () => {
  return (
    <section className="w-full mx-auto">
      {/* <APIProvider apiKey={API_KEY as string}> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3963.0059930850575!2d3.314648!3d6.6461760000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMzgnNDYuMiJOIDPCsDE4JzUyLjciRQ!5e0!3m2!1sen!2sng!4v1737834565554!5m2!1sen!2sng"
        width={1200}
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="self-center"
      ></iframe>
      {/* </APIProvider> */}
    </section>
  );
};

export default LocationMap;
