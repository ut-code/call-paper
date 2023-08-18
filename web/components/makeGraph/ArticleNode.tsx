type ArticleNodeProps = {
  x: number;
  y: number;
};
export const nodesStyle={
  Width:0.5,
  Height:0.5,
}
export const scale:number=50
export default function ArticleNode(props: ArticleNodeProps): JSX.Element {
  const { x, y } = props;

  return (
    <>
      <rect
        x={x}
        y={y}
        width={nodesStyle.Width*scale}
        height={nodesStyle.Height*scale}
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
