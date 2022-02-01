export default function Box(props) {
  return (
    <div className="border-2 border-red-400">
      <div className="w-full h-200 p-2 bg-red-400 text-xl font-semibold text-white">
        {props.title}
      </div>
      <div className="p-2">{props.children}</div>
    </div>
  );
}
