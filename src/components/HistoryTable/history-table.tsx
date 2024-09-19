import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import PointerDownIcon from "@/images/pointer-down.svg";
import Image from "next/image";

type ApiHistoryType = {
  id: string,
  Date: string,
  Description: string,
  Used: string,
  Earned: string,
  Balance: string,
};
type DataPropsType = ApiHistoryType[];

export default function HistoryTable({data}:{data: DataPropsType}) {
  return (
  <Table>
    <TableHeader className={'h-[50px] bg-[#DAE6F2] font-inter font-medium text-sm'}>
      <TableRow>
        <TableHead className="w-[100px] text-black">
          <div className={'flex gap-1'}>
            <p>Date</p>
            <button className={'hover:opacity-70 active:opacity-45'}>
              <Image src={PointerDownIcon} alt={'pointer-down'} width={16} height={16} />
            </button>
          </div>
        </TableHead>
        <TableHead className={'w-[350px] text-black'}>Description</TableHead>
        <TableHead className={'w-[170px] text-black'}>Used Days (-)</TableHead>
        <TableHead className={'w-[170px] text-black'}>Earned Days (+)</TableHead>
        <TableHead className={'w-[170px] text-black'}>Balance</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {
        data.map((item) => (
            <TableRow key={item.id} className={'h-[60px] !border-b-2 border-b-[#7C96B1]'}>
              <TableCell className="font-inter font-medium text-sm text-black">{item.Date}</TableCell>
              <TableCell className="font-inter font-medium text-sm text-black">{item.Description}</TableCell>
              <TableCell className="font-inter font-medium text-sm text-black">{item.Used}</TableCell>
              <TableCell className="font-inter font-medium text-sm text-black">{item.Earned}</TableCell>
              <TableCell className="font-inter font-medium text-sm text-black">{item.Balance}</TableCell>
            </TableRow>
        ))
      }
    </TableBody>
  </Table>
  )
}