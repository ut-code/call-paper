type ArticleNodeProps = {
  x: number;
  y: number;
  author: string;
  publisher: string;
  year: number;
};

export const nodesStyle = {
  Width: 0.9,
  Height: 0.4,
};
// export const scaleX: number = window.parent.screen.width * 0.16;
// export const scaleY: number = window.parent.screen.height * 0.2;
export const scaleX: number = 1280 * 0.16;
export const scaleY: number = 720 * 0.2;
export default function ArticleNode(props: ArticleNodeProps): JSX.Element {
  const { x, y, author, publisher, year } = props;

  return (
    <>
      <rect
        x={x}
        y={y}
        width={nodesStyle.Width * scaleX}
        height={nodesStyle.Height * scaleY}
        rx="8"
        stroke="gray"
        strokeWidth="1"
        fill="white"
      />
      {/* <text x={x + 10} y={y + 20} fontFamily="Arial" fontSize="16" fill="black">
        title
      </text> */}
      <text
        x={x + 0.04 * scaleX}
        y={y + 0.15 * scaleY}
        fontFamily="Arial"
        fontSize="14"
        fill="gray"
      >
        {publisher}
      </text>
      <text
        x={x + 0.04 * scaleX}
        y={y + 0.32 * scaleY}
        fontFamily="Arial"
        fontSize="18"
        fill="black"
      >
        {author},{year}
      </text>
    </>
  );
}
