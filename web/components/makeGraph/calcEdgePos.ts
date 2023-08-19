import {type positionType,type Paper} from "./calcNodesPos"
import {nodesStyle} from "./ArticleNode"


export type edge ={citeId:string, citedId:string,startX:number,startY:number,startControlX:number,startControlY:number,endControlX:number,endControlY:number,endX:number,endY:number}
export function EdgePos(nodePos:positionType,paps:Paper[]) {
    const edges:edge[]=[]
    for (const pap of paps) {
        let x1=nodePos.get(pap.id)!.x
        let y1=nodePos.get(pap.id)!.y
        let startX=x1+nodesStyle.Width*0.5
        let startY=y1
        for (const papCiteId of pap.referencedPaperIds) {
            if (paps.find((pap)=>pap.id===papCiteId)===undefined) {
                continue
            }    
            let x2=nodePos.get(papCiteId)!.x
            let y2=nodePos.get(papCiteId)!.y
            let endX=x2+nodesStyle.Width*0.5
            let endY=y2+nodesStyle.Height
            edges.push({citeId:pap.id,citedId:papCiteId,startX:startX,startY:startY,startControlX:startX*0.7+endX*0.1,startControlY:startY*0.7+endY*0.1,endControlX:startX*0.3+endX*0.9,endControlY:startY*0.3+endY*0.9,endX:endX,endY:endY})
        }
        
    }
    return edges
}