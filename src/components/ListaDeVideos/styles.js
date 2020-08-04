import styled from "vue-styled-components";

export const ListaContainer = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  background-size: cover;
  background-position: center;
  filter: blur(0px);
  .container {
    height: 152px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    button {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
    }
  }
`;

export const Lista = styled.ul`
  position: absolute;
  margin: 0;
  padding-left: 100px;
  display: flex;
  flex-flow: row nowrap;
  transition: all 0.5s ease-in-out;
`;

export const Video = styled.li`
  margin: 10px 5px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  list-style: none;
  width: 200px;
  height: calc(150px - 20px);
  border-radius: 5px;
  /* filter: blur(1px); */
`;

export const PreviousCarrousel = styled.button`
  left: 20px;
`;

export const NextCarrousel = styled.button`
  right: 20px;
`;
