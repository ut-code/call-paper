/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { type positionType, type Paper } from "./calcNodesPos";
import { nodesStyle } from "./ArticleNode";

export type edge = {
  citeId: string;
  citedId: string;
  startX: number;
  startY: number;
  startControlX: number;
  startControlY: number;
  endControlX: number;
  endControlY: number;
  endX: number;
  endY: number;
};
export function EdgePos(nodePos: positionType, paps: Paper[]) {
  const edges: edge[] = [];
  for (const pap of paps) {
    const x1 = nodePos.get(pap.id)!.x;
    const y1 = nodePos.get(pap.id)!.y;
    const startX = x1 + nodesStyle.Width * 0.5;
    const startY = y1;
    const trueReferecedPaperIds = pap.referencedPaperIds.filter((papCitedId) =>
      paps.some((papTemp) => papTemp.id === papCitedId)
    );
    for (const papCiteId of trueReferecedPaperIds) {
      const x2 = nodePos.get(papCiteId)!.x;
      const y2 = nodePos.get(papCiteId)!.y;
      const endX = x2 + nodesStyle.Width * 0.5;
      const endY = y2 + nodesStyle.Height;
      edges.push({
        citeId: pap.id,
        citedId: papCiteId,
        startX,
        startY,
        startControlX: startX * 0.7 + endX * 0.1,
        startControlY: startY * 0.7 + endY * 0.1,
        endControlX: startX * 0.3 + endX * 0.9,
        endControlY: startY * 0.3 + endY * 0.9,
        endX,
        endY,
      });
    }
  }
  return edges;
}
