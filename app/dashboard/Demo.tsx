import Image from "next/image";

export default function Demo() {
  return (
    <div className="w-full items-center justify-center ">
      <div className="bg-accent w-full min-h-[400px] h-full rounded-[35px] flex items-center justify-center">
        <button title="Play Button">
          <Image
            src="/assets/images/play_btn.svg"
            title="Play Button"
            alt="Play Button"
            width={50}
            height={50}
          />
        </button>
      </div>
    </div>
  );
}
