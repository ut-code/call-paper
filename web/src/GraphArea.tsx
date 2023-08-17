type GraphAreaProps = {
  x: number;
  y: number;
};

export default function GraphArea(props: GraphAreaProps): JSX.Element {
  return (
    <svg width="100%" height="500">
      <rect
        x={props.x}
        y={props.y}
        width="200"
        height="200"
        stroke="black"
        stroke-width="2"
        fill="none"
      />
      <text x={props.x + 10} y={props.y + 20} font-family="Arial" font-size="16" fill="black">
        title
      </text>
      <text x={props.x + 10} y={props.y + 40} font-family="Arial" font-size="16" fill="black">
        author
      </text>
    </svg>
  );
}
