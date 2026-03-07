import { useState, useEffect, useRef } from "react";

export function useTypingEffect(
  roles,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
) {
  const [text, setText] = useState("");
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    let timeout;

    function typeRole() {
      const currentRole = roles[roleIndex.current];
      let speed = typingSpeed;

      if (isDeleting.current) {
        setText(currentRole.substring(0, charIndex.current - 1));
        charIndex.current--;
        speed = deletingSpeed;
      } else {
        setText(currentRole.substring(0, charIndex.current + 1));
        charIndex.current++;
        speed = typingSpeed;
      }

      if (!isDeleting.current && charIndex.current === currentRole.length) {
        isDeleting.current = true;
        speed = pauseTime;
      } else if (isDeleting.current && charIndex.current === 0) {
        isDeleting.current = false;
        roleIndex.current = (roleIndex.current + 1) % roles.length;
        speed = 500;
      }

      timeout = setTimeout(typeRole, speed);
    }

    timeout = setTimeout(typeRole, 1000);
    return () => clearTimeout(timeout);
  }, [roles, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}
