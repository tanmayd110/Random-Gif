import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {

  return (
    <div className="w-full h-content flex flex-col background items-center gap-5 pb-7 ">
      <h1 className="bg-white py-4 w-10/12 mx-auto text-center rounded-lg mt-5 text-2xl font-semibold">Random GIFs</h1>
      <div className="w-7/12 flex flex-col items-center gap-5">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
