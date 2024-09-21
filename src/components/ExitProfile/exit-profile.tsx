'use client'

import {useProfileStore} from "@/utils/store";
import {useRouter} from "next/navigation";

export default function ExitProfile() {
  const removeMyProfile = useProfileStore((store) => store.removeMyProfile);
  const router = useRouter();

  const handleClick = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    removeMyProfile();
    router.push("/login");
  }
  return (
      <button
          className={'font-medium font-inter text-black text-sm border rounded-lg border-[#7C96B1] p-[8px] mb-[10px] hover:opacity-30 active:opacity-45'}
          onClick={handleClick}
      >
        Выход
      </button>
  )
}