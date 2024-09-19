'use client'
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
import {ApolloProvider, gql} from "@apollo/client";
import {client} from "@/utils/api";

export default function LoginForm() {

    const handleSubmit = () => {
        client
            .query({
                query: gql`
                  query login($email: "john@mail.com", $password: "changeme") {
                    access_token
                    refresh_token
                   }
                  `,
            })
            .then((result) => console.log(result));
    }

    return (
        <ApolloProvider client={client}>
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
                            <Input id="email" type="email" placeholder="m@example.com" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" onClick={handleSubmit}>Sign in</Button>
                    </CardFooter>
                </Card>
            </div>
        </ApolloProvider>

    )
}
