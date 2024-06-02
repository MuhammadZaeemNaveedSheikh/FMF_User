const SelectedCircle = () => {
  return (
    <div className="flex justify-center">
      <svg
        width="23"
        height="22"
        viewBox="0 0 23 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_1_20677"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="23"
          height="22"
        >
          <rect x="0.660156" width="22" height="22" fill="white" />
        </mask>
        <g mask="url(#mask0_1_20677)">
          <rect x="0.660156" width="22" height="22" rx="11" fill="#5B1CD4" />
          <rect
            x="3"
            y="2.21094"
            width="17"
            height="18"
            rx="8.5"
            fill="#131119"
          />
        </g>
      </svg>
    </div>
  );
};

export default SelectedCircle;
