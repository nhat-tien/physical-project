import { useRouter } from "next/router"
import { useMemo } from "react";

export default function Path() {
const router = useRouter()
const route = useMemo(() => router.route.split("/"),[router]);

    return (
        <span className="opacity-50">{`${route[1]} > ${route[2]} > ${route[3]}`}</span>
    )
}
