import { observer } from "mobx-react-lite";
import { ReactNode } from "react";

import { BpReactProps } from "@/shared/types";

import { sc } from "./Layout.styled";

interface IProps extends BpReactProps {
  renderModalLogin(): ReactNode;
}
export const Layout = observer((props: IProps) => {
  const { renderModalLogin } = props;
  return <sc.Layout>{renderModalLogin()}</sc.Layout>;
});
