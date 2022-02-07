export default function Box(props) {
  return (
    <div className="border border-red-200">
      <div className="w-full h-200 p-2 bg-red-400 text-xl font-semibold text-white">
        {props.title}
      </div>
      <div className="p-2 bg-white">{props.children}</div>
    </div>
  );
}
