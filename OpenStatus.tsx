const OpenStatus = () => {
  const now = new Date();
  const hour = now.getHours();
  const isOpen = hour >= 9 || hour < 1;

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-sm">
      <span className={`w-2 h-2 rounded-full ${isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
      <span className="text-foreground/80">{isOpen ? "Open" : "Closed"} · Closes 1 AM</span>
    </div>
  );
};

export default OpenStatus;
