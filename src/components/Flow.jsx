"use client";
import React, { useMemo } from "react";
// import ReactFlow from "reactflow";
import ReactFlow from "react-flow-renderer";
import "reactflow/dist/style.css";

const nodesList = [
  {
    id: "1",
    type: "input",
    data: {
      label: "Software Developer",
    },
    position: { x: 400, y: 100 },
  },
  {
    id: "2",
    type: "output",
    data: {
      label: "React",
    },
    position: { x: 200, y: 300 },
  },
  {
    id: "3",
    type: "output",
    data: {
      label: "Next js",
    },
    position: { x: 600, y: 300 },
  },
  {
    id: "4",
    type: "output",
    data: {
      label: "Django",
    },
    position: { x: 400, y: 300 },
  }
];

const edgesList = [{ id: "el", source: "1", target: "2", animated: true },
{ id: "el2", source: "1", target: "3", animated: true },
{ id: "el3", source: "1", target: "4", animated: true }

];

function Flow() {
  const edges = useMemo(() => edgesList, []);
  const nodes = useMemo(() => nodesList, []);

  return (
    <div className="h-96">
      <ReactFlow nodes={nodes} edges={edges} className="bg-grey-50" />
    </div>
  );
}

export default Flow;
