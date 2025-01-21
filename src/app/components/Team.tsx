import Image from "next/image";
import team_01 from "../../images/team/team-01.jpg";
import team_02 from "../../images/team/team-02.jpg";

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

      <div className="flex justify-start items-center flex-wrap gap-5 md:gap-16 lg:gap-20 gap-y-10 mt-14 mx-auto px-10 sm:px-0">
        <div className="">
          {/* <figure className="rounded-full"> */}
          <Image
            src={team_01}
            alt="Benjamin"
            height={300}
            width={300}
            className="rounded-full object-cover h-[200px] w-[200px]"
          />
          {/* </figure> */}
          <p className="font-medium text-base sm:text-lg w-full text-center mt-5">
            Benjamin Olanrewaju Olopade
          </p>
          <p className="text-sm lg:text-base w-full text-center font-satoshi_Variable">
            Founder
          </p>
        </div>

        <div className="">
          {/* <figure className="bg-white rounded-full"> */}
          <Image
            src={team_02}
            alt="Avatar"
            loading="lazy"
            height={300}
            width={300}
            className="rounded-full w-[200px] h-[200px] object-cover"
          />
          {/* </figure> */}
          <p className="font-medium text-base sm:text-lg w-full text-center mt-5">
            Oluwabusola Sandra Olopade
          </p>
          <p className="text-sm lg:text-base w-full text-center font-satoshi_Variable">
            Co Founder
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
