import { Button, Input, Typography } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { posturlData } from "../Redux/actions";
import styles from "../styles/styles.module.css";

const ShortUrl = () => {
  const [value, setvalue] = useState("");
  const dispatch = useDispatch();
  const { urlData, urlDataLoading } = useSelector((state) => state);
  const { Text } = Typography;

  const handleShortUrl = () => {
    dispatch(posturlData(value, setvalue));
  };
  return (
    <div style={{ height: "80svh", padding: 10, background: "#dddddd" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "",
          margin: "auto",
        }}
      >
        <Input
          style={{ maxWidth: "300px" }}
          placeholder="Input your url here..."
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
        <Button
          loading={urlDataLoading}
          disabled={!value}
          onClick={handleShortUrl}
          type="primary"
        >
          Short Url
        </Button>
      </div>
      <div className={styles.gridBox}>
        {urlData && urlData.length > 0 && (
          <>
            <h3 style={{ color: "black" }}>Copy And use/share</h3>
            {urlData?.map((el, ind) => (
              <div
                style={{
                  maxWidth: "200px",
                  margin: "auto",
                  marginTop: "10px",
                  textAlign: "center",
                  background: "#ffff",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <Text
                  copyable={{
                    text: `https://url-shortner-04u5.onrender.com/url/${el?.id}`,
                  }}
                >
                  https://url-shortner-04u5.onrender.com/url/{el?.id}
                </Text>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ShortUrl;
