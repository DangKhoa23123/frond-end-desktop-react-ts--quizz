import { Route } from "@/components/routes/Route";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={Route.signup}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Đăng Ký
        </button>
      </Link>
      <Link href={Route.login}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Đăng Nhập
        </button>
      </Link>
    </div>
  );
}
