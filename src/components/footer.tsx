import { Typography, Button, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            as="a"
            href="/"
            variant="h6"
            className="text-gray-900" onResize={undefined} onResizeCapture={undefined}          >
            Touch & Care
          </Typography>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors" onResize={undefined} onResizeCapture={undefined}                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <IconButton size="sm" color="gray" variant="text" onResize={undefined} onResizeCapture={undefined}>
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text" onResize={undefined} onResizeCapture={undefined}>
              <i className="fa-brands fa-youtube text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text" onResize={undefined} onResizeCapture={undefined}>
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text" onResize={undefined} onResizeCapture={undefined}>
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
        </div>
       
      </div>
    </footer>
  );
}

export default Footer;
