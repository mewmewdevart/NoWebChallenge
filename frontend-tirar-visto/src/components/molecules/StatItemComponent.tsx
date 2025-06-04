interface StatItemProps {
  value: string;
  label: string;
}
function StatItemComponent({ value, label }: StatItemProps) {
  return (
    <div className='w-full'> 
      <h2 className='text-[44px]'>{value}</h2>
      <span className='text-silver text-base'>{label}</span>
    </div>
  );
}
export default StatItemComponent;