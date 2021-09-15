import styled from 'styled-components';
import { ReactComponent as Close } from '../../assets/icons/close.svg';

export const Text = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

export const AuthWrapper = styled('div')`
  display: flex;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
`;

AuthWrapper.Left = styled.div`
  width: 768px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 0;
  font-weight: 600;

  @media (max-width: 960px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    padding: 120px 0 80px 0;
  }
`;

AuthWrapper.Right = styled.div`
  flex-grow: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AuthHeader = styled.div`
  text-align: center;
  color: #181c32;
`;

export const AuthForm = styled.form`
  margin: auto 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 12px;
  width: 100%;
  max-width: 400px;

  @media (max-width: 600px) {
    padding: 0 1rem;
    width: calc(100vw - 2rem);
  }
  button {
    margin-bottom: 32px;
  }
`;

export const TextCenter = styled.div`
  text-align: center;
`;

export const AuthFooter = styled.div`
  div {
    line-height: 20px;
    text-align: center;
  }
  span {
    text-decoration: underline;
    color: #181c32;
  }
`;

export const ResetPassword = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;
export const PassWordModal = styled.div`
  position: absolute;
  display: ${(props) => (props.isOpen ? 'grid' : 'none')};
  align-items: center;
  justify-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all linear 0.4s;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  height: 30vh;
  background-color: #fff;
  border-radius: 8px;
`;
export const ModalContainer = styled.div`
  display: flex;
  height: 15vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

Container.Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 1px solid #ebebf3;
`;
Container.Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CloseIcon = styled(Close)`
  fill: #9d9d9d;
  margin-right: 20px;
  cursor: pointer;
`;
