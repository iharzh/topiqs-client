import type { MetaFunction } from "@remix-run/node";
import {useEffect, useState} from "react";
import {redirect, useNavigate} from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Topiqs" },
    { name: "description", content: "Welcome to Topiqs!" },
  ];
};

export default function Index() {
  useEffect(() => {
    redirect('/login')
  }, []);


  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        Home
      </div>
    </div>
  );
}

