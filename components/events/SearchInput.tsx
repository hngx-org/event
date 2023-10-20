"use client";

import Image from "next/image";
import searchImg from "@/public/images/search.svg";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {
  const search = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string | null>(
    search ? search.get("q") : ""
  );
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    if (typeof searchQuery !== "string") {
      return;
    }

    router.push(`/event/event-search?q=${searchQuery}`);
  };

  return (
    <form
      onSubmit={onSearch}
      className="w-full md:flex hidden items-center gap-4 border border-black/20 p-[10px] max-w-[350px] rounded-lg"
    >
      <Image src={searchImg} alt="search" className="h-4 w-4" />
      <input
        value={searchQuery || ""}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="w-full border-none outline-none"
        placeholder="Search for more events"
      />
    </form>
  );
};

export default SearchInput;
