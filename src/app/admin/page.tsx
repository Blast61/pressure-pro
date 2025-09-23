import AdminClient from "@/components/admin/AdminClient";
//Admin is personalized/editor-like; avoid static prerender.
export const dynamic = "force-dynamic";

export default function AdminPage(){
    return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">    
        <AdminClient />
    </main>
    );
}