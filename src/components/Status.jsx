const Status = ({ children, status }) => {
  return (
    <div className="flex-1 flex flex-col gap-[30px]">
      <h2 className={`status status-${status.id}`}>{status.name}</h2>
      {children}
    </div>
  );
};
export default Status;
