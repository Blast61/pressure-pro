import DashboardClient from "@/components/dashboard/DashboardClient";

//This page depends on client/localStorage state; don't prerender it.
export const dynamic = "force-dynamic";

export default function DashboardPage() {
    return <DashboardClient />;
}