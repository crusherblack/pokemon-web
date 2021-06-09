import styled from "@emotion/styled";
//asik juga makenya tapi dah terlanjur make material UI, kedepan enak juga make ini
//dekat banget sama CSS native, CSS Native is the best

const Button = styled.button`
  background: #52b69a;
  border: 3px solid yellow;
  padding: 10px 20px;
  min-width: 190px;
  color: yellow;
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
  text-transform: capitalize;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export default Button;
