/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { PaperInfo } from "../../src/App";

export type Paper = { id: string; year: number; referencedPaperIds: string[] };
// 以下のpapersはユーザーがgraphを作るために選択した論文リスト
export const papers: Paper[] = [
  { id: "0", year: 2004, referencedPaperIds: [] },
  { id: "1", year: 2005, referencedPaperIds: ["0"] },
  { id: "2", year: 2005, referencedPaperIds: ["1"] },
  { id: "3", year: 2005, referencedPaperIds: ["0"] },
  { id: "4", year: 2005, referencedPaperIds: ["3", "another"] },
  { id: "5", year: 2005, referencedPaperIds: ["2"] },
  { id: "6", year: 2005, referencedPaperIds: ["0"] },
  { id: "7", year: 2006, referencedPaperIds: ["2"] },
  { id: "7.5", year: 2006, referencedPaperIds: ["2"] },
  { id: "7.8", year: 2006, referencedPaperIds: ["2"] },
  { id: "8", year: 2007, referencedPaperIds: ["7"] },
  { id: "9", year: 2008, referencedPaperIds: ["3"] },
  { id: "10", year: 2008, referencedPaperIds: ["2"] },
  { id: "11", year: 2090, referencedPaperIds: ["3"] },
  { id: "12", year: 2010, referencedPaperIds: ["5"] },
  { id: "13", year: 2015, referencedPaperIds: ["7"] },
  { id: "14", year: 2012, referencedPaperIds: ["7"] },
  { id: "15", year: 2013, referencedPaperIds: ["7"] },
  { id: "16", year: 2014, referencedPaperIds: ["7"] },
  { id: "17", year: 2015, referencedPaperIds: ["7"] },
];

export function makePaps(paperInfos: PaperInfo[], selectedIds: string[]) {
  const papsRandom: Paper[] = [];
  for (const selectedId of selectedIds) {
    const pap = paperInfos.find((papTemp) => papTemp.id === selectedId)!;
    papsRandom.push({
      id: selectedId,
      year: pap.year,
      referencedPaperIds: pap.citations,
    });
  }
  const paps = papsRandom.sort((pap1, pap2) => pap1.year - pap2.year);
  return paps;
}

export type positionType = Map<string, { x: number; y: number }>;
const paperPositions: positionType = new Map();

const paper = papers[0]!;
paperPositions.get(paper.id)!;

function makeYears(paps: Paper[]) {
  const yearList: number[] = [paps[0]!.year];
  for (let index = 1; index < paps.length; index += 1) {
    if (yearList[yearList.length - 1]! < paps[index]!.year) {
      yearList.push(paps[index]!.year);
    }
  }
  return yearList;
}

function makeInitPos(paps: Paper[]) {
  const years: number[] = makeYears(paps);
  const papYears: number[] = [];
  let countYear = 0;
  let presentYear = 0;
  for (let i = 0; i < paps.length; i += 1) {
    papYears.push(paps[i]!.year);
  }

  for (let j = 0; j < papYears.length; j += 1) {
    if (presentYear === papYears[j]) {
      countYear += 1;
      paperPositions.set(paps[j]!.id, {
        x: countYear,
        y: years.indexOf(papYears[j]!),
      });
    } else {
      countYear = 0;
      paperPositions.set(paps[j]!.id, {
        x: countYear,
        y: years.indexOf(papYears[j]!),
      });
    }
    presentYear = papYears[j]!;
  }
  return paperPositions;
}

function Hamiltonian(pos: positionType, paps: Paper[]) {
  let Ham = 0.0;
  for (const [i, pap] of paps.entries()) {
    const trueReferecedPaperIds = pap.referencedPaperIds.filter((papCitedId) =>
      paps.some((papTemp) => papTemp.id === papCitedId)
    );
    for (const cite of trueReferecedPaperIds) {
      Ham += Math.sqrt(
        (pos.get(paps[i]!.id)!.x -
          pos.get(paps.find((papTemp) => papTemp.id === cite)!.id)!.x) **
          2 +
          (pos.get(paps[i]!.id)!.y -
            pos.get(paps.find((papTemp) => papTemp.id === cite)!.id)!.y) **
            2
      );
    }
  }
  return Ham;
}
function posChange(pos: positionType, paps: Paper[], i: number) {
  if (pos.get(paps[i + 1]!.id)!.y === pos.get(paps[i]!.id)!.y) {
    // const a = [pos[i + 1]![0]!, pos[i]![0]!];
    [pos.get(paps[i]!.id)!.x, pos.get(paps[i + 1]!.id)!.x] = [
      pos.get(paps[i + 1]!.id)!.x,
      pos.get(paps[i]!.id)!.x,
    ];
  } else {
    pos.get(paps[i]!.id)!.x += 1;
  }
}

export function calcNodesPos(paps: Paper[]) {
  let pos = makeInitPos(paps);
  const iteration = 70;
  for (let n = 0; n < iteration; n += 1) {
    const presentPos = structuredClone(pos);
    for (let i = 0; i < (n / iteration) * 0.5 * paps.length; i += 1) {
      const arbitraryIndex: number = Math.floor(
        Math.random() * (paps.length - 2)
      );
      posChange(presentPos, paps, arbitraryIndex);
    }
    if (Hamiltonian(presentPos, paps) < Hamiltonian(pos, paps)) {
      pos = presentPos;
    }
  }
  return pos;
}
