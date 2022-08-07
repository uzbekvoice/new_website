import React, { useLayoutEffect } from "react";
import { useRouter } from "next/router";

export default function Hakaton() {

  const router = useRouter();

  useLayoutEffect(() => {
    if (router.pathname === '/hakaton')
      router.replace("/hakaton/1");
  }, [router]);

  return (
    <div>
    </div>
  );
}
