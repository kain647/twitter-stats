import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
`;
export const WidgetContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 300px;
  padding: 20px;
  background-color: #eee;
  border-radius: 10px;
  border: 2px solid #b5b7b5;
  flex-direction: row;
  margin-bottom: 15px;
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Icon = styled.div`
  display: flex;
  margin-right: 20px;
  flex: 0 0 auto;
  background-size: 100%;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  background-image: ${({ icon }) => `url(${icon})`};
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  display: flex;
  font-size: 14px;
`;
export const Subtitle = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 600;
`;
