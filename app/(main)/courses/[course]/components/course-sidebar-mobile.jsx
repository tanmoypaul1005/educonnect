import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { CourseSidebar } from "./course-sidebar";

export const CourseSidebarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger className="pr-4 transition lg:hidden hover:opacity-75">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white w-72">
        <CourseSidebar />
      </SheetContent>
    </Sheet>
  );
};
