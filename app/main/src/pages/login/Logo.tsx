import { css } from "@emotion/css";
import { Typography, Image, Space } from "antd";

const styles = {
  logo: css({
    textAlign: "center",
  }),
  title: css({
    fontSize: 30,
    fontWeight: "bold",
  }),
};

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Space align="center" direction="horizontal">
        <Image
          preview={false}
          height={62}
          width={62}
          src="https://s2.loli.net/2022/12/04/CS2GplwyUNmqZ7J.png"
        />
        <h3 className={styles.title}>CASTER FIBER</h3>
      </Space>
    </div>
  );
};
