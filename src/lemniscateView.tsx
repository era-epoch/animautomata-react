import Animautomaton from "animautomata/src/animautomaton";
import Lemniscate, { LemniscateOps } from "animautomata/src/lemniscate";
import React, { JSX, useEffect, useRef } from "react";

interface Props {
  ops?: Partial<LemniscateOps>;
  width: number;
  height: number;
}

export const LemniscateView = (props: Props): JSX.Element => {
  const { ops, width, height } = props;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animautomatonRef = useRef<Animautomaton | null>(null);
  useEffect(() => {
    if (canvasRef.current == null) return;
    animautomatonRef.current = new Lemniscate(canvasRef.current.id, ops);
    animautomatonRef.current.play();
    return () => {
      animautomatonRef.current?.pause();
    };
  }, [ops]);

  return (
    <canvas
      ref={canvasRef}
      className={`Lemniscate`}
      height={height}
      width={width}
    ></canvas>
  );
};
