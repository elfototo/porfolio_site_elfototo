export default function MainButton({ value }: { value: string }) {
  return (
    <>
      <button className="h-auto py-4 px-8 cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-lg mr-4 transition duration-300">
        {value}
      </button>
    </>
  );
}
