"use client";

import React from "react";
import Typed from "typed.js";

export function TypedRole() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "I'm a Software Engineer 👨‍💻",
        "Built Web Apps 🌎",
        "Built Full-Stack Solutions 🛠️",
      ],
      typeSpeed: 75,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      smartBackspace: true,
      backDelay: 1000,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return <span className="py-2 text-xl text-muted-foreground" ref={el} />;
}
