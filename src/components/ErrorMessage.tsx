import { ReactNode } from "react";

export default function ErrorMessage({ children }: { children: ReactNode; }) {
    return (
        <div>
            <p className="error">{children}</p>
        </div>
    );
}
