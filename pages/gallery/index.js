import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function () {
  const router = useRouter();

  useEffect(() => {
    console.log(router);
    router.beforePopState(({ as }) => {
      if (as !== router.asPath) {
        console.log(router);
        // Will run when leaving the current page; on back/forward actions
        // Add your logic here, like toggling the modal state
      }
      console.log(router);
      return true;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, [router]);

  return (
    <div>
      test
      <Link href="/">start</Link>
      <button onClick={() => console.log(router)}>log</button>
    </div>
  );
}
