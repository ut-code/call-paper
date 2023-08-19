/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Box from "@mui/material/Box";

import ArticleNode, {
  scaleX,
  scaleY,
  nodesStyle,
} from "./makeGraph/ArticleNode";
import {
  calcNodesPos,
  papers,
  type Paper,
  type positionType,
} from "./makeGraph/calcNodesPos";
import { type edge, EdgePos } from "./makeGraph/calcEdgePos";

const paps: Paper[] = papers;
// for (let index = 0; index < 10; index++) {
//   writePaper(paps)
// }
const pos: positionType = calcNodesPos(paps);
const maxX =
  Array.from(pos.values()).reduce((max, position) => {
    return Math.max(max, position.x);
  }, -Infinity) + nodesStyle.Width;
const maxY =
  Array.from(pos.values()).reduce((max, position) => {
    return Math.max(max, position.y);
  }, -Infinity) + nodesStyle.Height;
const edges: edge[] = EdgePos(pos, paps);
export default function GraphArea() {
  // for (let index = 0; index < paps.length; index++) {
  //   console.log(pos.get(paps[index]!.id));

  // }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%", // todo: 動的に決定する
        bgcolor: "background.paper",
        overflow: "scroll",
      }}
    >
      <svg viewBox={`0 0 ${maxX * scaleX} ${maxY * scaleY}`}>
        {edges.map((edge) => (
          <path
            d={`M ${edge.startX * scaleX} ${edge.startY * scaleY} C ${
              edge.startControlX * scaleX
            } ${edge.startControlY * scaleY}, ${edge.endControlX * scaleX} ${
              edge.endControlY * scaleY
            }, ${edge.endX * scaleX} ${edge.endY * scaleY}`}
            stroke="black"
            fill="transparent"
          />
        ))}
        {paps.map((pap) => (
          <ArticleNode
            key={pap.id}
            x={pos.get(pap.id)!.x * scaleX}
            y={pos.get(pap.id)!.y * scaleY}
            author="Liang Fu, C. Kane"
            publisher="Phys. Rev. Lett."
          />
        ))}
      </svg>
    </Box>
  );
}
