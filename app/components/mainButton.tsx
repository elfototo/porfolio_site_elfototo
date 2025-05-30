export default function MainButton({ value }: { value: string }) {
  return (
    <>
      <button className="h-auto py-4 px-10 cursor-pointer bg-yellow-500 hover:scale-103 text-white font-inter-semiBold rounded-lg mr-4 transition duration-300">
        {value}
      </button>
    </>
  );
}
