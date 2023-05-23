import styled from "styled-components";

export const CountdownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme["gray-100"]};

  display: flex;
  gap: 1rem;

  span {
    background: ${({ theme }) => theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
    user-select: none;
  }

  @media (max-width: 655px) {
    font-size: 4.8rem;
    line-height: 5rem;
    gap: 0.5rem;
    span {
      padding: 0;
    }
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${({ theme }) => theme["green-500"]};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  user-select: none;

  @media (max-width: 655px) {
    padding: 0;
  }
`;
