import type { NextPage } from "next";
import { Button, Htag, P, Rating, Tag } from "../components";
import { useState } from "react";

const Home: NextPage = () => {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="down" className="foo">
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

      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
};

export default Home;
