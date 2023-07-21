import { observer } from "mobx-react-lite";

import { BpReactProps } from "@/shared/types";
import { RootStore } from "@/stores/rootStore";

import { ModalLogin } from "../modalLogin /ModalLogin";
import { sc } from "./Layout.styled";

interface IProps extends BpReactProps {
    driver: RootStore
}
export const Layout = observer((props: IProps) => {
    const { modalLoginStore } = props.driver;
    return (
      <sc.Layout>
        {
            modalLoginStore?.isModalLoginVisible ? <ModalLogin driver={modalLoginStore} /> : <></>
        }
      </sc.Layout>
);
});
