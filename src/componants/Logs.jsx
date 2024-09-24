import { Spin, Table, Typography } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { geturlData } from "../Redux/actions";
import moment from "moment";

const Logs = () => {
  const dispatch = useDispatch();
  const { analyticalData, urlDataLoading } = useSelector((state) => state);
  const { Text } = Typography;

  useEffect(() => {
    dispatch(geturlData());
  }, [dispatch]);

  const columns = [
    {
      title: "Short ID",
      dataIndex: "shortId",
      key: "shortId",
      render: (shortId) => {
        return (
          <div>
            <Text
              copyable={{
                text: `https://url-shortner-04u5.onrender.com/url/${shortId}`,
              }}
            >
              {shortId}
            </Text>
          </div>
        );
      },
    },
    {
      title: "Original URL",
      dataIndex: "redirectUrl",
      key: "redirectUrl",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) =>
        moment(createdAt).format("ddd D YYYY [at] hh:mm:ss A"),
    },
    // {
    //   title: 'Total Visits',
    //   dataIndex: 'visitHistory',
    //   key: 'totalVisits',
    //   render: visitHistory => visitHistory.length
    // },
  ];

  return (
    <div>
      {urlDataLoading ? (
        <div
          style={{
            height: "75vh",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <div style={{ height: "75vh" }}>
          <Table
            columns={columns}
            dataSource={analyticalData && analyticalData}
            pagination={false}
            scroll={{ y: true }}
          />
        </div>
      )}
    </div>
  );
};

export default Logs;
