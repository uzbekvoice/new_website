import React, { useLayoutEffect } from "react";
import { useRouter } from "next/router";

export default function Bosqich() {

  const router = useRouter();

  useLayoutEffect(() => {
    if (router.pathname === '/bosqich')
      router.replace("/boqich/1");
  }, [router]);

  return (
    <div>
    </div>
  );
}
