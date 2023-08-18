type ArticleNodeProps = {
  x: number;
  y: number;
  author:string;
  title:string;
  publisher:string;
};

export const nodesStyle={
  Width:0.9,
  Height:0.4,
}
export const scaleX:number=window.parent.screen.width*0.16
export const scaleY:number=window.parent.screen.height*0.2
export default function ArticleNode(props: ArticleNodeProps): JSX.Element {
  const { x, y,author,title,publisher } = props;

  return (
    <>
      <rect
        x={x}
        y={y}
        width={nodesStyle.Width*scaleX}
        height={nodesStyle.Height*scaleY}
        stroke="black"
        strokeWidth="2"
        fill="white"
      />
      {/* <text x={x + 10} y={y + 20} fontFamily="Arial" fontSize="16" fill="black">
        title
      </text> */}
      <text x={x + 0.02*scaleX} y={y + 0.15*scaleY} fontFamily="Arial" fontSize="16" fill="black">
        {author}
      </text>
      <text x={x + 0.02*scaleX} y={y + 0.35*scaleY} fontFamily="Arial" fontSize="16" fill="black">
        {publisher}
      </text>
    </>
  );
}
