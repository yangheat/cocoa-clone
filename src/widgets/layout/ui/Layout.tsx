import { ReactNode } from "react";
import { NavigationBar } from "./navigation-bar";

export function Layout({ children }: { children: ReactNode}) {
    return (
        <>
            <main>
                <NavigationBar />
                {children}
            </main>
        </>
    )
}