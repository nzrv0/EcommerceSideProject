import ShowRoute from "@/components/shared/ShowRoute";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="container my-20">
      <ShowRoute routes={["404 Error"]} />
      <div className="mt-[140px] flex flex-col items-center">
        <h2 className="text-[110px] font-medium">404 Not Found</h2>
        <p className="mb-20 mt-5 text-xl font-normal text-black">
          Could not find requested resource
        </p>
        <Link href="/">
          <Button variant="primary" className="text-white">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
