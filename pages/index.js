import Link from "next/link";
import { useRef, useState } from "react";
import { Button } from "@chakra-ui/react";
//
export default function Home() {
  const [count, setCount] = useState(1);
  const handleClick = () => {
    setCount((prev) => prev + 1);
    buttonRef.current.style.border = "none";
  };
  const buttonRef = useRef(null);
  return (
    <div>
      <Button ref={buttonRef} type="button" onClick={handleClick}>
        click this
      </Button>
      <h1>{count}</h1>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
