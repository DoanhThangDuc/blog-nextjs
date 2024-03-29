import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";

import { bpBlackOlive, bpRaisinBlack, bpRifleGreen } from "@/shared/color";

export namespace sc {
  export const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
    background-color: rgba(0,0,0,0.4); 
    overflow: hidden;
  `;

export const ModalLogin = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
border-radius: 10px;
width: 320px;
height: 380px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

/* Add Animation */
@-webkit-keyframes animatetop {
  from {
    position: absolute;
    top: -300px;
    opacity: 0;
  }
  to {
    top: 30%; /* Adjust the final position */
    opacity: 1;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 30%; /* Adjust the final position */
    opacity: 1;
  }
}

-webkit-animation-name: animatetop;
-webkit-animation-duration: 0.8s; /* Increase the duration */
-webkit-animation-timing-function: ease; /* Use ease or ease-in-out */
animation-name: animatetop;
animation-duration: 0.8s; /* Increase the duration */
animation-timing-function: ease; /* Use ease or ease-in-out */
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
