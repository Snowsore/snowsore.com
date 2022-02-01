export default function Frame(props) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      {props.children}
    </div>
  );
}
