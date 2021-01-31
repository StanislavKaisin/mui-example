import { AppBar, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import {
  match,
  RouteComponentProps,
  useHistory,
  useRouteMatch,
} from "react-router";
import { About } from "./About";
import { Contact } from "./Contact";

interface MatchParams {
  page?: string;
}

export const Home = () => {
  const router = useRouteMatch();
  const { params } = router;
  const { page }: MatchParams = params;
  const history = useHistory();

  const tabNameToIndex: { [index: string]: any } = {
    0: "about",
    1: "contact",
  };

  const indexToTabName: { [index: string]: any } = {
    about: 0,
    contact: 1,
  };

  // function isUndefined(index: any): index is boolean {
  //   return typeof index === "undefined";
  // }

  // function getData(page?: string) {
  //   return isUndefined(page) ? 0 : indexToTabName[page];
  // }

  function getData(index?: string): number {
    if (index === undefined) return 0;
    return indexToTabName[index];
  }

  const initialState = getData(page);

  console.log("initialState=", initialState);

  const [selectedTab, setselectedTab] = useState(initialState);
  const handleChange = (
    event: any,
    selectedTab: React.SetStateAction<number>
  ) => {
    const stringSeletedTab = selectedTab + "";
    history.push(`/home/${tabNameToIndex[stringSeletedTab]}`);
    setselectedTab(selectedTab);
  };
  return (
    <>
      <AppBar position="static">
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="About" />
          <Tab label="Contact us" />
        </Tabs>
      </AppBar>
      {selectedTab === 0 && <About />}
      {selectedTab === 1 && <Contact />}
    </>
  );
};
