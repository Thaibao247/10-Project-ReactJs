import React from "react";
import { useState, useEffect } from "react";
import { Container, Col, Row } from "reactstrap";
import tabApi from "../../api/tabApi";
import TabList from "./component/TabList/TabList";
import TabCategory from "./component/TabCategory/TabCategory";
function Tab(props) {
  const [tabs, setTabs] = useState([]);
  const [tabByIndex, setTabByIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const fetchTabApi = async () => {
    setLoading(true);
    try {
      const res = await tabApi.getAll({});
      if (res) {
        setTabs(res);

        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTabApi();
  }, []);
  const handleClickGetTabId = (index) => {
    setTabByIndex(index);
  };
  if (loading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <div className="tab">
      <h1 className="title">Experience</h1>
      <Container>
        <Row>
          <Col x2="4">
            <TabCategory
              tabs={tabs}
              tabByIndex={tabByIndex}
              handleClickGetTabId={handleClickGetTabId}
            />
          </Col>
          <Col xs="8">
            <TabList key={tabs[tabByIndex].id} listTabById={tabs[tabByIndex]} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Tab;
