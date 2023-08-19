/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Box from "@mui/material/Box";

import ArticleNode, {
  scaleX,
  scaleY,
  nodesStyle,
} from "./makeGraph/ArticleNode";
import {
  calcNodesPos,
  type Paper,
  type positionType,
  makePaps,
} from "./makeGraph/calcNodesPos";
import { type edge, EdgePos } from "./makeGraph/calcEdgePos";
import defaultPaperInfos from "./defaultPaperInfos";

// for (let index = 0; index < 10; index++) {
//   writePaper(paps)
// }

export default function GraphArea() {
  // for (let index = 0; index < paps.length; index++) {
  //   console.log(pos.get(paps[index]!.id));

  // }
  const selectedIds: string[] = ["1", "2", "3", "4", "5", "6", "7"];

  const paps: Paper[] = makePaps(defaultPaperInfos, selectedIds);
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
  const padX = 0.0;
  const padY = 0.0;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%", // todo: 動的に決定する
        bgcolor: "background.paper",
        overflow: "scroll",
      }}
    >
      <svg
        width={`${(maxX + padX) * scaleX}`}
        height={`${(maxY + padY) * scaleY}`}
        viewBox={`-10 -10 ${maxX * scaleX + 20} ${maxY * scaleY + 20}`}
      >
        {edges.map((edge) => (
          <path
            d={`M ${(edge.startX + padX) * scaleX} ${
              (edge.startY + padY) * scaleY
            } C ${(edge.startControlX + padX) * scaleX} ${
              (edge.startControlY + padY) * scaleY
            }, ${(edge.endControlX + padX) * scaleX} ${
              (edge.endControlY + padY) * scaleY
            }, ${(edge.endX + padX) * scaleX} ${(edge.endY + padY) * scaleY}`}
            stroke="black"
            fill="transparent"
          />
        ))}
        {paps.map((pap) => (
          <ArticleNode
            key={pap.id}
            x={(pos.get(pap.id)!.x + padX) * scaleX}
            y={(pos.get(pap.id)!.y + padY) * scaleY}
            author={
              defaultPaperInfos.find((papTemp) => papTemp.id === pap.id)!.author
            }
            publisher={
              defaultPaperInfos.find((papTemp) => papTemp.id === pap.id)!
                .journal
            }
            year={
              defaultPaperInfos.find((papTemp) => papTemp.id === pap.id)!.year
            }
          />
        ))}
      </svg>
    </Box>
  );
}
