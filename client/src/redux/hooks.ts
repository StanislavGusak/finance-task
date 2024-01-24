import { useEffect, useRef } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "./store";
import { socket } from "../socket/socket";
import { TickerType } from "../types/types";
import { setAvailableTicker } from "./TickersSlice";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useSocketConnection = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    socket.connect();
    socket.emit("start");
    socket.on("ticker", (response: TickerType[]) => {
      dispatch(setAvailableTicker(response));
    });
    return () => {
      socket.close();
    };
  }, [dispatch]);
};

export const usePrevPrice = (value: number): number | undefined => {
  const ref = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (ref.current === undefined) {
      ref.current = value;
    } else {
      ref.current = value;
    }
  }, [value]);

  return ref.current;
};
