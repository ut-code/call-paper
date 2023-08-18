import ArticleNode from "./makeGraph/ArticleNode";
import {scaleX,scaleY} from "./makeGraph/ArticleNode";
import {calcNodesPos,papers,type Paper,type positionType} from "./makeGraph/calcNodesPos"
import { type edge,EdgePos } from "./makeGraph/calcEdgePos";

const paps : Paper[] = papers;
// for (let index = 0; index < 10; index++) {
//   writePaper(paps)  
// }
const pos:positionType = calcNodesPos(paps)
const edges:edge[]=EdgePos(pos,paps)
export default function GraphArea() {
  // for (let index = 0; index < paps.length; index++) {
  //   console.log(pos.get(paps[index]!.id));
    
  // }
  
  return (
    <svg width="100%" height="100vh">
      {/* <ArticleNode x={10} y={20} />
      <ArticleNode x={500} y={150} /> */}
      
      {
        edges.map((edge)=>(
<path d={`M ${edge.startX*scaleX} ${edge.startY*scaleY} C ${edge.startControlX*scaleX} ${edge.startControlY*scaleY}, ${edge.endControlX*scaleX} ${edge.endControlY*scaleY}, ${edge.endX*scaleX} ${edge.endY*scaleY}`} stroke="black" fill="transparent"/>
        ))
      }
      {
        paps.map((pap) => (
          <ArticleNode key={pap.id} x={pos.get(pap.id)!.x*scaleX} y={pos.get(pap.id)!.y*scaleY} author="Liang Fu, C. Kane" title="LK-99 isn't a superconductor — how science sleuths solved the mystery" publisher="Phys. Rev. Lett."/>
        ))
      }
      
    </svg>
  );
}
