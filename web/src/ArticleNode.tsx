type ArticleNodeProps = {
  x: number;
  y: number;
};

export default function ArticleNode(props: ArticleNodeProps): JSX.Element {
  const { x, y } = props;
  return (
    <>
      <rect
        x={x}
        y={y}
        width="200"
        height="200"
        stroke="black"
        strokeWidth="2"
        fill="none"
      />
      <text x={x + 10} y={y + 20} fontFamily="Arial" fontSize="16" fill="black">
        title
      </text>
      <text x={x + 10} y={y + 40} fontFamily="Arial" fontSize="16" fill="black">
        author
      </text>
    </>
  );
}
