import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useGetProductByNameQuery } from "@/lib/features/productsSlice";
import Link from "next/link";

function SearchProperity({ name }: { name: string }) {
  const { data, error, isLoading } = useGetProductByNameQuery(name);
  return (
    <CommandGroup heading="Resoult">
      {!isLoading &&
        data?.map((item: any, key: any) => (
          <Link href={`product/${item._id}`} key={key}>
            <CommandItem className="cursor-pointer">{item.name}</CommandItem>
          </Link>
        ))}

      <CommandSeparator />
    </CommandGroup>
  );
}

export default SearchProperity;
