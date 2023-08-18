export type Paper = { id:string, year: number, referencedPaperIds: string[] };
//以下のpapersはユーザーがgraphを作るために選択した論文リスト
export const papers: Paper[] = [
    { id: "0", year: 2004, referencedPaperIds: [] },
    { id: "1", year: 2005, referencedPaperIds: ["0"] },
    { id: "2", year: 2005, referencedPaperIds: ["1"] },
    { id: "3", year: 2005, referencedPaperIds: ["0"] },
    { id: "4", year: 2005, referencedPaperIds: ["3"] },
    { id: "5", year: 2005, referencedPaperIds: ["2"] },
    { id: "6", year: 2005, referencedPaperIds: ["0"] },
    { id: "7", year: 2006, referencedPaperIds: ["2"] },
    { id: "8", year: 2007, referencedPaperIds: ["7"] },
    { id: "9", year: 2008, referencedPaperIds: ["3"] },
    { id: "10", year: 2008, referencedPaperIds: ["2"] },
    { id: "11", year: 2008, referencedPaperIds: ["3"] },
    { id: "12", year: 2008, referencedPaperIds: ["5"] },
    { id: "13", year: 2008, referencedPaperIds: ["7"] },
]

export type positionType=Map<string, { x: number; y: number }>;
const paperPositions: positionType = new Map();


const paper = papers[0]!;
paperPositions.get(paper.id)!

// export function writePaper(paps:Paper[]) {
//     // const year:number = Math.floor(Math.random() * 2);
//     const year:number = Math.floor(Math.random() * 2)+paps[paps.length-1]!.year;
//     const citeNum:number = Math.floor(Math.random() * paps.length-2);
//     const citeList:number[] = [];
//     for (let i = 0; i < citeNum; i++) {
//         citeList.push(Math.floor(Math.random() * citeNum+1))        
//     }
//     paps.push({id:crypto.randomUUID(),year:year,referencedPaperIds:citeList})    
// }


function makeYears(paps:Paper[]) {
    const yearList: number[] =[paps[0]!.year]
    for (let index = 1; index < paps.length; index++) {
        if (yearList[yearList.length-1]!<paps[index]!.year) {
                yearList.push(paps[index]!.year)
            }
    }
    return yearList
}

function makeInitPos(paps:Paper[]) {
    const years:number[]=makeYears(paps)
    const papYears:number[]=[]
    let countYear:number=0
    let presentYear:number=0
    for (let i = 0; i < paps.length; i++) {
        papYears.push(paps[i]!.year)
        
    }

    for (let j = 0; j < papYears.length; j++) {
        if (presentYear===papYears[j]) {
            countYear+=1
            paperPositions.set(paps[j]!.id,{x:countYear,y:years.indexOf(papYears[j]!)})
            
        } else {
            countYear=0
            paperPositions.set(paps[j]!.id,{x:countYear,y:years.indexOf(papYears[j]!)})  
        }
        presentYear = papYears[j]!
        
    }
    return paperPositions

    
}

function Hamiltonian(pos:positionType,paps:Paper[]) {
    let Ham:number=0.0
    for (let i = 0; i < paps.length; i++) {
        for (let cite of paps[i]!.referencedPaperIds) {
            if (paps.find((pap)=>pap.id===cite)===undefined) {
                continue
            }    
            Ham+=Math.sqrt((pos.get(paps[i]!.id)!.x -pos.get(paps.find((pap)=>pap.id===cite)!.id)!.x )**2+(pos.get(paps[i]!.id)!.y -pos.get(paps.find((pap)=>pap.id===cite)!.id)!.y)**2 )
        }
        
    }
    return Ham    
}
function posChange(pos: positionType,paps:Paper[] ,i: number) {
    if (pos.get(paps[i+1]!.id)!.y === pos.get(paps[i]!.id)!.y) 
    {
        // const a = [pos[i + 1]![0]!, pos[i]![0]!];
        [pos.get(paps[i]!.id)!.x, pos.get(paps[i+1]!.id)!.x] = [pos.get(paps[i+1]!.id)!.x, pos.get(paps[i]!.id)!.x];
    } else {
        pos.get(paps[i]!.id)!.x += 1;
    }
}


export function calcNodesPos(paps:Paper[]) {
    let pos = makeInitPos(paps)
    const iteration = 50;
    for (let n = 0; n < iteration; n++) {
        let present_pos = structuredClone(pos);
        for (let i = 0; i < n/iteration*0.5*paps.length; i++) {
            const arbitrary_index: number = Math.floor(Math.random() * (paps.length-2)); 
            posChange(present_pos,paps,arbitrary_index)
        }
        if (Hamiltonian(present_pos,paps)<Hamiltonian(pos,paps)) {
            pos=present_pos
        }
    }
    return(
        pos
    );
    
}

