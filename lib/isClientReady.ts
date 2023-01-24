export default function isClientReady(): boolean {
    return typeof window !== "undefined";
}
