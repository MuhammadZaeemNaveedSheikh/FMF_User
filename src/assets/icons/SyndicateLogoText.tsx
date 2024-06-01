interface SyndicateLogoTextProps {
  color: string;
}

const SyndicateLogoText: React.FC<SyndicateLogoTextProps> = ({
  color = "#000",
}) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="187"
        height="14"
        viewBox="0 0 187 14"
        fill="none"
      >
        <path
          d="M3.24583 9.57603C3.24583 10.3598 3.80997 10.7517 4.93824 10.7517C6.06858 10.7517 6.63374 10.4001 6.63374 9.6967C6.63374 9.32129 6.44089 9.01499 6.05517 8.77778C5.66739 8.53851 5.19917 8.33947 4.6505 8.18064C4.09977 8.02388 3.54904 7.84031 2.99831 7.62991C2.44964 7.41952 1.98142 7.09053 1.59364 6.64293C1.20792 6.19534 1.01506 5.63635 1.01506 4.96599C1.01506 2.11952 2.84774 0.696289 6.51308 0.696289C7.85174 0.696289 8.86451 0.947933 9.55138 1.45122C10.2382 1.95657 10.5817 2.65685 10.5817 3.55204C10.5817 3.88206 10.5384 4.19765 10.4517 4.4988C10.3672 4.79995 10.2795 5.0124 10.1887 5.13616L10.0526 5.34036H7.04215C7.28967 5.08047 7.41343 4.75147 7.41343 4.35338C7.41343 3.61701 6.9318 3.24883 5.96854 3.24883C4.75363 3.24883 4.14618 3.63351 4.14618 4.40289C4.14618 4.7886 4.34007 5.09594 4.72785 5.32489C5.11357 5.54972 5.58076 5.72814 6.12943 5.86015C6.68015 5.9901 7.23295 6.15099 7.7878 6.34282C8.34472 6.53671 8.81604 6.85745 9.20175 7.30505C9.58747 7.75264 9.78033 8.33431 9.78033 9.05005C9.78033 10.4898 9.34923 11.5593 8.48704 12.2585C7.62485 12.9557 6.29753 13.3043 4.50508 13.3043C2.71263 13.3043 1.48741 12.9866 0.829424 12.3513C0.342637 11.8749 0.0992432 11.2169 0.0992432 10.3774C0.0992432 10.0597 0.133277 9.71423 0.201345 9.34089L0.250849 9.06552H3.3139L3.27986 9.26973C3.25717 9.38524 3.24583 9.48734 3.24583 9.57603ZM17.5741 5.12069H17.967L20.8413 0.813861H23.9044L18.6632 8.35391L17.8309 13.066H14.7493L15.5816 8.35391L12.995 0.813861H16.2468L17.5741 5.12069ZM33.044 0.813861H36.104L33.9629 13.066H30.8813L28.7372 6.36138L27.58 13.066H24.5015L26.6611 0.813861H29.8263L31.9364 7.07609L33.044 0.813861ZM40.021 0.813861H44.7857C46.2708 0.813861 47.331 1.18823 47.9663 1.93698C48.4304 2.50421 48.6625 3.21376 48.6625 4.06564C48.6625 4.37091 48.6346 4.69372 48.5789 5.03406L47.9168 8.82729C47.6879 10.1103 47.1309 11.1375 46.2461 11.9089C45.3632 12.6803 44.2185 13.066 42.8117 13.066H37.8583L40.021 0.813861ZM43.7121 3.4685H42.6044L41.3978 10.4114H43.0159C43.5481 10.4114 43.9648 10.267 44.2659 9.97825C44.5671 9.68948 44.7733 9.2161 44.8847 8.55811L45.3797 5.76733C45.4251 5.51775 45.4478 5.28983 45.4478 5.08356C45.4478 4.00686 44.8692 3.4685 43.7121 3.4685ZM52.9012 0.813861H55.9643L53.8201 13.066H50.7416L52.9012 0.813861ZM62.0223 13.3043C60.4011 13.3043 59.2779 12.9526 58.653 12.2492C58.2219 11.7501 58.0063 11.0529 58.0063 10.1577C58.0063 9.76992 58.0465 9.35533 58.127 8.91392L58.8231 5.00003C59.3347 2.13087 61.1787 0.696289 64.3552 0.696289C65.6712 0.696289 66.6695 0.976811 67.3502 1.53785C68.0308 2.0989 68.3712 2.86724 68.3712 3.84287C68.3712 4.29666 68.3052 4.74735 68.1731 5.19495C68.0432 5.64254 67.9164 5.97463 67.7926 6.19121L67.6039 6.53155H64.5934C64.9668 6.10045 65.1534 5.48784 65.1534 4.69372C65.1534 4.275 65.0462 3.94291 64.8316 3.69746C64.6151 3.45406 64.2974 3.33237 63.8787 3.33237C62.7319 3.33237 62.0512 3.96766 61.8367 5.23826L61.2395 8.67568C61.1838 8.97064 61.156 9.26044 61.156 9.54509C61.156 10.2938 61.6036 10.6682 62.4988 10.6682C63.5775 10.6682 64.2242 10.0608 64.4387 8.84585H67.5018L67.4182 9.34089C66.9644 11.9832 65.1658 13.3043 62.0223 13.3043ZM79.3796 13.066H76.1464L76.2485 10.3959H73.4082L72.5728 13.066H69.3241L73.6959 0.813861H79.3115L79.3796 13.066ZM76.5207 3.79028H75.4502L74.1043 8.11567H76.3351L76.5207 3.79028ZM94.1162 0.813861L93.6398 3.4685H89.4536L87.7705 13.066H84.6889L86.3751 3.4685H82.1704L82.6468 0.813861H94.1162ZM103.865 10.4114L103.392 13.066H94.8495L97.0091 0.813861H105.552L105.075 3.4685H99.5957L99.2028 5.76733H103.729L103.253 8.41888H98.7263L98.389 10.4114H103.865ZM121.275 5.91894L120.814 8.57358H116.288L115.505 13.066H112.426L114.586 0.813861H123.129L122.652 3.4685H117.173L116.749 5.91894H121.275ZM132.618 12.1719C131.714 12.9268 130.441 13.3043 128.797 13.3043C127.151 13.3043 126.01 12.9237 125.375 12.1626C124.921 11.6408 124.694 10.9209 124.694 10.003C124.694 9.5946 124.739 9.147 124.83 8.66021L126.21 0.813861H129.273L127.893 8.59214C127.848 8.87473 127.825 9.16866 127.825 9.47393C127.825 10.2701 128.302 10.6682 129.255 10.6682C129.822 10.6682 130.276 10.5197 130.616 10.2227C130.956 9.92772 131.195 9.3842 131.331 8.59214L132.711 0.813861H135.774L134.394 8.66021C134.111 10.2485 133.519 11.419 132.618 12.1719ZM145.965 0.813861H149.028L146.884 13.066H143.806L141.662 6.36138L140.504 13.066H137.423L139.585 0.813861H142.751L144.861 7.07609L145.965 0.813861ZM152.942 0.813861H157.707C159.194 0.813861 160.255 1.18823 160.891 1.93698C161.355 2.50421 161.587 3.21376 161.587 4.06564C161.587 4.37091 161.559 4.69372 161.503 5.03406L160.838 8.82729C160.611 10.1103 160.055 11.1375 159.17 11.9089C158.286 12.6803 157.14 13.066 155.733 13.066H150.783L152.942 0.813861ZM156.636 3.4685H155.529L154.322 10.4114H155.937C156.471 10.4114 156.889 10.267 157.19 9.97825C157.489 9.68948 157.696 9.2161 157.809 8.55811L158.304 5.76733C158.349 5.51775 158.372 5.28983 158.372 5.08356C158.372 4.00686 157.794 3.4685 156.636 3.4685ZM172.682 10.4114L172.205 13.066H163.663L165.826 0.813861H174.368L173.892 3.4685H168.412L168.019 5.76733H172.546L172.069 8.41888H167.543L167.202 10.4114H172.682ZM177.821 0.813861H182.586C184.073 0.813861 185.134 1.18823 185.769 1.93698C186.236 2.50421 186.469 3.21376 186.469 4.06564C186.469 4.37091 186.44 4.69372 186.382 5.03406L185.717 8.82729C185.492 10.1103 184.936 11.1375 184.049 11.9089C183.164 12.6803 182.018 13.066 180.612 13.066H175.661L177.821 0.813861ZM181.515 3.4685H180.408L179.201 10.4114H180.819C181.351 10.4114 181.768 10.267 182.069 9.97825C182.37 9.68948 182.576 9.2161 182.688 8.55811L183.183 5.76733C183.228 5.51775 183.251 5.28983 183.251 5.08356C183.251 4.00686 182.672 3.4685 181.515 3.4685Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default SyndicateLogoText;
