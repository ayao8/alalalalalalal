export default function App() {
  return (
    <div className="max-w-screen-sm m-auto p-8 leading-4 text-sm text-neutral-700">
      <div className="space-y-4">
        <p className="">
          We are a collective of{" "}
          <span className="font-semibold text-neutral-800">Al</span>s.
        </p>
        <hr />
        <button className="group flex space-x-1 text-neutral-700 hover:text-neutral-900">
          <p className="">
            <span className="font-semibold text-neutral-800">Al</span>az Sengul
          </p>
          <p className="transition duration-150 ease-out hover:ease-in group-hover:translate-x-0.5">
            →
          </p>
        </button>
        <button className="group flex space-x-1 text-neutral-700 hover:text-neutral-900">
          <p className="">
            <span className="font-semibold text-neutral-800">Al</span>ly Zhu
          </p>
          <p className="transition duration-150 ease-out hover:ease-in group-hover:translate-x-0.5">
            →
          </p>
        </button>
        <button className="group flex space-x-1 text-neutral-700 hover:text-neutral-900">
          <p className="">
            <span className="font-semibold text-neutral-800">Al</span>ice Zhao
          </p>
          <p className="transition duration-150 ease-out hover:ease-in group-hover:translate-x-0.5">
            →
          </p>
        </button>
      </div>
    </div>
  );
}
