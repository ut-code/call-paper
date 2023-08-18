import ArticleNode from "./makeGraph/ArticleNode";
import {scale} from "./makeGraph/ArticleNode";
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
    <svg width="100%" height="500">
      {/* <ArticleNode x={10} y={20} />
      <ArticleNode x={500} y={150} /> */}
      
      {
        edges.map((edge)=>(
<path d={`M ${edge.startX*scale} ${edge.startY*scale} C ${edge.startControlX*scale} ${edge.startControlY*scale}, ${edge.endControlX*scale} ${edge.endControlY*scale}, ${edge.endX*scale} ${edge.endY*scale}`} stroke="black" fill="transparent"/>
        ))
      }
      {
        paps.map((pap) => (
          <ArticleNode key={pap.id} x={pos.get(pap.id)!.x*scale} y={pos.get(pap.id)!.y*scale}/>
        ))
      }
      
    </svg>
  );
}
