'use client'
import React, { useEffect, useState } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";


export function Navbar() {
  const pathname = usePathname()
  const { data: session, status: sessionStatus, update } = useSession();
  const IsUserLoggedIn = sessionStatus === "authenticated";
  const [imgError, setImgError] = useState(false);

  const router = useRouter()
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);


  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  async function HandleLoggin() {
    if (IsUserLoggedIn) {
      // await logout();
      await signOut({ callbackUrl: '/' })
    } else {
      router.push("/login");
    }
  }
  useEffect(() => {
    update();
  }, [pathname])

  if (sessionStatus === "loading") {
    return <div className="h-16 bg-[#13131a]" />; // Loading skeleton or placeholder
  }

  // if (!session?.user?.image) return null;  
  return (
    <MTNavbar
      shadow={true}
      fullWidth
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className={`fixed top-0 z-50 transition-all duration-300 ${isScrolling
        ? 'bg-white/40 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]'
        : 'bg-transparent border-transparent'
        }`}
      onResize={undefined} onResizeCapture={undefined}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          color={'inherit'}
          className="text-lg font-bold font-[inherit] group" onResize={undefined} onResizeCapture={undefined}
        >
          <Link href={'/'} className="flex flex-row gap-2">
            <img
              src={'image/logo.png'}
              alt="logo"
              className="w-10 h-10 object-fit "
            />
            <span className={`my-2  ${isScrolling? ' text-[#4A1525] ':'text-[#d9bf77]' } group-hover:text-[#4A1525] transition-all duration-300 font-semibold `} >
              Touch & Care

            </span>
          </Link>
        </Typography>

        <div className=" items-center gap-4 hidden lg:flex ">

          {IsUserLoggedIn && (
            <div className={`flex items-center gap-1 p-1 rounded-lg bg-[black] `}>
              {session?.user?.image && !imgError ? (
                <img
                  src={session.user.image}
                  alt="" // Keep alt empty so broken alt text won't render inside the circle
                  referrerPolicy="no-referrer" // Allows loading Google avatar images without 403 errors
                  onError={() => setImgError(true)}
                  className="w-10 h-10 rounded-lg object-cover border border-purple-500/30"
                />
              ) : (
                <div className="w-10 h-10 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-lg shadow-md shrink-0">
                  {session?.user?.name ? session.user.name.charAt(0).toUpperCase() : "U"}
                </div>
              )}

              {/* Optional: Display the user's name next to the avatar */}
              {session?.user?.name && (
                <span className={`w-full h-10 flex justify-center items-center rounded-lg p-2  text-sm font-medium text-white`}>
                  {session.user.name}
                </span>
              )}

            </div>
          )}
          <Button
            color="white"
            variant="text"
            onClick={() => {
              HandleLoggin();
            }}
            className="relative group text-[#4A1525] overflow-hidden hover:bg-brown-900/5" onResize={undefined} onResizeCapture={undefined}>
            <span className="relative z-10">
              Log {IsUserLoggedIn ? 'Out' : 'In'}
            </span>
            <span className={`absolute bottom-0 left-0 h-[2px] w-full bg-${IsUserLoggedIn ? 'red-500' : 'black'} scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100`} />
          </Button>
        </div>
        <IconButton
          variant="text"
          color={"gray"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden" onResize={undefined} onResizeCapture={undefined}        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">

          {IsUserLoggedIn && (
            <div className={`flex items-center gap-1 p-1 rounded-lg bg-black `}>
              {session?.user?.image && !imgError ? (
                <img
                  src={session.user.image}
                  alt="" // Keep alt empty so broken alt text won't render inside the circle
                  referrerPolicy="no-referrer" // Allows loading Google avatar images without 403 errors
                  onError={() => setImgError(true)}
                  className="w-10 h-10 rounded-lg object-cover border border-purple-500/30"
                />
              ) : (
                <div className="w-10 h-10 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-lg shadow-md shrink-0">
                  {session?.user?.name ? session.user.name.charAt(0).toUpperCase() : "U"}
                </div>
              )}

              {/* Optional: Display the user's name next to the avatar */}
              {session?.user?.name && (
                <span className={`w-full h-10 flex justify-center items-center rounded-lg p-2  text-sm font-medium text-white`}>
                  {session.user.name}
                </span>
              )}

            </div>
          )}

          <div className="mt-6 flex flex-col items-center gap-4">
            <Button variant="text" onResize={undefined} onResizeCapture={undefined}

              onClick={() => {
                HandleLoggin();
              }}
            >
              Log {IsUserLoggedIn ? 'Out' : 'In'}

            </Button>
            <Button variant="text" onResize={undefined} onResizeCapture={undefined}

              onClick={() => {
                HandleLoggin();
              }}
            >
              Log {IsUserLoggedIn ? 'Out' : 'In'}

            </Button>

          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
