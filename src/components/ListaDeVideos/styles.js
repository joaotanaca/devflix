import styled from "vue-styled-components";

export const ListaContainer = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  background-size: cover;
  background-position: center;
  filter: blur(0px);
`;

export const Lista = styled.ul`
  position: absolute;
  bottom: 20px;
  margin: 0;
  padding: 0;
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
