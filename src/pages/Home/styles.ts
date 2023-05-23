import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;





 const BaseButton = styled.button`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 1.125rem 0;
   font-size: 1rem;
   border-radius: 8px;
   border: 0;
   gap: 0.5rem;
   transition: 0.3s all;
   color: ${({ theme }) => theme["gray-100"]};
 `;

export const StartButton = styled(BaseButton)`
  background: ${({ theme }) => theme["green-500"]};
  color: ${({ theme }) => theme.white};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme["green-700"]};
  }

  
`; 
export const StopButton = styled(BaseButton)`
  background: ${({ theme }) => theme["red-500"]};
  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme["red-700"]};
  }
`; 
