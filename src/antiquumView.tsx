import { Antiquum } from "animautomata";
import Animautomaton from "animautomata/src/animautomaton";
import { AntiquumOps } from "animautomata/src/antiquum";
import React, { JSX, useEffect, useRef } from "react";

interface Props {
  ops?: Partial<AntiquumOps>;
  width: number;
  height: number;
}

export const AntiquumView = (props: Props): JSX.Element => {
  const { ops, width, height } = props;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animautomatonRef = useRef<Animautomaton | null>(null);
  useEffect(() => {
    if (canvasRef.current == null) return;
    animautomatonRef.current = new Antiquum(canvasRef.current.id, ops);
    animautomatonRef.current.play();
    return () => {
      animautomatonRef.current?.pause();
    };
  }, [ops]);

  return (
    <canvas
      ref={canvasRef}
      className={`Antiquum`}
      height={height}
      width={width}
    ></canvas>
  );
};
