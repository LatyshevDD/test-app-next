'use client'

import {useEffect} from "react";
import {useMutation} from "@apollo/client";
import {getUser, REFRESH_TOKEN} from "@/utils/api";
import {useProfileStore} from "@/utils/store";

// type dataType = {
//   data: {
//     refreshToken: {
//       access_token: string,
//       refresh_token: string
//     }
//   }
// }

export default function TokenRefresh({children}: Readonly<{
  children: React.ReactNode;
}>) {
  const[refreshToken] = useMutation(REFRESH_TOKEN);
  const setMyProfile = useProfileStore((store) => store.setMyProfile);
  let aToken = null;
  let rToken = null;

  if (typeof window !== "undefined") {
    aToken = localStorage.getItem("accessToken");
    rToken = localStorage.getItem("refreshToken");
  }

  useEffect(() => {
    if (aToken && rToken) {
      getUser()
          .then(({data}) => {
            setMyProfile({id: data.myProfile.id, name: data.myProfile.name, avatar: data.myProfile.avatar})
          })
          .catch((err:string) => {
            if (err === 'jwt expired') {
              refreshToken({variables: {refreshToken: rToken}})
                  .then((data:any) => {
                    localStorage.setItem("refreshToken", data.refreshToken.refresh_token);
                    localStorage.setItem("accessToken", data.refreshToken.access_token);
                  })
                  .then(() => {
                    getUser()
                        .then(({data}) => {
                          setMyProfile({id: data.myProfile.id, name: data.myProfile.name, avatar: data.myProfile.avatar})
                        })
                        .catch((err) =>{
                          return Promise.reject(err)
                        })
                  })
                  .catch((err) =>{
                    return Promise.reject(err)
                  })
            }
          })
    }
  },
  [])

  return <>{children}</>;
}