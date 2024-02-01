import React, { useEffect, useRef } from "react";
import { offnet, onnet } from "../../assets/Shareimg";

const TestConnection: React.FC = () => {
  const offref = useRef<HTMLDivElement>(null);
  const onref = useRef<HTMLDivElement>(null);
  const netref = useRef<HTMLDivElement>(null);

  const online = () => {
    if (netref.current) {
      const lts = netref.current.classList;
      if (!lts.contains("-left-full")) {
        lts.add("-left-full");
      }
    }

    setTimeout( () => {
      if (netref.current && onref.current && offref.current) {
         onref.current.classList.remove("hidden");
        offref.current.classList.add("hidden");
        netref.current.classList.remove("-left-full");
      }
    }, 500);

    setTimeout(() => {
      if (netref.current && onref.current && offref.current) {
         netref.current.classList.toggle("-left-full");
        onref.current.classList.add("hidden");
        offref.current.classList.remove("hidden");
      }
    }, 2000);
  };

  const offline = () => {
    if (netref.current) {
        const lts = netref.current.classList;
        if (lts.contains("-left-full")) {
            lts.remove("-left-full");
        }
    }
};

  const Refresh = () => {
    window.location.reload();
  };

  const Close_test_net = () => {
    if (netref.current) {
        netref.current.classList.add("-left-full");
      }
  };

  useEffect(() => {
    // Add event listeners when the component mounts
    window.addEventListener("offline", offline);
    window.addEventListener("online", online);

    // Remove event listeners when the component unmounts
    return () => {
      window.removeEventListener("offline", offline);
      window.removeEventListener("online", online);
    };
  }, []);

  return (
    <div ref={netref} className="network -left-full">
      <div ref={offref} className="offnet">
        <p className="text-sm font-bold text-white max-sm:hidden">You are currently offline</p>
        <a href="#" onClick={Refresh} className="refreshBtn">
          Refresh
        </a>
        <i
          onClick={Close_test_net}
          className=" max-sm:hidden text-sm text-[#828181] font-bold cursor-pointer
           hover:text-orange-600 hover:scale-110"
        >
          Close
        </i>
        <img src={offnet} alt="offline" />
      </div>
      <div ref={onref} className="onnet hidden">
        <p className="text-sm font-bold text-white max-sm:hidden">Your Internet connection was restored</p>
        <img src={onnet} alt="online hidden" />
      </div>
    </div>
  );
};

export default TestConnection;
