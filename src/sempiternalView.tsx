import { Sempiternal } from "animautomata";
import Animautomaton from "animautomata/src/animautomaton";
import { SempiternalOps } from "animautomata/src/sempiternal";
import React, { JSX, useEffect, useRef } from "react";

interface Props {
  ops?: Partial<SempiternalOps>;
  width: number;
  height: number;
}

export const SempiternalView = (props: Props): JSX.Element => {
  const { ops, width, height } = props;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animautomatonRef = useRef<Animautomaton | null>(null);
  useEffect(() => {
    if (canvasRef.current == null) return;
    animautomatonRef.current = new Sempiternal(canvasRef.current.id, ops);
    animautomatonRef.current.play();
    return () => {
      animautomatonRef.current?.pause();
    };
  }, [ops]);

  return (
    <canvas
      ref={canvasRef}
      className={`Sempiternal`}
      height={height}
      width={width}
    ></canvas>
  );
};
