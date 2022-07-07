import type { NextPage } from "next";
import { Button, Htag } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="down" className="foo">
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
    </>
  );
};

export default Home;
