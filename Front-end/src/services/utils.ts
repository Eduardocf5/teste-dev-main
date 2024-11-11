export const getStatus = (status: string) => {
    if(status === "Alive") return "bg-green-600";
    if(status === "unknown") return "bg-stone-600";
    if(status === "Dead") return "bg-red-600";
}