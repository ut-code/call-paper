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
            let x2=nodePos.get(papCiteId)!.x
            let y2=nodePos.get(papCiteId)!.y
            let endX=x2+nodesStyle.Width*0.5
            let endY=y2+nodesStyle.Height
            edges.push({citeId:pap.id,citedId:papCiteId,startX:startX,startY:startY,startControlX:(startX+endX*2)*0.33,startControlY:(startY+endY*2)*0.33,endControlX:(startX*2+endX)*0.3,endControlY:(startY*2+endY)*0.33,endX:endX,endY:endY})
        }
        
    }
    return edges
}