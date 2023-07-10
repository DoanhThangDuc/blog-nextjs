import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";

import { bpBlackOlive, bpRaisinBlack, bpRifleGreen } from "@/shared/color";

export namespace sc {
  export const ModalLogin = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid black;
    align-items: center;
    width: 320px;
    height: 380px;
  `;
  export const Container = styled.div`
    width: 290px;
    height: 350px;
  `;
  export const IconContainer = styled.div`
    display: flex;
    justify-content: flex-end;
  `;
  export const CloseIcon = styled(IoClose)`
    color: ${bpRaisinBlack};
    font-size: 20px;
    cursor: pointer;
  `;

  export const Title = styled.p`
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: ${bpBlackOlive};
  `;
  export const LoginForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
  `;
  export const Input = styled.input`
    margin-bottom: 10px;
    height: 30px;
    border: 1px solid ${bpRaisinBlack};
    border-radius: 3px;
    color: ${bpRaisinBlack};
    font-size: 12px;
    padding-left: 6px;
  `;
  export const Button = styled.button`
    margin-top: 10px;
    height: 30px;
    border: 1px solid ${bpRaisinBlack};
    border-radius: 15px;
    color: ${bpBlackOlive};
    font-size: 15px;

    &:hover {
      background-color: ${bpRifleGreen};
      border: 1px solid #fff;
      color: #fff;
      cursor: pointer;
    }
  `;
  export const Socials = styled.div``;
  export const SocialTitle = styled.p`
    text-align: center;
    color: ${bpRaisinBlack};
    font-size: 14px;
  `;
  export const Icons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    align-items: center;
    color: ${bpRifleGreen};
    font-size: 22px;
    & > * {
      margin-right: 10px;
    }
  `;
  export const SocialIconTwitter = styled(AiFillTwitterCircle)`
    &:hover {
      background-color: ${bpRifleGreen};
      color: #fff;
      cursor: pointer;
    }
  `;
  export const SocialIconFacebook = styled(FaFacebook)`
    &:hover {
      background-color: ${bpRifleGreen};
      color: #fff;
      cursor: pointer;
    }
  `;
  export const SocialIconLinkin = styled(ImLinkedin)`
    &:hover {
      background-color: ${bpRifleGreen};
      color: #fff;
      cursor: pointer;
    }
  `;
  export const TagLine = styled.div`
    width: 100%;
    border-bottom: 1px solid ${bpRifleGreen};
    margin: 30px 0 10px;
  `;
  export const SignUp = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;

    & > * {
      margin: 0px;
    }
  `;
  export const Member = styled.p`
    color: ${bpRaisinBlack};
    text-align: center;
    text-decoration: none;
  `;
  export const SignUpLink = styled.div`
    color: ${bpRaisinBlack};
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    padding-left: 2px;

    &:hover {
      text-decoration: underline;
    }
  `;
}
