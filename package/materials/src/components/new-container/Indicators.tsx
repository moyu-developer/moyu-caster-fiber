import { css } from "@emotion/css";
import { theme } from 'antd'

const { useToken } = theme

export interface IndicatorsProps {
  bound?: string;
  show?: boolean;
}

export const IndicatorRound: React.FC<IndicatorsProps> = (props) => {
  const { token } = useToken()

  if (!props.show) return null

  return (
    <div className={css({
      position: "absolute",
      top: 0,
      left: 0,
      width: `100%`,
      height: `100%`,
      pointerEvents: "none",
      ["& > span"]: css({
        position: "absolute",
        width: 10,
        height: 10,
        background: "#FFF",
        borderRadius: '100%',
        display: "block",
        boxShadow: `0px 0px 12px -1px rgba(0, 0, 0, 0.25)`,
        zIndex: 5,
        pointerEvents: "none",
        border: `2px solid ${token.colorPrimary}`,
        ["&:nth-child(1)"]: props.bound
          ? props.bound === "row"
            ? {
                left: "50%",
                top: -5,
                transform: `translateX(-50%)`,
              }
            : {
                top: `50%`,
                left: -5,
                transform: `translateY(-50%)`,
              }
          : {
              left: -5,
              top: -5,
            },
        ["&:nth-child(2)"]: {
          right: -5,
          top: -5,
          display: props.bound ? "none" : "block",
        },
        ["&:nth-child(3)"]: props.bound
          ? props.bound === "row"
            ? {
                left: "50%",
                bottom: -5,
                transform: `translateX(-50%)`,
              }
            : {
                bottom: `50%`,
                left: -5,
                transform: `translateY(-50%)`,
              }
          : {
              left: -5,
              bottom: -5,
            },
        ["&:nth-child(4)"]: {
          bottom: -5,
          right: -5,
          display: props.bound ? "none" : "block",
        },
      }),
    })}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
