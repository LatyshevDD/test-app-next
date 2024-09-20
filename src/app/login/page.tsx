'use client'

import {useState} from "react";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {useMutation} from "@apollo/client";
import {getUser, LOGIN} from "@/utils/api";
import {useProfileStore} from "@/utils/store";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login,{ data }] = useMutation(LOGIN);
    const setMyProfile = useProfileStore((store) => store.setMyProfile);

    const handleSubmit = () => {
        login({ variables: { email: email, password: password }})
            .then(() => {
                localStorage.setItem("accessToken", data.login.access_token);
                localStorage.setItem("refreshToken", data.login.refresh_token);
            })
            .then(() => {
               getUser()
                   .then(({data}) => {
                       setMyProfile({id: data.myProfile.id, name: data.myProfile.name, avatar: data.myProfile.avatar})
                    })
                   .catch((error) => {console.log(error)})
            })
            .catch((error) => {console.log(error)});
    }

    return (
            <div className="flex items-center justify-center w-full h-screen absolute bg-black top-0">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription>
                            Enter your email below to login to your account.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input value={email} id="email" type="email" placeholder="m@example.com" required onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input value={password} id="password" type="password" required onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" onClick={handleSubmit}>Sign in</Button>
                    </CardFooter>
                </Card>
            </div>
    )
}
