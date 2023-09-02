// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from "uuid";
import type { PaperInfo } from "../../src/App";

function contentInBraket(text: string) {
  let content = "";
  let numOfBra = 0;
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === "{") {
      numOfBra += 1;
    } else if (text[i] === "}") {
      numOfBra -= 1;
      if (numOfBra === 0) {
        return content;
      }
    } else {
      content += text[i];
    }
  }
  return "括弧が閉じていません";
}

function sliceProperty(propertyName: string, fileString: string) {
  const lengthOfpropertyName = propertyName.length;
  const startIndex =
    fileString.indexOf(propertyName) + lengthOfpropertyName + 1;
  const contentIncludingEq = fileString.slice(startIndex);
  const contentStartIndex = contentIncludingEq.indexOf("=") + 1;
  const content = contentInBraket(contentIncludingEq.slice(contentStartIndex));
  if (propertyName === "author") {
    const andIndex = content.indexOf(" and ");
    const firstAuthor = content.substring(0, andIndex);
    return firstAuthor;
  }
  return content;
}

export default function fileToPaperInfo(fileText: string) {
  const fileString = fileText;
  const uniqueId = uuidv4();
  const paper: PaperInfo = {
    id: uniqueId,
    author: sliceProperty("author", fileString) ?? "",
    title: sliceProperty("title", fileString) ?? "",
    year: Number(sliceProperty("year", fileString)) ?? "",
    journal: sliceProperty("journal", fileString) ?? "",
    tags: [],
    citations: [],
    citedBy: [],
  };
  return paper;
}
