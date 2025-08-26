import React, { useEffect, useRef } from "react";

export default function TextScramble({ children, className }) {
  const el = useRef(null);

  useEffect(() => {
    let chars = "!<>-_\\/[]{}—=+*^?#________";
    let queue = [];
    let frame = 0;
    let frameRequest;

    const setText = (newText) => {
      const oldText = el.current.innerText;
      const length = Math.max(oldText.length, newText.length);
      queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        queue.push({ from, to, start, end, char: "" });
      }
      cancelAnimationFrame(frameRequest);
      frame = 0;
      update();
    };

    const update = () => {
      let output = "";
      let complete = 0;
      for (let i = 0, n = queue.length; i < n; i++) {
        let { from, to, start, end, char } = queue[i];
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)];
            queue[i].char = char;
          }
          output += `<span class="text-green-400">${char}</span>`;
        } else {
          output += from;
        }
      }
      el.current.innerHTML = output;
      if (complete === queue.length) {
        return;
      } else {
        frameRequest = requestAnimationFrame(update);
        frame++;
      }
    };

    setText(children);

    return () => cancelAnimationFrame(frameRequest);
  }, [children]);

  return <p ref={el} className={className}></p>;
}
