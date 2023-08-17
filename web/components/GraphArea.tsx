import ArticleNode from "./ArticleNode";

export default function GraphArea() {
  return (
    <svg width="100%" height="500">
      <ArticleNode x={10} y={20} />
      <ArticleNode x={500} y={150} />
    </svg>
  );
}
