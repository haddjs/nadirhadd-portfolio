import Image from "next/image";

const CardView = ({ profile_picture, isMd }) => {
  return (
    <div>
      <Image
        src={profile_picture}
        alt="Profile Pic"
        width={isMd ? 400 : 350}
        height={isMd ? 400 : 200}
        className="block rounded-lg border-4 border-muted drop-shadow-xl"
      />
    </div>
  );
};

export default CardView;
