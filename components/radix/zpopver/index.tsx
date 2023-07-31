"use client";
import * as Popover from "@radix-ui/react-popover";
import "./styles.css";

function ZPopver() {
  return (
    <Popover.Root>
      <Popover.Trigger className="PopoverTrigger">More Info</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          SomeInfo
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default ZPopver;
