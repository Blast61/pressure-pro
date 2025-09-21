import AdminClient from "@/components/admin/AdminClient";
//Admin is personalized/editor-like; avoid static prerender.
export const dynamic = "force-dynamic";

export default function AdminPage(){
    return <AdminClient />
}