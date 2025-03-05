import Logo from "@/src/shared/ui/Logo";
import { ModeToggle } from "@/src/shared/ui/ModeToggle";

export function NavigationBar() {
    return (
        <>
            <nav className="flex h-16 border-b items-center justify-between px-4">
                <div>
                    <Logo />
                </div>
                <div className="flex space-x-4 items-center">
                    <div>메뉴1</div>
                    <div>메뉴2</div>
                    <div>메뉴3</div>
                    <div>메뉴4</div>
                    <div>메뉴5</div>
                    <ModeToggle />
                </div>
            </nav>
        </>
    )
}