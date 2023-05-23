import { ReactNode, createContext, useState } from "react";

interface CreateCycleData{
  task:string;
  minutesAmount:number;
}

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CyclesContextType {
  activeCycle: Cycle | undefined;
  activeCyclesId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  interruptCurrentCycle: () => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CycleContextProvider({children}:CyclesContextProviderProps) {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCyclesId, setActiveCyclesId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
  const activeCycle = cycles.find((cycle) => cycle.id === activeCyclesId);

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCyclesId) {
          return { ...cycle, finishedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
  }

function interruptCurrentCycle() {
  setCycles((state) =>
    state.map((cycle) => {
      if (cycle.id === activeCyclesId) {
        return { ...cycle, interruptedDate: new Date() };
      } else {
        return cycle;
      }
    })
  );
  setActiveCyclesId(null);
}

function createNewCycle(data: CreateCycleData) {
  const id = String(new Date().getTime());
  const newCycle: Cycle = {
    id,
    task: data.task,
    minutesAmount: data.minutesAmount,
    startDate: new Date(),
  };

  setCycles((state) => [...state, newCycle]);
  setActiveCyclesId(id);
  setAmountSecondsPassed(0);

  reset();
}

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        activeCyclesId,
        amountSecondsPassed,
        setSecondsPassed,
        markCurrentCycleAsFinished,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
