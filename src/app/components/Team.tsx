import Image from "next/image";

const Team = () => {
  return (
    <section className="w-full my-36 bg-highlight flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-start items-start px-4 sm:px-0">
        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-center w-full">
          Meet the Team
        </h1>
        <p className="w-full text-center font-satoshi_Variable mt-5">
          We are an enthusiastic, driven small group building for Africa
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-16 lg:gap-20 gap-y-10 mt-14 mx-auto px-10 sm:px-0">
        <div className="w-full">
          <figure className="bg-white rounded-[100px] pt-5 overflow-hidden">
            <Image
              src="https://img.freepik.com/free-psd/portrait-girl-teenager_23-2151717408.jpg?ga=GA1.1.1708213416.1734187020&semt=ais_hybrid"
              alt="Avatar"
              height={108}
              width={1080}
              className="align-middle h-auto max-w-full"
              //   sizes="(max-width: 1080px) 100vw, 1080px"
            />
          </figure>
          <p className="font-medium text-base sm:text-lg w-full text-center mt-4">
            John Doe
          </p>
          <p className="text-sm w-full text-center font-satoshi_Variable">
            Co Founder
          </p>
        </div>
        <div className="w-full">
          <figure className="bg-white rounded-full pt-5 overflow-hidden">
            <Image
              src="https://img.freepik.com/free-psd/portrait-girl-teenager_23-2151717408.jpg?ga=GA1.1.1708213416.1734187020&semt=ais_hybrid"
              alt="Avatar"
              height={600}
              width={800}
            />
          </figure>
          <p className="font-medium text-base sm:text-lg w-full text-center mt-4">
            John Doe
          </p>
          <p className="text-sm w-full text-center font-satoshi_Variable">
            Co Founder
          </p>
        </div>
        <div className="w-full">
          <figure className="bg-white rounded-full pt-5 overflow-hidden">
            <Image
              src="https://img.freepik.com/free-psd/portrait-girl-teenager_23-2151717408.jpg?ga=GA1.1.1708213416.1734187020&semt=ais_hybrid"
              alt="Avatar"
              height={600}
              width={800}
            />
          </figure>
          <p className="font-medium text-base sm:text-lg w-full text-center mt-4">
            John Doe
          </p>
          <p className="text-sm w-full text-center font-satoshi_Variable">
            Co Founder
          </p>
        </div>
        <div className="w-full">
          <figure className="bg-white rounded-full pt-5 overflow-hidden">
            <Image
              src="https://img.freepik.com/free-psd/portrait-girl-teenager_23-2151717408.jpg?ga=GA1.1.1708213416.1734187020&semt=ais_hybrid"
              alt="Avatar"
              height={600}
              width={800}
            />
          </figure>
          <p className="font-medium text-base sm:text-lg w-full text-center mt-4">
            John Doe
          </p>
          <p className="text-sm w-full text-center font-satoshi_Variable">
            Co Founder
          </p>
        </div>
        <div className="w-full">
          <figure className="bg-white rounded-full pt-5 overflow-hidden">
            <Image
              src="https://img.freepik.com/free-psd/portrait-girl-teenager_23-2151717408.jpg?ga=GA1.1.1708213416.1734187020&semt=ais_hybrid"
              alt="Avatar"
              height={600}
              width={800}
            />
          </figure>
          <p className="font-medium text-base sm:text-lg w-full text-center mt-4">
            John Doe
          </p>
          <p className="text-sm w-full text-center font-satoshi_Variable">
            Co Founder
          </p>
        </div>
        <div className="w-full">
          <figure className="bg-white rounded-full pt-5 overflow-hidden">
            <Image
              src="https://img.freepik.com/free-psd/portrait-girl-teenager_23-2151717408.jpg?ga=GA1.1.1708213416.1734187020&semt=ais_hybrid"
              alt="Avatar"
              height={600}
              width={800}
            />
          </figure>
          <p className="font-medium text-base sm:text-lg w-full text-center mt-4">
            John Doe
          </p>
          <p className="text-sm w-full text-center font-satoshi_Variable">
            Co Founder
          </p>
        </div>
        <div className="w-full">
          <figure className="bg-white rounded-full pt-5 overflow-hidden">
            <Image
              src="https://img.freepik.com/free-psd/portrait-girl-teenager_23-2151717408.jpg?ga=GA1.1.1708213416.1734187020&semt=ais_hybrid"
              alt="Avatar"
              height={600}
              width={800}
            />
          </figure>
          <p className="font-medium text-base sm:text-lg w-full text-center mt-4">
            John Doe
          </p>
          <p className="text-sm w-full text-center font-satoshi_Variable">
            Co Founder
          </p>
        </div>
        <div className="w-full">
          <figure className="bg-white rounded-full pt-5 overflow-hidden">
            <Image
              src="https://img.freepik.com/free-psd/portrait-girl-teenager_23-2151717408.jpg?ga=GA1.1.1708213416.1734187020&semt=ais_hybrid"
              alt="Avatar"
              height={600}
              width={800}
            />
          </figure>
          <p className="font-medium text-base sm:text-lg w-full text-center mt-4">
            John Doe
          </p>
          <p className="text-sm w-full text-center font-satoshi_Variable">
            Co Founder
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
