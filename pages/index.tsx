import type { NextPage } from "next";
import { Button, Htag, P, Tag } from "../components";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log(counter);
    return function cleanup() {
      console.log("unmount");
    };
  }, []);

  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button
        appearance="primary"
        arrow="down"
        className="foo"
        onClick={() => {
          setCounter((x) => x + 1);
        }}
      >
        Button
      </Button>
      <Button appearance="ghost" arrow="right">
        Button
      </Button>

      <P size="l">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, soluta?
      </P>
      <P size="s">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, soluta?
      </P>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, soluta?
      </P>

      <Tag size="s" color="red">
        lorem
      </Tag>

      <Tag size="m" color="green">
        lorem
      </Tag>

      <Tag size="s" color="primary">
        lorem
      </Tag>
    </>
  );
};

export default Home;
