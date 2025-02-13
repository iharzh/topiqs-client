import {Form, Outlet} from "@remix-run/react";

export default function Auth() {
  return (
    <div className="h-full">
      <Outlet></Outlet>
    </div>
  )
}
