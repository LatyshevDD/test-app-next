'use client'

import {useProfileStore} from "@/utils/store";

export default function ProfileName() {

  const myProfile = useProfileStore((store) => store.myProfile);

  return (
      <h2 className="font-inter font-semibold text-[20px] sm:text-[28px] text-black">
        {myProfile? myProfile.name : ""}
      </h2>
  )
}