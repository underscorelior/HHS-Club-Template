"use client";

import { Button } from "@/components/ui/button";
import config from "@/lib/config.js";

export default function Home() {
  return (
    <main className="h-screen items-center justify-between pb-52 pt-32 pl-[18rem] pr-[16rem]">
      <div className="w-full h-full text-sm grid grid-cols-[45%,15%,40%]">
        <div className="flex flex-col gap-y-8 pt-10">
          <div className="flex items-end text-7xl font-bold">
            {config.club_name}
          </div>
          <div className="text-xl ">{config.home_page.description}</div>
          <div className="flex gap-x-5">
            <Button variant="default" size="xl">
              <a href={config.signup_form}>Sign up now!</a>
            </Button>
            {config.home_page.secondary_button.display && (
              <Button variant="outline" size="xl">
                <a href={config.home_page.secondary_button.url}>
                  {config.home_page.secondary_button.text}
                </a>
              </Button>
            )}
          </div>
        </div>
        <div className="col-start-3">Probably a carousel here</div>
      </div>
    </main>
  );
}
