import { A, createAsync, useLocation } from "@solidjs/router";
import { Show, Suspense } from "solid-js";
import { getUser } from "~/models/user";
import { FiLogOut } from "solid-icons/fi";
import * as Menu from "./ui/menu";
import { Avatar } from "./ui/avatar";
import { Button } from "./ui/button";
import { BiRegularHome } from "solid-icons/bi";
import { BiSolidHomeAlt2 } from "solid-icons/bi";

export default function Nav() {
  const user = createAsync(() => getUser());
  const location = useLocation();

  return (
    <nav class="border-b-[1px] border-solid border-gray-200">
      <ul class="flex items-stretch gap-6 p-3">
        <li>
          <A href="/">
            <Show
              when={location.pathname === "/"}
              fallback={<BiRegularHome size={40} />}
            >
              <BiSolidHomeAlt2 size={40} />
            </Show>
          </A>
        </li>
        <li>
          <A href="/accomodations">
            <Button
              as="span"
              variant={
                location.pathname === "/accomodations" ? "solid" : "ghost"
              }
            >
              Accomodations
            </Button>
          </A>
        </li>
        <li>
          <A href="/reservations">
            <Button
              as="span"
              variant={
                location.pathname === "/reservations" ? "solid" : "ghost"
              }
            >
              Reservations
            </Button>
          </A>
        </li>
        <li class="ml-auto h-[40px]">
          <Menu.Root
            positioning={{
              placement: "bottom-end",
            }}
          >
            <Menu.Trigger>
              <Suspense fallback={<Avatar name="" />}>
                <Avatar name={user()?.name || ""} src={user()?.avatar || ""} />
              </Suspense>
            </Menu.Trigger>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item id="logout" as="a" href="/api/logout" rel="external">
                  <FiLogOut /> Logout
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Menu.Root>
        </li>
      </ul>
    </nav>
  );
}
