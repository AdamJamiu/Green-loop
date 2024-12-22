const CurveSvg = ({ fill, className }: { fill: string; className: string }) => {
  return (
    <svg
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 635.71 126.76"
    >
      <defs></defs>
      <g id="Layer_2">
        <g id="Layer_1-2">
          <path
            className="cls-1"
            d="M635.71,126.52V72c-2.22,1.14-4.45,2.24-6.7,3.32-68.36,32.76-145.09,33.74-218.3,19-69.12-13.93-135-40.27-202.22-61.61S70.94-5.17.74,1.5c0,.5,0,1,0,1.51Q.24,64.23,0,125.44c.74,0,1.47.07,2.21.07C213.38,127.47,424.54,126.56,635.71,126.52Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default CurveSvg;
