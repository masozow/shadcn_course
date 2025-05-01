import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

const Page = () => {
  return (
    <div>
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-full items-center border-2 border-dashed justify-center rounded-md">
          Right click
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Profile</ContextMenuItem>
          <ContextMenuItem>Billing</ContextMenuItem>
          <ContextMenuItem>Team</ContextMenuItem>
          <ContextMenuItem>Subscription</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
};

export default Page;
